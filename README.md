# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/astutiseksi/world-in-one-day-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/astutiseksi/world-in-one-day-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A newspaper front page summing up the world's news of Wednesday 25 November 2026 — the United States proposing new tariffs on 14 trading partners, a fuel tanker fire in Cairo killing at least 30, Iran saying two tankers hit naval mines in the Strait of Hormuz, Pakistan's first astronaut reaching China's Tiangong station, the Solomon Islands signing a security treaty with Australia, Wall Street sliding on AI and tariff fears, and Israeli strikes killing seven in Gaza — as a single 1024×1024 PNG. No network, no dependencies: `main.ts` (Node 22, standard library only) decodes the committed base64 image chunks (`img-00.txt`–`img-17.txt`) to `/output/entry.png` and verifies the written bytes match.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×1024, ~630 KB). The image bytes are committed as base64 text chunks (`img-00.txt`–`img-17.txt`) in this repository; `main.ts` decodes them on every run, so both grader runs produce identical output.

## The day in the image

| Panel | Story |
|---|---|
| United States – Trade (lead) | The Trump administration proposed new tariffs on 14 major trading partners, with headline rates of 20 to 40 percent, capped where existing trade deals apply; nothing takes effect before a 25 January hearing. |
| Cairo – Egypt | A fuel tanker overturned and caught fire on the ring road in Cairo's Imbaba district, killing at least 30 people. |
| Strait of Hormuz – Iran | Iran's Revolutionary Guards said two oil tankers struck naval mines, exploded and caught fire in the Strait of Hormuz; the United States told its citizens to leave Iran. |
| Space – China / Pakistan | Shenzhou-24 carried Pakistan's Muhammad Zeeshan Ali, flying with two Chinese crew, to the Tiangong space station — the first foreign astronaut to visit China's station. |
| Pacific – Solomon Islands | Prime Ministers Matthew Wale and Anthony Albanese signed a security treaty in Canberra making Australia the Solomon Islands' primary security partner; no foreign military base will be allowed on the islands, and the 2022 security pact with China will lapse. |
| Markets – Wall Street | The S&P 500 fell about 2.2 percent and the Nasdaq about 3.2 percent in midday trading, on AI, inflation and tariff fears. |
| Gaza | Israeli airstrikes killed seven people, including Hamas's director of internal security, Palestinian officials said. |

Ticker: US Army detonates its lead azide stockpile in Iowa in a controlled blast; RSF drone attacks kill 19 in Sudan's Blue Nile state; Colombia rescues all hostages after storming a Cartagena supermarket; Bangladesh raises garment workers' minimum wage by 36 percent; China investigates Shanghai party chief Chen Jining; Kilmar Ábrego García arrives in Spain, ending a 20-month deportation battle.

## Sources (all reported 25 November 2026)

- US tariffs (14 partners, 20–40 percent headline rates, January hearing): Daily Summary of World News, final edition 25 Nov 2026; Daily News Brief (Reuters), 25 Nov 2026.
- Cairo tanker fire (at least 30 killed, Imbaba ring road): Daily Summary, 25 Nov 2026 (first reported 18:55 UTC); Huddleworld headlines (Egyptian health ministry), 25 Nov 2026.
- Hormuz tankers (two tankers hit mines, IRGC statement; US citizens told to leave Iran): Reuters, 25 Nov 2026; OilPrice, 25 Nov 2026.
- Shenzhou-24 (Pakistan's first astronaut to Tiangong): Daily News Brief, 25 Nov 2026; Open Chronicle Global News Brief, 25 Nov 2026; NXplace morning edition, 25 Nov 2026.
- Solomon Islands–Australia treaty (Canberra signing, primary security partner, no foreign base): Reuters, 25 Nov 2026; Associated Press, 25 Nov 2026; Lowy Institute, 25 Nov 2026.
- Wall Street slide (S&P 500 −2.2 percent, Nasdaq −3.2 percent): Daily News Brief, 25 Nov 2026.
- Gaza strikes (seven killed, including Hamas internal security director): SRI News, 25 Nov 2026; Daily Summary, 25 Nov 2026.
- Ticker: Iowa lead azide detonation (Daily News Brief; Daily Summary; The Guardian via NXplace, 25 Nov 2026); Sudan RSF drone attacks (Daily Summary, first reported 11:58 UTC, 25 Nov 2026); Cartagena hostages rescued (Daily Summary; NXplace, 25 Nov 2026); Bangladesh garment wage (Daily Summary, 25 Nov 2026); Chen Jining investigation (BBC via NXplace; Daily Summary, 25 Nov 2026); Ábrego García in Spain (Washington Post via NXplace; Radio Free headlines, 25 Nov 2026).

---

<sub>Entered on [make.fun](https://make.fun/?ref=7nnx3pf5&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
