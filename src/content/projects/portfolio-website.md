---
id: "p001"
lang: "pl"
title: "Portfolio lubowicki.pl"
excerpt: "Kulisy budowy tej strony: dlaczego Astro, estetyka terminalowa i podejście 'Vanilla CSS first'."
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

## Architektura

Strona została zaprojektowana w architekturze **SSG (Static Site Generation)**, co gwarantuje najwyższy poziom bezpieczeństwa i wydajności. Całość została napisana w **TypeScript**, co minimalizuje ryzyko błędów i ułatwia utrzymanie kodu.

Dla zapewnienia błyskawicznego dostępu z dowolnego miejsca na świecie, strona jest hostowana na platformie **Cloudflare**. Dzięki wykorzystaniu ich globalnej sieci **CDN (Content Delivery Network)**, pliki strony są fizycznie replikowane w setkach lokalizacji na brzegu sieci (Edge). Oznacza to, że każdy odbiorca pobiera dane z serwera znajdującego się najbliżej jego lokalizacji, co redukuje opóźnienia do minimum i zapewnia niemal natychmiastowe ładowanie treści.

## Wyzwania Internacjonalizacji

Wdrożenie pełnej obsługi wielu języków (i18n) było jednym z najciekawszych wyzwań technicznych w tym projekcie.

- **Asymetryczny Routing:** Zastosowanie różnych ścieżek dla tych samych treści (np. `/projekty` vs `/en/projects`) wymagało stworzenia inteligentnej logiki mapowania w komponencie nawigacji.
- **Powiązania Treści:** Każdy artykuł i projekt posiada teraz unikalny identyfikator `id`, który pozwala przełącznikowi języka na błyskawiczne odnalezienie odpowiednika w innym języku, nawet jeśli mają zupełnie inne slugi.
- **Dynamiczne Filtrowanie:** Listy projektów i wpisów blogowych są teraz automatycznie filtrowane po polu `lang`, co zapobiega wyświetlaniu duplikatów językowych i zapewnia spójność wizualną strony głównej.
