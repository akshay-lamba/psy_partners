import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const SIGNALS = [
  {
    id: "008",
    slug: "orchestrating-enterprise-maturation",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://42ae7d60-8d7b-4cc0-be9e-7f4325977122.usrfiles.com/ugd/42ae7d_f6554051e29347bca39074a59d2f0d07.pdf",
    title: "Orchestrating Enterprise Maturation",
    theme: "Enterprise Resource Orchestration (ERO) & Autonomous Execution",
    publishedDate: "October 2026",
    excerpt: "Fifty years of systemic evolution naturally culminates in active operational orchestration. Moving from passive systems of record to active systems of agency, Enterprise Resource Orchestration (ERO) animates accumulated organizational knowledge into autonomous execution."
  },
  {
    id: "007",
    slug: "the-efficiency-illusion",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_27b6069b1793426684a98caff837f5ec.pdf",
    title: "The Efficiency Illusion",
    theme: "Sovereign Knowledge Systems vs The Pure Efficiency Trap",
    publishedDate: "October 2026",
    excerpt: "Treating AI as a human replacement is a profound strategic fallacy that destroys competitive moats and forces enterprises into the 'Pure Efficiency Trap.' True differentiation and long-term viability come from building localized Sovereign Knowledge Systems to leverage and scale elite human talent."
  },
  {
    id: "006",
    slug: "the-k-human",
    author: "Gautam Mohanty",
    domain: "Real Estate AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_402ef1882bfd4e6682b45c8f153339c2.pdf",
    title: "The K Human",
    theme: "The K-Economy & Context Multipliers in Physical Assets",
    publishedDate: "September 2026",
    excerpt: "The K-Economy divides us now. Multipliers leverage AI to keep their people, capture deep context, and grow exponentially, while Shrinkers cut headcount, bleed institutional context, and become hollow. Secure your position on the upper stroke with five tactical human moves."
  },
  {
    id: "005",
    slug: "the-ceos-mandate",
    author: "Dr. Nicolas Hamelin",
    domain: "Education AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_249559aca302492e9ca153264d5102a9.pdf",
    title: "The CEO's Mandate",
    theme: "Preventing Context Leak & Building Compounding Moats",
    publishedDate: "September 2026",
    excerpt: "95% of AI pilots die in the dark because enterprises attempt to delegate thinking to machines. The true mandate of a CEO is to prevent 'Context Leak' — retaining your people's deep, unwritten institutional context to construct a proprietary, compounding Intellectual Moat."
  },
  {
    id: "004",
    slug: "your-data-never-leaves-your-building",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_33c1ee7f74bd4f858edd4fdd841cc97c.pdf",
    title: "Your Data Never Leaves Your Building",
    theme: "Sovereign On-Premise Infrastructure & Non-Rented AI",
    publishedDate: "August 2026",
    excerpt: "You own the intelligence outright — the hardware, the model, the outputs. It compounds in business value the longer you run it. Every competitor using rented cloud tools is feeding their business data to someone else's servers."
  },
  {
    id: "003",
    slug: "sovereign-ai-design",
    author: "Gautam Mohanty",
    domain: "Real Estate AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_7908a710fe444ab2899aa30fbc6bfa57.pdf",
    title: "Sovereign AI Design",
    theme: "Architectural Moats for High-Value Private Intelligence",
    publishedDate: "August 2026",
    excerpt: "Instead of relying on external providers who can change rules or raise prices, a sovereign moat is built on a private, secure internal AI setup. This ensures that your most precious asset—your corporate intelligence—stays 'in your house' and remains safe from the outside world."
  },
  {
    id: "002",
    slug: "the-career-stack",
    author: "Akshay Lamba",
    domain: "Business AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_002c510789154f0885f2ead1f13a31ef.pdf",
    title: "The Career Stack",
    theme: "Scaling Judgment Over Output Across Organizational Layers",
    publishedDate: "July 2026",
    excerpt: "Why every layer of the organization has the same AI story — and why every layer is wrong in the same way. Scaling judgment over output."
  },
  {
    id: "001",
    slug: "the-ai-transition-system",
    author: "Dr. Nicolas Hamelin",
    domain: "Education AI",
    pdfUrl: "https://b2006858-57c1-480a-9730-8e9f2057acb9.usrfiles.com/ugd/b20068_cbb3d8eb8ac648538736b348c9dbba3f.pdf",
    title: "The AI Transition System",
    theme: "From Governance Paralysis to Deployed Advantage",
    publishedDate: "June 2026",
    excerpt: "From Governance Paralysis to Deployed Advantage. A comprehensive framework for moving organizational intelligence from pilot stall to compounding capability."
  }
];

