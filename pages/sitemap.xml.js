import { generateSiteMap, getSortedPostsData } from '../lib/sitemap.js';

export async function getServerSideProps({ res }) {
  const posts = getSortedPostsData();
  const sitemap = generateSiteMap(posts);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default function SiteMap() {}