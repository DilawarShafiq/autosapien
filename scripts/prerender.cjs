/**
 * Prerender every route into its HTML file.
 *
 * postbuild.cjs gives each route its own index.html with the right meta, but
 * the body is still an empty <div id="root">: every word on the page arrives
 * through JavaScript. Google renders JavaScript late and weights it less, so
 * the Academy's 530 static pages outranked the whole main site on a brand
 * search. This loads each route from the sitemap in headless Chrome, lets
 * React render it, and writes the resulting markup into the root div.
 *
 * The client still mounts with createRoot, which replaces this markup on load,
 * so the prerendered HTML only has to be readable, not hydration-exact.
 *
 * Chrome comes from CHROME_PATH, else the usual install locations (GitHub's
 * ubuntu runners ship /usr/bin/google-chrome).
 */
const fs = require('fs');
const http = require('http');
const path = require('path');
const puppeteer = require('puppeteer-core');

const distDir = path.resolve(__dirname, '..', 'dist');
const ORIGIN = 'https://autosapien.com';
const ROOT_EMPTY = '<div id="root"></div>';

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium-browser',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function fileFor(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const direct = path.join(distDir, clean);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  const index = path.join(distDir, clean, 'index.html');
  if (fs.existsSync(index)) return index;
  return path.join(distDir, '404.html');
}

/** Paths from the sitemap postbuild.cjs just wrote, e.g. "/projects/thales/". */
function routes() {
  const xml = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, '') || '/');
}

/**
 * Framer Motion leaves entrance states (opacity 0, offset transforms) inline
 * on anything that had not finished animating. Strip them so the text is
 * visible in the static HTML; the client re-animates on mount anyway.
 */
function settle(html) {
  return html.replace(/ style="([^"]*)"/g, (whole, css) => {
    const kept = css
      .split(';')
      .map((d) => d.trim())
      .filter((d) => d && !/^opacity:\s*0(\.\d+)?$/.test(d) && !/^transform:/.test(d))
      .join('; ');
    return kept ? ` style="${kept}"` : '';
  });
}

async function main() {
  const executablePath = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!executablePath) {
    throw new Error(`prerender: no Chrome found; set CHROME_PATH (tried ${CHROME_CANDIDATES.join(', ')})`);
  }

  const server = http.createServer((req, res) => {
    const file = fileFor(req.url);
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // Render everything before writing anything, so each page loads the
  // untouched shell rather than one we have already filled.
  const rendered = [];
  try {
    for (const route of routes()) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.waitForSelector('#root > *', { timeout: 30000 });
      // Scroll through so whileInView / useInView sections mount their content.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await new Promise((r) => setTimeout(r, 800));
      const html = await page.$eval('#root', (el) => el.innerHTML);
      rendered.push({ route, html: settle(html) });
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  for (const { route, html } of rendered) {
    const file = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route, 'index.html');
    const shell = fs.readFileSync(file, 'utf8');
    if (!shell.includes(ROOT_EMPTY)) throw new Error(`prerender: no empty root in ${file}`);
    fs.writeFileSync(file, shell.replace(ROOT_EMPTY, `<div id="root">${html}</div>`));
  }
  console.log(`prerender: rendered ${rendered.length} routes into static HTML`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
