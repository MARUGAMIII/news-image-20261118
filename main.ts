// The World Today — 18 November 2026 (Node 22, standard library only).
//
// The entry image is the entry.png beside this file: a one-page newspaper
// front page summing up the day's world news, rendered from design.html.
// This program only copies that image to the output directory, so both
// grader runs write exactly the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
const bytes = statSync(source).size;
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
const head = readFileSync(source);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.subarray(0, 8).equals(pngMagic)) {
  throw new Error('entry.png is not a PNG file');
}
const iend = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
if (!head.subarray(head.length - 12).equals(iend)) {
  throw new Error('entry.png does not end with a whole IEND chunk');
}
const width = head.readUInt32BE(16);
const height = head.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const copied = readFileSync(target);
if (copied.length !== bytes || !copied.equals(readFileSync(source))) {
  throw new Error('copied entry.png does not match the source');
}
console.log(`wrote ${target} (${bytes} bytes)`);
