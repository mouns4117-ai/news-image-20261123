// news-image-20261123 — "The world in one image" for Monday 23 November 2026.
//
// The poster is a single 1024x1024 PNG summing up the day's world news in six
// stories: COP31 collapses in Antalya, a Russian drone hits a block of flats
// near Kyiv, the Gulf war widens, Russian ships are hit at sea, Nepal's prime
// minister meets Modi in Delhi, and BepiColombo reaches Mercury.
//
// This program is intentionally boring: it copies the finished poster, byte
// for byte, into the output directory. Nothing is drawn at run time, nothing
// is fetched, and the output is therefore identical on every run.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

// Empty a directory's CONTENTS without removing the directory itself.
// (In the grader /output is a mounted empty directory: removing the mount
// point itself fails, so only its entries are removed, never the dir.)
function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(HERE, "output");
  emptyDir(outDir);
  const poster = readFileSync(join(HERE, "entry.png"));
  writeFileSync(join(outDir, "entry.png"), poster);
  console.log(
    `The world in one image: entry.png (${poster.length} bytes) is in ${outDir}`,
  );
}

main();
