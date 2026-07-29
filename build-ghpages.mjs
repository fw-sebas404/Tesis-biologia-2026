import fs from 'fs';
import path from 'path';

const distDir = path.resolve(import.meta.dirname, 'dist/public');
const htmlPath = path.join(distDir, 'index.html');

let html = fs.readFileSync(htmlPath, 'utf-8');

// Remove manus-runtime inline script
html = html.replace(/<script id="manus-runtime">[\s\S]*?<\/script>/g, '');

// Remove debug-collector script
html = html.replace(/<script[^>]*src="\/__manus__\/debug-collector\.js"[^>]*><\/script>/g, '');

// Remove analytics script
html = html.replace(/<script[^>]*manus-analytics[^>]*><\/script>/g, '');

// Remove version.json script
html = html.replace(/<script[^>]*version-collector[^>]*><\/script>/g, '');

fs.writeFileSync(htmlPath, html);
console.log('HTML cleaned for GitHub Pages');
