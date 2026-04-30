# lubowicki.pl

Personal website and blog built with the **Astro 5.x** framework, featuring a terminal aesthetic ("MatrixTerm").

## 🚀 About the Project

The site serves as a portfolio and a place to share knowledge about programming and embedded systems. Key technical features include:

- **Framework:** Astro 5.x (Island Architecture)
- **Styling:** Vanilla CSS (no-library approach, avoiding Tailwind)
- **Architecture:** Full SSG (Static Site Generation)
- **Hosting:** Cloudflare Pages leveraging their global CDN/Edge network
- **Internationalization:** Full multi-language support (PL/EN) with asymmetric routing
- **Typography:** Fira Code (Google Fonts)

## 🛠️ Local Setup

To run the project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone [LINK_DO_REPOZYTORIUM]
cd lubowicki.pl
```

### 2. Install dependencies
Ensure you have Node.js installed.
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
The site will be available at: `http://localhost:4321`

## 📦 Useful Commands

| Command | Description |
| :--- | :--- |
| `npm run build` | Build the production version to the `./dist/` folder |
| `npm run preview` | Preview the built production version locally |
| `npm run astro ...` | Direct Astro CLI calls (e.g., `astro check`) |

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
