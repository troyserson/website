import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const URL = "https://www.troyserson.com";

export function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>${URL}/</loc></url>
      <url><loc>${URL}/about</loc></url>
      <url><loc>${URL}/blog</loc></url>
      <url><loc>${URL}/calendar</loc></url>
      <url><loc>${URL}/reviews</loc></url>
      <url><loc>${URL}/contact</loc></url>
      <url><loc>${URL}/sign-up</loc></url>
      ${posts.map(({ id }) => { 
        return `
          <url>
            <loc>${`${URL}/blog/${id}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
      }).join('')}
    </urlset>
  `;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  const livePosts = allPostsData.filter((postData) => !postData.draft);
  return livePosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}