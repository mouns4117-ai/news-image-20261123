# World news, 23 November 2026 — in one image

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/mouns4117-ai/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/mouns4117-ai/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

A single 1024×1024 poster summing up Monday 23 November 2026's world news in
six stories. `main.ts` (Node 22, standard library only) copies `entry.png`
byte for byte into `$MAKEFUN_OUTPUT_DIR/entry.png`; running it twice writes
identical bytes. No network is used at run time.

## The six stories

1. **COP31 collapses** — the UN climate talks in Antalya end with no deal after
   the EU and others reject a draft that never mentions fossil fuels.
3. **Gulf war widens** — Iran strikes an industrial site in Bahrain, injuring
   two people, and a Houthi missile aimed at western Saudi Arabia is
   intercepted.
4. **War at sea** — a Russian cargo ship burns off Finland after a drone attack,
   and a Russian ship is hit by a suspected drone at Benghazi in Libya.
5. **Nepal–India** — Nepal's prime minister Balendra Shah meets prime minister
   Narendra Modi in Delhi on a state visit.
6. **BepiColombo** — the European–Japanese probe enters orbit around Mercury
   after an eight-year journey.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
# writes /tmp/out/entry.png (1024x1024 PNG, 762,484 bytes)
```
