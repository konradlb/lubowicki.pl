---
id: "p001"
lang: "en"
title: "Portfolio lubowicki.pl"
excerpt: "Behind the scenes of this site: why Astro, terminal aesthetics, and the 'Vanilla CSS first' approach."
date: "2024-03-01"
tags: ["Astro", "TypeScript", "Vanilla CSS", "Terminal UI"]
category: "Projects"
---

# Building lubowicki.pl

This website project was born as a combination of a fascination with terminal aesthetics (the so-called "MatrixTerm") and modern web tools. Below I present the main technical and design assumptions that accompanied me during its creation.

## Why Astro?

The choice of the **Astro 5.x** framework was dictated by the desire to obtain maximum performance while maintaining a great developer experience (DX).

- **Island Architecture:** Allows interactivity only where it's absolutely necessary, which in the case of a blog/portfolio translates into lightning-fast loading times.
- **Content Collections:** Managing content (like this article) with Markdown files is extremely convenient and allows for full control over the data structure thanks to schema validation in TypeScript.

## "MatrixTerm" Aesthetics

The main visual assumption was to create a space that resembles a programmer's work environment.

1. **Typography:** Using the **Fira Code** font from Google Fonts provides readability and a programming character.
2. **Visual effects:** The introduction of "scanlines" and subtle glows gives the site a retro-futuristic terminal atmosphere.
3. **Layout:** I gave up multi-column grids in favor of a single, wide column (maximum 900px), which promotes focus on content (focus-driven design).

## "Vanilla CSS" Approach

Instead of reaching for popular libraries like Tailwind CSS or UI components, I decided on **pure CSS (Vanilla CSS)** using variables (Custom Properties).

- **Full control:** This allows for precise refinement of unique effects, such as terminal frames or text animations.
- **Lightness:** No overhead from heavy libraries means style sheets are small and quickly processed by the browser.
- **CSS variables:** All key dimensions (e.g., `--header-height`) and colors are defined as variables, making it easy to maintain consistency across the project.

## Architecture and Development

The site is fully static (SSG), which guarantees security and ease of hosting. The whole thing was written in **TypeScript**, which minimizes the risk of errors during the development of new functionalities.

Every element of the site – from icons (`Icon.astro` component) to project cards (`TerminalCard.astro`) – has been designed to support a consistent vision of a modern terminal that is not only effective, but above all functional.
