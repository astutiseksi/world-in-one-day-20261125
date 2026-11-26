// news-image-20261125 — "Sum up 25 November's world news in one image"
//
// The entry is the newspaper front page whose bytes are stored in this
// repository as base64 text chunks (img-00.txt … img-17.txt): the repo
// snapshot travels as text, so the picture is stored as text and decoded
// back to the exact PNG bytes at run time. The program writes those
// bytes to /output/entry.png (or at $MAKEFUN_OUTPUT_DIR/entry.png when
// it runs outside the grader's container):
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only, no network. Decoding the same chunks
// always yields the same bytes — 630,369 bytes, 1024×1024, sha256
// aa4942e8a208f917b0d4e49b6adbafc3bef3b9692ff77cd30e6974d32f89eba3 —
// so both grader runs write identical output and the gate sees exactly
// the picture this repository holds.

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const chunkNames = readdirSync(here)
  .filter((n) => /^img-\d+\.txt$/.test(n))
  .sort();
if (chunkNames.length === 0) {
  throw new Error('no img-*.txt chunks found beside main.ts');
}
const b64 = chunkNames
  .map((n) => readFileSync(join(here, n), 'utf8').trim())
  .join('');
const png = Buffer.from(b64, 'base64');

// Verify the decoded bytes really are a PNG before writing anything:
// every PNG file starts with the same 8-byte signature. Corrupt or
// truncated chunks must fail loudly here, not reach the gate as a bad
// image.
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const hasPngSignature =
  png.length >= PNG_SIGNATURE.length &&
  PNG_SIGNATURE.every((byte, i) => png[i] === byte);
if (!hasPngSignature) {
  throw new Error(
    'decoded bytes are not a PNG: missing the PNG signature (89 50 4E 47 0D 0A 1A 0A)',
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, png);

// Read the written file back and compare it with the decoded image: a
// short or corrupted write must fail loudly here, not reach the gate as
// a bad image. The gate allows at most 1 MiB, so check that too.
const written = readFileSync(target);
if (!written.equals(png)) {
  throw new Error('entry.png write mismatch: written bytes differ from decoded image');
}
if (written.length > 1048576) {
  throw new Error(`entry.png is ${written.length} bytes, over the 1 MiB gate limit`);
}