const PAGES = [
  {
    path: '/pov',
    aliases: ['/signals', '/transition-signals'],
    title: 'Transition Signals | Board-Level AI Intelligence | Psy Partners',
    description: 'Transition Signals: Board-level AI intelligence briefings, transition theses, and architectural directives for enterprise leaders navigating AI adoption.',
    keywords: 'Transition Signals, AI Intelligence, Sovereign AI, ERO, Akshay Lamba, Board AI, Psy Partners'
  },
  {
    path: '/boardguard',
    aliases: ['/board-guard'],
    title: 'BoardGuard AI | AI Governance & Board Diligence | Psy Partners',
    description: 'BoardGuard AI: Executive governance terminal and audit diligence rails for corporate boards and audit committees. Establish defensible oversight of corporate AI.',
    keywords: 'BoardGuard, AI Governance, Board Diligence, Corporate AI, AI Audit Committee, Psy Partners'
  },
  {
    path: '/transition',
    aliases: ['/ai-transition'],
    title: 'AI Transition System | Corporate AI Transformation | Psy Partners',
    description: 'The AI Transition System: Move from pilot stall to compounding enterprise capability. Align leadership, architecture, and deployment velocity.',
    keywords: 'AI Transition System, Enterprise AI Architecture, Sovereign Knowledge Systems, Psy Partners'
  },
  {
    path: '/velocity',
    aliases: ['/executive-velocity'],
    title: 'Velocity AI | Executive AI Acceleration Program | Psy Partners',
    description: 'Velocity AI: Direct integration of AI into live CXO workflows to achieve compounding 40%+ operational velocity improvement.',
    keywords: 'Velocity AI, Executive AI Acceleration, CXO Workflow AI, Enterprise Velocity, Psy Partners'
  },
  {
    path: '/team',
    aliases: ['/leadership', '/about'],
    title: 'Leadership & Advisory Team | Psy Partners',
    description: 'Meet the board advisors, enterprise architects, and AI strategists behind Psy Partners: Akshay Lamba, Dr. Nicolas Hamelin, and Gautam Mohanty.',
    keywords: 'Psy Partners Leadership, Akshay Lamba, Dr Nicolas Hamelin, Gautam Mohanty, AI Advisory'
  }
];

function generateHtmlWithMeta(baseHtml, { path: routePath, title, description, keywords, ogImage = 'https://www.psy.partners/og-image.jpg' }) {
  const fullUrl = `https://www.psy.partners${routePath}`;
  
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${title}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${description}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${description}" />`);

  // Replace Canonical and OG URL
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${fullUrl}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${fullUrl}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/i, `<meta name="twitter:url" content="${fullUrl}" />`);

  // Replace Keywords if present
  if (keywords) {
    html = html.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${keywords}" />`);
  }

  return html;
}

function writeRouteHtml(routePath, htmlContent) {
  const targetDir = path.join(distDir, routePath.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf-8');
}

function run() {
  const baseHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error(`Error: ${baseHtmlPath} does not exist. Run vite build first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

  // 1. Write 404.html to root of dist as universal fallback
  fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf-8');
  console.log('Created dist/404.html');

  // 2. Ensure vercel.json is present in dist
  const vercelSrc = path.join(rootDir, 'vercel.json');
  if (fs.existsSync(vercelSrc)) {
    fs.copyFileSync(vercelSrc, path.join(distDir, 'vercel.json'));
    console.log('Copied vercel.json to dist/vercel.json');
  }

  // 3. Ensure _redirects is present in dist for Netlify / Cloudflare Pages
  const redirectsSrc = path.join(rootDir, 'public', '_redirects');
  if (fs.existsSync(redirectsSrc)) {
    fs.copyFileSync(redirectsSrc, path.join(distDir, '_redirects'));
    console.log('Copied _redirects to dist/_redirects');
  }

  let count = 0;

  // 4. Generate Main Pages and Aliases
  for (const page of PAGES) {
    const pageHtml = generateHtmlWithMeta(baseHtml, page);
    writeRouteHtml(page.path, pageHtml);
    count++;

    if (page.aliases) {
      for (const alias of page.aliases) {
        writeRouteHtml(alias, pageHtml);
        count++;
      }
    }
  }

  // 5. Generate Signal Detail Pages and Aliases
  for (const signal of SIGNALS) {
    const title = `Transition Signal ${signal.id}: ${signal.title} | Psy Partners`;
    const description = `${signal.title} by ${signal.author} (${signal.domain}): ${signal.excerpt.substring(0, 155)}...`;
    const keywords = `Transition Signal ${signal.id}, ${signal.title}, ${signal.author}, ${signal.domain}, AI Governance, Psy Partners`;

    const signalRoutes = [
      `/pov/${signal.id}`,
      `/pov/${parseInt(signal.id, 10)}`,
      `/pov/${signal.slug}`,
      `/pov/signal/${signal.id}`,
      `/signals/${signal.id}`,
      `/signals/${parseInt(signal.id, 10)}`,
      `/transition-signals/${signal.id}`
    ];

    for (const route of signalRoutes) {
      const signalHtml = generateHtmlWithMeta(baseHtml, {
        path: route,
        title,
        description,
        keywords
      });
      writeRouteHtml(route, signalHtml);
      count++;
    }
  }

  console.log(`Successfully generated ${count} physical route HTML entry points in dist/!`);
}

run();
