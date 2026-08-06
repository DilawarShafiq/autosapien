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
    title: `xEHR.io — AI-Native EHR & Medical Billing Automation | ${BRAND}`,
    description:
      'xEHR.io combines a FHIR R4-native EHR, practice management, and revenue cycle automation for US healthcare, powered by agentic AI working 24/7.',
    priority: '0.9',
    product: {
      type: 'SoftwareApplication',
      name: 'xEHR.io',
      category: 'HealthApplication',
      sameAs: 'https://xehr.io',
      serviceType: 'AI-native EHR, practice management and revenue cycle automation',
    },
  },
  {
    path: '/projects/agentic-ai',
    title: `US Healthcare Administrative Workflow Automation | ${BRAND}`,
    description:
      'Agentic AI that automates US healthcare administrative workflows — eligibility, prior authorization, billing, and A/R — delivered as autonomous AI FTEs.',
    priority: '0.9',
    product: {
      type: 'Service',
      name: 'RCM Employee',
      sameAs: 'https://rcmemployee.com',
      serviceType:
        'Agentic automation for medical billing, medical coding and revenue cycle management',
    },
  },
  {
    path: '/projects/rcm-automation',
    title: `Revenue Cycle Management Automation with Agentic AI | ${BRAND}`,
    description:
      'Revenue cycle management automation for US healthcare — charge capture, claim scrubbing, submission, denial management, payment posting and A/R follow-up.',
    priority: '0.9',
    product: {
      type: 'Service',
      name: 'RCM Automation',
      serviceType: 'Revenue cycle management automation with agentic AI',
    },
  },
  {
    path: '/projects/medical-coding',
    title: `Medical Billing and Coding Automation with Agentic AI | ${BRAND}`,
    description:
      'Medical billing and coding automation with agentic AI — ICD-10-CM, CPT and E&M code assignment from clinical documentation, with payer compliance built in.',
    priority: '0.9',
    product: {
      type: 'Service',
      name: 'AI Medical Coding',
      serviceType: 'Medical billing and coding automation with agentic AI',
    },
  },
  {
    path: '/projects/smart-scheduling',
    title: `Patient Scheduling & Intake Automation with Agentic AI | ${BRAND}`,
    description:
      'Patient scheduling and intake automation with agentic AI — booking, reminders, waitlist backfill, registration and insurance eligibility verification.',
    priority: '0.9',
    product: {
      type: 'Service',
      name: 'Smart Scheduling',
      serviceType: 'Patient scheduling and intake automation with agentic AI',
    },
  },
  {
    path: '/projects/thales',
    title: `Thales — Agentic Crypto Trading over WhatsApp | ${BRAND}`,
    description:
      'Thales is a conversational trading agent that talks to clients on WhatsApp, generates signals from fused market data, and executes autonomously on Binance.',
    priority: '0.8',
    product: {
      type: 'SoftwareApplication',
      name: 'Thales',
      category: 'FinanceApplication',
      sameAs: 'https://thales.autosapien.com',
      serviceType: 'Agentic crypto trading over WhatsApp',
    },
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
    title: `Zara AI — AI Film Studio & Text to Video | ${BRAND}`,
    description:
      'Zara AI turns a story prompt into a finished short film — script, scenes, video, AI voiceover and an original score — produced by a fleet of specialized AI agents.',
    priority: '0.8',
    product: {
      type: 'SoftwareApplication',
      name: 'Zara AI',
      category: 'MultimediaApplication',
      sameAs: 'https://zaraai.autosapien.com',
      serviceType: 'AI short-film, text-to-video and text-to-image generation',
    },
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

const ORG_ID = `${ORIGIN}/#organization`;

// Topics the organization is an authority on. Feeds Google's entity
// understanding of what this company actually does.
const KNOWS_ABOUT = [
  'US healthcare administrative workflow automation',
  'Medical billing automation',
  'Medical billing and coding automation',
  'Revenue cycle management automation',
  'Patient scheduling and intake automation',
  'Insurance eligibility verification',
  'Prior authorization automation',
  'Denial management and appeals',
  'Agentic AI',
  'Robotics',
  'Generative video and AI film production',
];

// Organization schema — gives Google explicit brand/entity data for the site,
// and an offer catalog naming the products so they are attributed to Autosapien
// rather than read as unrelated third-party domains.
const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Autosapien',
  url: `${ORIGIN}/`,
  logo: `${ORIGIN}/logo.png`,
  description:
    'Autosapien automates US healthcare administrative workflows with agentic AI — medical billing, coding, revenue cycle management, and patient scheduling and intake — alongside its robotics and embodied AI research.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  knowsAbout: KNOWS_ABOUT,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Autosapien products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'xEHR.io',
          applicationCategory: 'HealthApplication',
          url: 'https://xehr.io',
          description: 'AI-native EHR, practice management and revenue cycle automation for US healthcare practices.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'RCM Employee',
          url: 'https://rcmemployee.com',
          description:
            'An autonomous AI FTE for US healthcare providers covering medical billing, medical coding and end-to-end revenue cycle management.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'BetterCompliant',
          url: 'https://bettercompliant.com',
          description: 'Compliance automation for regulated organizations.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Thales',
          applicationCategory: 'FinanceApplication',
          url: 'https://thales.autosapien.com',
          description: 'Agentic crypto trading delivered over WhatsApp.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Zara AI',
          applicationCategory: 'MultimediaApplication',
          url: 'https://zaraai.autosapien.com',
          description:
            'AI film studio that generates complete short films — script, scenes, video, voiceover and score — from a text prompt.',
        },
      },
    ],
  },
};

// Long-form copy and FAQs live in one JSON file shared with the React
// components, so the rendered page and the structured data cannot diverge.
const pageContent = JSON.parse(
  fs.readFileSync(path.join(projectRoot, 'src', 'data', 'pageContent.json'), 'utf8')
);

/** FAQPage schema built from the same FAQ entries the page renders. */
function faqJsonLd(routePath) {
  const entry = pageContent[routePath];
  if (!entry || !entry.faqs || entry.faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entry.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

/** Per-page schema tying a product back to the Autosapien organization. */
function productJsonLd(route) {
  const p = route.product;
  const node = {
    '@context': 'https://schema.org',
    '@type': p.type,
    name: p.name,
    description: route.description,
    url: canonicalFor(route.path),
    provider: { '@type': 'Organization', '@id': ORG_ID, name: BRAND },
    areaServed: { '@type': 'Country', name: 'United States' },
  };
  if (p.sameAs) node.sameAs = p.sameAs;
  if (p.category) node.applicationCategory = p.category;
  if (p.type === 'Service') node.serviceType = p.serviceType;
  return node;
}

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

  // Canonical link, plus Organization schema on the homepage and product
  // schema (provider-linked to the same Organization node) on product pages.
  const head = [`    <link rel="canonical" href="${canonical}" />`];
  if (route.path === '/') {
    head.push(`    <script type="application/ld+json">${JSON.stringify(ORG_JSONLD)}</script>`);
  }
  if (route.product) {
    head.push(`    <script type="application/ld+json">${JSON.stringify(productJsonLd(route))}</script>`);
  }
  const faq = faqJsonLd(route.path);
  if (faq) {
    head.push(`    <script type="application/ld+json">${JSON.stringify(faq)}</script>`);
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
