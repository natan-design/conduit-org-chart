# Conduit Health — Org Chart

Interactive organization chart for Conduit Health Inc. A single self-contained HTML file with pan/zoom navigation, discussion tracking, open roles board, and an AI-powered editor.

## Features

- **Interactive org chart** — drag to pan, scroll/pinch to zoom
- **Discussion Points panel** — tracks open organizational questions
- **Open Roles tracker** — table of all active hiring positions
- **AI Editor** — describe changes in plain English and the chart updates automatically

## Using the AI Editor

1. Click the **💬** button in the bottom-right corner
2. Paste your **Anthropic API key** in the key bar and click Save
3. Type a change request in natural language, e.g.:
   - *"Move Ron Mirta to Clinical"*
   - *"Add a new hire under Brie called PX Coordinator"*
   - *"Remove the question mark from Clinical"*
4. The chart re-renders with your changes applied

Your API key is stored in `localStorage` and never leaves your browser except for direct calls to the Anthropic API.

## Data Persistence

All org data and your API key are saved to `localStorage` in your browser. Changes persist across page reloads. To reset to the default org chart, clear your browser's local storage for this site.

## Deployment

No build step required — this is a single static HTML file served via GitHub Pages.
