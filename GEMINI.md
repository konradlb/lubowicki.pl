# Konfiguracja projektu lubowicki.pl

Plik ten zawiera nadrzędne instrukcje dla Gemini CLI dotyczące rozwoju tego projektu.

## Przegląd projektu
Strona osobista/blog o estetyce terminalowej ("MatrixTerm"), zbudowana w oparciu o framework Astro.

## Stos Technologiczny
- **Framework:** Astro 5.x
- **Język:** TypeScript
- **Style:** Vanilla CSS (preferowane nad bibliotekami typu Tailwind)
- **Czcionki:** Fira Code (Google Fonts)

## Standardy Kodowania
- **Język:** UI w języku polskim (`lang="pl"`), nazewnictwo zmiennych, komentarze i dokumentacja w języku angielskim.
- **Stylistyka:** Utrzymanie efektów wizualnych typu "scanlines", terminalowych ramek i typografii monospace.
- **Komponenty:** Wykorzystanie natywnych komponentów Astro (`.astro`).
- **CSS:** Wykorzystanie zmiennych CSS (np. `--header-height`) dla spójności layoutu.

## Kluczowe Komendy
- `npm run dev` - Uruchomienie serwera deweloperskiego.
- `npm run build` - Budowanie wersji produkcyjnej.
- `npm run astro ...` - Bezpośrednie wywołania CLI Astro.

## Wytyczne Rozwoju
- Każda nowa podstrona powinna korzystać z `Layout.astro`.
- Przy wprowadzaniu zmian w stylach należy upewnić się, że nie zaburzają one efektów tła i czytelności na urządzeniach mobilnych.
