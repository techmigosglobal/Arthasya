import {documentFor,allPaths,settings,sitemap,robots} from './site.mjs';
import { mkdir, rm, cp, readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const manifest = JSON.parse(await readFile('assets/frames/manifest.json', 'utf8'));
for (const [model, sequence] of Object.entries(manifest)) {
  if (sequence.frames.length < 2) throw new Error(`Missing animation sequence: ${model}`);
  for (const frame of sequence.frames) await stat('.' + frame);
}

await rm('dist', {recursive: true, force: true});
await mkdir('dist');

for (const p of ['src', 'assets', '_headers', '.htaccess']) {
  await cp(p, join('dist', p), {recursive: true});
}

// Ensure SEO landing files and styles are copied to dist/arth.pravah/
await mkdir('dist/arth.pravah', {recursive: true});
try {
  const seoFiles = await readdir('src/seo-landing');
  for (const file of seoFiles) {
    if (file === 'index.html') continue;
    await cp(join('src/seo-landing', file), join('dist/arth.pravah', file));
  }
} catch (e) {
  console.warn('Note: seo-landing copy warning:', e.message);
}

for (const path of allPaths) {
  const directory = path === '/' ? 'dist' : join('dist', path.slice(1));
  await mkdir(directory, {recursive: true});
  await writeFile(join(directory, 'index.html'), await documentFor(path));
}

await writeFile('dist/404.html', await documentFor('/404'));
await writeFile('dist/sitemap.xml', sitemap());
await writeFile('dist/robots.txt', robots());

let headers = await readFile('_headers', 'utf8');
if (settings.indexable) headers = headers.replace('  X-Robots-Tag: noindex, nofollow\n', '');
await writeFile('dist/_headers', headers);
await writeFile('dist/_redirects', allPaths.filter(p => p !== '/').map(p => `${p} ${p}/index.html 200`).join('\n') + '\n/* /404.html 404\n');

async function count(dir) {
  let bytes = 0, files = 0;
  for (const f of await readdir(dir, {withFileTypes: true})) {
    const p = join(dir, f.name);
    if (f.isDirectory()) {
      const c = await count(p);
      bytes += c.bytes;
      files += c.files;
    } else {
      bytes += (await stat(p)).size;
      files++;
    }
  }
  return {bytes, files};
}

console.log('Production build complete:', await count('dist'));
