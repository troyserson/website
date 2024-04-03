const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

// creates markdown file in posts directory
if (process.argv.length < 3) {
  console.error('Please provide a filename');
  process.exit(1);
}

const providedFilename = process.argv[2];
const currentDate = format(new Date(), 'yyyy-MM-dd');
const fileName = `${providedFilename}.md`;
const filePath = path.join('posts', fileName);
const content =
  `---
date: '${currentDate}'
title: 'Title'
description: 'Description'
image: '/troy-serson.png'
alt: 'Alt'
---
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Created: ${filePath}`);