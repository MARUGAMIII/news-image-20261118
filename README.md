# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/marugamiii/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/marugamiii/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One-page newspaper front page summing up the world's news of Wednesday 18 November 2026: Xi Jinping greets Donald Trump in Shenzhen as the APEC summit opens ahead of three-way talks with Vladimir Putin; US jets strike Iran's Qeshm Island as Iran fires drones at Kuwait and Bahrain; Ukraine hits the Kerch Bridge for a second day; Mary Peltola flips Alaska and Democrats take the US Senate 56–44; Cyclone Akvan bears down on India's Andhra Pradesh coast; and the Ebola outbreak in DR Congo passes 11,000 cases. The page is drawn as HTML and rendered to a single 1024×1024 PNG, so the image explains itself with no feed attached.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node.js 22.18 or later, standard library only. The run copies `entry.png` to the output directory as `entry.png`, after checking it is a whole PNG of at most 1 MiB and 1024×1024 pixels, and is deterministic: two runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
