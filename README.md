# Celebria

A lightweight, high-fidelity, interactive digital greeting card designed entirely with native web technologies. It swaps traditional static images for dynamic DOM animations, state-driven view updates, audio playback, and programmatic user interactions.

## Overview
Celebria proves that personalized digital greetings don't require heavy frameworks or sluggish runtimes. Built completely on a single vanilla HTML5 file, it delivers a smooth user experience through optimized CSS backdrops, programmatic canvas-like particle arrays, and a playful adversarial button trick that bypasses standard UI patterns.

## Key Features
* **Dynamic Background Generators:** Spawns a multi-colored procedural particle storm across the viewport using pure runtime JavaScript.
* **Adversarial UI Component:** Features a "Never" button that dynamically recalculates its bounding box coordinates on hover, preventing unwanted user input through responsive cursor evasion.
* **State-Driven Component Swapping:** Simple view-switching engine that transitions screens seamlessly without adding route overhead or rendering layout shifts.
* **Audio Core Interactivity:** Intercepts early user gestures to bypass standard browser media autoplay restrictions, kicking off audio synchronization instantly.

## Tech Stack Breakdown
* **Markup:** Semantic HTML5 structure utilizing context-isolated structural blocks.
* **Styles:** Component structural design powered by CSS backdrop filters, glassmorphic alpha blending, and keyframe scale animations.
* **Logic Engine:** Clean ES6 vanilla logic handling state management, mathematical coordinate distribution, and event processing loops.

## Quick Start (Web-Based & Local)
### Run via GitHub Codespaces
1. Click the Code button at the top right of this repository.

2. Select the Codespaces tab, then click Create codespace on main.

3. Once the environment initializes, install the live server extension or simply run python3 -m http.server 8000 in the terminal pane to open a secure preview link.

### Local Environment Execution
Because this project relies completely on native client architecture, running it locally is simple:

1. Download or clone this repository to your machine.

2. Ensure your media elements are structured inside an Assets folder matching the workspace root.

3. Open index.html directly inside any modern web browser, or serve it via a local development server like Live Server or Python HTTP module to avoid local file CORS warnings for audio components.

## Project Structure
```text
├── .github/
│   └── workflows/
│       └── ci.yml      # Automated HTML structure validation check
├── Assets/
│   ├── Bg.jpg          # Background cover art
│   └── Aarzu.mp3       # Integrated audio soundtrack
├── .gitignore          # Environment filter definitions
├── index.html          # Core single-file application structure and logic
└── README.md           # Documentation guide
```
## Roadmap
[ ] Implement Web Audio API analyzer to drive particle animations matching the music frequency.

[ ] Add config-driven setup using URL parameters to allow custom messages without rewriting the DOM.

[ ] Add smooth touch gesture listeners to optimize the button-evasion mechanic on mobile devices.
