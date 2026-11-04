# Lacco Endres — Portfolio

A dependency-free, responsive portfolio for GitHub Pages. Dark cloth textures, stitched details, ivory type, and blue accents follow the local Weaponizer art direction.

## Preview

From this folder, run `python -m http.server 4173 --directory site` and visit `http://localhost:4173`.

## Update

- `site/projects.js`: titles, credits, descriptions, project images, source links.
- `site/index.html`: introduction, career, skills, contact, archive.
- `site/styles.css`: visual direction and responsive layouts.
- `site/resume.html`: printable resume (use Print / save as PDF).
- `site/credits.html`: asset credits and review-score sources.
- `site/assets/`: optimized local visuals. No analytics. External video players load only inside project details.

## Publishing

Push to a GitHub repository with `main` as the default branch. Select GitHub Actions as the Pages build source. The included workflow uploads only `site/` and deploys it to Pages. Relative URLs support both a user site and a repository subpath. Never upload the ignored research folder: it contains private source material, the original old resume, and local investigation files.

## Content boundaries

- Mullet MadJack is credited as early prototype work, not development of the final release.
- Racino Marbles and Jousting descriptions summarize inspected project capabilities without inventing individual task ownership or production certification.
- Nekomimi's historical 98% score is sourced and labeled as historical. Other archived percentages retain their individual sources. Scores are not live.
- Adult game experience is presented professionally using typography, with no explicit imagery. External archive links may contain mature material.
- Only professional email and public professional profile links are shown. The original resume is not published; the printable web version omits the telephone number.
- Navegática and Corrida Gramatical are separate professional project entries from a financially supported Feevale scholarship, each with screenshots and a playable WebGL demo link.
- Local Racino MP4 previews use browser controls, lightweight poster images, and metadata preloading. Closing project details stops playback and removes external players.
- Early project names with no recovered artwork live in an expandable text archive.

## Hosting cost

Static GitHub Pages hosting is available for public repositories on GitHub Free. No paid services or dependencies are required. A custom domain is optional.

The university/game-jam entries contain imported screenshots, project context, and locally hosted Patáço gameplay; visitors do not need the former portfolio archive. Racino’s development showcase follows the current racing gameplay and is labeled as non-final footage.
