import { blogPost, site } from '../data/site';

const routes = [
  '/',
  '/about',
  '/contact',
  '/products/bone-china-dinnerware',
  '/products/dutch-ovens',
  '/products/kitchen-gifts',
  `/blog/${blogPost.slug}`,
];

export function GET() {
  const urls = routes
    .map((route) => `<url><loc>${new URL(route, site.url).toString()}</loc></url>`)
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
