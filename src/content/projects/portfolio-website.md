---
title:
  pl: "Portfolio lubowicki.pl"
  en: "Portfolio lubowicki.pl"
excerpt:
  pl: "Kulisy budowy tej strony: dlaczego Astro, estetyka terminalowa i podejście 'Vanilla CSS first'."
  en: "Behind the scenes of this site: why Astro, terminal aesthetics, and the 'Vanilla CSS first' approach."
date: "2024-03-01"
tags: ["Astro", "TypeScript", "Vanilla CSS", "Terminal UI"]
category: "Projects"
---

# Budowa strony lubowicki.pl

Projekt tej strony powstał jako połączenie fascynacji estetyką terminalową (tzw. "MatrixTerm") z nowoczesnymi narzędziami webowymi. Poniżej przedstawiam główne założenia techniczne i projektowe, które towarzyszyły mi podczas jej tworzenia.

## Dlaczego Astro?

Wybór frameworka **Astro 5.x** był podyktowany chęcią uzyskania maksymalnej wydajności przy jednoczesnym zachowaniu świetnego doświadczenia deweloperskiego (DX). 

- **Island Architecture:** Pozwala na dołączanie interaktywności tylko tam, gdzie jest to absolutnie niezbędne, co w przypadku bloga/portfolio przekłada się na błyskawiczne czasy ładowania.
- **Content Collections:** Zarządzanie treścią (jak ten artykuł) za pomocą plików Markdown jest niezwykle wygodne i pozwala na pełną kontrolę nad strukturą danych dzięki walidacji schematów w TypeScript.

## Estetyka "MatrixTerm"

Głównym założeniem wizualnym było stworzenie przestrzeni, która przypomina środowisko pracy programisty. 

1. **Typografia:** Wykorzystanie czcionki **Fira Code** z Google Fonts zapewnia czytelność i programistyczny charakter.
2. **Efekty wizualne:** Wprowadzenie "scanlines" (linii skanowania) oraz subtelnych poświat nadaje stronie klimat retro-futurystycznego terminala.
3. **Układ:** Zrezygnowałem z wielokolumnowych siatek na rzecz jednej, szerokiej kolumny (maksymalnie 900px), co sprzyja skupieniu na treści (focus-driven design).

## Podejście "Vanilla CSS"

Zamiast sięgać po popularne biblioteki typu Tailwind CSS czy komponenty UI, zdecydowałem się na **czysty CSS (Vanilla CSS)** z wykorzystaniem zmiennych (Custom Properties).

- **Pełna kontrola:** Pozwala to na precyzyjne dopracowanie unikalnych efektów, takich jak ramki terminalowe czy animacje tekstu.
- **Lekkość:** Brak narzutu ciężkich bibliotek sprawia, że arkusze stylów są małe i szybko przetwarzane przez przeglądarkę.
- **Zmienne CSS:** Wszystkie kluczowe wymiary (np. `--header-height`) i kolory są zdefiniowane jako zmienne, co ułatwia zachowanie spójności w całym projekcie.

## Architektura i Rozwój

Strona jest w pełni statyczna (SSG), co gwarantuje bezpieczeństwo i łatwość hostowania. Całość została napisana w **TypeScript**, co minimalizuje ryzyko błędów podczas rozwoju nowych funkcjonalności.

Każdy element strony – od ikon (komponent `Icon.astro`) po karty projektów (`TerminalCard.astro`) – został zaprojektowany tak, aby wspierać spójną wizję nowoczesnego terminala, który jest nie tylko efektowny, ale przede wszystkim funkcjonalny.
