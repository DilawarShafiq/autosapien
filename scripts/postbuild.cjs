/*
 * Post-build SEO step.
 *
 * The app is a client-rendered SPA, so GitHub Pages previously had no file at
 * /projects/* and served 404.html — with an HTTP 404 status. Users saw the page
 * (React routed client-side) but crawlers saw "Not Found" and refused to index.
 *
 * This emits a real index.html per route (HTTP 200) with per-route title,
 * description, canonical and social tags, plus sitemap.xml and robots.txt.
 */
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const source = path.join(distDir, 'index.html');

// Canonical origin: matches the CNAME file (apex, not www).
const ORIGIN = 'https://autosapien.com';
const OG_IMAGE = `${ORIGIN}/og-image.png`;
const BRAND = 'Autosapien';

const ROUTES = [
  {
    path: '/',
    title: 'Autosapien | AI & Robotics',
    description:
      'Autosapien builds AI and robotics for the real world — humanoids, autonomous systems, and agentic AI that automates USA healthcare operations.',
    priority: '1.0',
  },
  {
    path: '/projects/healthcare-it',
    title: `xEHR.io — AI Healthcare Platform for USA Practices | ${BRAND}`,
    description:
      'xEHR.io combines a FHIR R4-native EHR, practice management, and autonomous revenue cycle automation into one platform, powered by AI agents working 24/7.',
    priority: '0.9',
  },
  {
    path: '/projects/agentic-ai',
    title: `Agentic AI Workforce — AI FTEs for Healthcare | ${BRAND}`,
    description:
      'Autonomous AI FTEs for USA healthcare providers, including RCM Employee for revenue cycle management, workflow automation, and custom agents.',
    priority: '0.9',
  },
  {
    path: '/projects/rcm-automation',
    title: `RCM Automation for USA Healthcare | ${BRAND}`,
    description:
      'End-to-end revenue cycle management powered by agentic AI — from charge capture to payment posting, automating billing while maximizing reimbursement.',
    priority: '0.9',
  },
  {
    path: '/projects/medical-coding',
    title: `AI Medical Coding | ${BRAND}`,
    description:
      'An AI coding engine that reads clinical documentation like an expert coder, assigning accurate codes in seconds with full payer compliance.',
    priority: '0.8',
  },
  {
    path: '/projects/smart-scheduling',
    title: `Smart Scheduling for Healthcare | ${BRAND}`,
    description:
      'AI-powered scheduling that maximizes provider utilization, minimizes patient wait times, and creates a seamless booking experience across all channels.',
    priority: '0.8',
  },
  {
    path: '/projects/thales',
    title: `Thales — Agentic Crypto Trading over WhatsApp | ${BRAND}`,
    description:
      'Thales is a conversational trading agent that talks to clients on WhatsApp, generates signals from fused market data, and executes autonomously on Binance.',
    priority: '0.8',
  },
  {
    path: '/projects/humanoid',
    title: `Autosapien G1 — Humanoid Robot | ${BRAND}`,
    description:
      'Autosapien G1 is a human-height humanoid with over 40 degrees of freedom, built not for factories alone but for homes, hospitals, and everyday help.',
    priority: '0.8',
  },
  {
    path: '/projects/robotics',
    title: `Autonomous Robotics | ${BRAND}`,
    description:
      'Autonomous systems combining advanced AI with precision engineering — from industrial automation to healthcare robotics.',
    priority: '0.8',
  },
  {
    path: '/projects/industrial-robotics',
    title: `Factory Intelligence — Industrial Robotics | ${BRAND}`,
    description:
      'Industrial robots that learn, adapt, and optimize using reinforcement learning and computer vision — predicting maintenance and working safely alongside people.',
    priority: '0.8',
  },
  {
    path: '/projects/home-robotics',
    title: `Home Companion Robots | ${BRAND}`,
    description:
      'Home robots that genuinely help — cleaning, eldercare, household automation, and protection. Designed for real life, not tech demos.',
    priority: '0.8',
  },
  {
    path: '/projects/foundation-models',
    title: `Embodied AI Research & Foundation Models | ${BRAND}`,
    description:
      'Foundation models optimized for embodied intelligence: physics understanding, spatial reasoning, object manipulation, and human interaction.',
    priority: '0.8',
  },
  {
    path: '/projects/film-studio',
    title: `AI Film Studio | ${BRAND}`,
    description:
      'A fleet of specialized AI agents — writers, directors, editors, composers, VFX artists — producing complete short films from a single prompt.',
    priority: '0.8',
  },
  {
    path: '/privacy',
    title: `Privacy Policy | ${BRAND}`,
    description: 'How Autosapien collects, uses, and protects personal data across its products and services.',
    priority: '0.3',
  },
  {
    path: '/terms',
    title: `Terms of Service | ${BRAND}`,
    description: 'The terms governing use of Autosapien products, platforms, and services.',
    priority: '0.3',
  },
  {
    path: '/security',
    title: `Security | ${BRAND}`,
    description: 'Autosapien security practices: infrastructure, access control, encryption, and incident response.',
    priority: '0.3',
  },
  {
    path: '/hipaa',
    title: `HIPAA Compliance | ${BRAND}`,
    description: 'How Autosapien handles protected health information and meets HIPAA obligations across its healthcare products.',
    priority: '0.3',
  },
];

/** Escape a string for safe use inside a double-quoted HTML attribute. */
function attr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Canonical URL for a route. Directory routes resolve with a trailing slash. */
function canonicalFor(routePath) {
  return routePath === '/' ? `${ORIGIN}/` : `${ORIGIN}${routePath}/`;
}

// Organization schema — gives Google explicit brand/entity data for the site.
const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Autosapien',
  url: `${ORIGIN}/`,
  logo: `${ORIGIN}/logo.png`,
  description:
    'Autosapien builds AI and robotics for the real world — humanoids, autonomous systems, and agentic AI that automates USA healthcare operations.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  areaServed: 'US',
};

function renderRoute(template, route) {
  const canonical = canonicalFor(route.path);
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${attr(route.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${attr(route.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${attr(route.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${attr(route.description)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${OG_IMAGE}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${attr(route.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${attr(route.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`
  );

  // Canonical link + (homepage only) Organization schema.
  const head = [`    <link rel="canonical" href="${canonical}" />`];
  if (route.path === '/') {
    head.push(`    <script type="application/ld+json">${JSON.stringify(ORG_JSONLD)}</script>`);
  }
  html = html.replace('</head>', `${head.join('\n')}\n  </head>`);

  return html;
}

function writeRoute(template, route) {
  const html = renderRoute(template, route);
  if (route.path === '/') {
    fs.writeFileSync(source, html);
    return;
  }
  const dir = path.join(distDir, route.path.replace(/^\//, ''));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(
    (r) =>
      `  <url>\n    <loc>${canonicalFor(r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml);
}

function writeRobots() {
  const txt = `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`;
  fs.writeFileSync(path.join(distDir, 'robots.txt'), txt);
}

const template = fs.readFileSync(source, 'utf8');

// SPA fallback for genuinely unknown URLs. Built from the untouched template so
// it keeps the generic homepage metadata.
fs.writeFileSync(path.join(distDir, '404.html'), template);

ROUTES.forEach((route) => writeRoute(template, route));
writeSitemap();
writeRobots();

console.log(`postbuild: wrote ${ROUTES.length} prerendered routes, sitemap.xml, robots.txt`);
