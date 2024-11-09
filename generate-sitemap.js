const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/opportunities', changefreq: 'weekly', priority: 0.8 },
];

async function generateSitemap() {
  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

  const sitemap = new SitemapStream({ hostname: 'https://www.devdisplay.org' });

  sitemap.pipe(writeStream).on('finish', () => {
    console.log('Sitemap generated successfully');
  });

  pages.forEach((page) => sitemap.write(page));

  sitemap.end();
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
});
