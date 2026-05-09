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

The site was designed using **SSG (Static Site Generation)** architecture, which guarantees the highest level of security and performance. The entire project is written in **TypeScript**, minimizing the risk of errors and simplifying code maintenance.

To ensure lightning-fast access from anywhere in the world, the site is hosted on the **Cloudflare** platform. By leveraging their global **CDN (Content Delivery Network)**, the site's files are physically replicated across hundreds of locations at the network edge (Edge). This means that every visitor downloads data from the server closest to them, reducing latency to a minimum and providing nearly instantaneous content loading.

## Internationalization Challenges

Implementing full multi-language support (i18n) was one of the most interesting technical challenges in this project.

- **Asymmetric Routing:** Using different paths for the same content (e.g., `/projekty` vs `/en/projects`) required creating intelligent mapping logic in the navigation component.
- **Content Linking:** Each article and project now has a unique `id`, allowing the language switcher to instantly find its counterpart in another language, even if they have completely different slugs.
- **Dynamic Filtering:** Lists of projects and blog posts are now automatically filtered by the `lang` field, which prevents language duplicates and ensures visual consistency on the home page.

## Metrics and performance (Build Log)

Monitoring performance and output size helps maintain the lightweight nature of the site. Below is a log of changes in key parameters when building the production version.

| Date | Build Time | Number of Files | `dist` Size | JS Bundle | CSS Bundle | LCP (Mobile) | LCP (Desktop) | Astro Version |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| May 2026 | 2.33s | 100 | 1.1 MB | 0 KB | 7.0 KB | 2.6s | 0.7s | 5.7.6 |
