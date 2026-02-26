// src/constants.ts
import type { Post } from './types';

export const PROJECTS: Post[] = [
  {
    slug: 'automatyka-supla',
    data: {
      title: {
        pl: 'Automatyka domowa SUPLA',
        en: 'SUPLA Home Automation',
      },
      excerpt: {
        pl: 'Projekt automatyki domowej opartej o system SUPLA, integrujący różne urządzenia w inteligentny dom.',
        en: 'Home automation project based on the SUPLA system, integrating various devices into a smart home.',
      },
      date: '2023-01-15',
      tags: ['IoT', 'Home Automation', 'SUPLA'],
      category: 'Projects',
    },
  },
  {
    slug: 'home-lab',
    data: {
      title: {
        pl: 'Mój przydomowy Home Lab',
        en: 'My Home Lab',
      },
      excerpt: {
        pl: 'Budowa i konfiguracja własnego serwera oraz infrastruktury sieciowej do nauki i eksperymentów.',
        en: 'Building and configuring my own server and network infrastructure for learning and experimentation.',
      },
      date: '2023-03-01',
      tags: ['Homelab', 'Networking', 'Self-hosting'],
      category: 'Projects',
    },
  },
  {
    slug: 'system-podlewania',
    data: {
      title: {
        pl: 'Inteligentny system podlewania ogrodu',
        en: 'Smart Garden Watering System',
      },
      excerpt: {
        pl: 'Automatyczny system nawadniania ogrodu z kontrolą pogodową i zdalnym sterowaniem.',
        en: 'Automatic garden irrigation system with weather control and remote management.',
      },
      date: '2023-05-10',
      tags: ['IoT', 'Automation', 'Gardening'],
      category: 'Projects',
    },
  },
  {
    slug: 'portfolio-website',
    data: {
      title: {
        pl: 'Strona Portfolio (obecna)',
        en: 'Portfolio Website (current)',
      },
      excerpt: {
        pl: 'Projekt obecnej strony portfolio, zbudowanej na Astro z wykorzystaniem nowoczesnych technik webowych.',
        en: 'The current portfolio website project, built on Astro using modern web technologies.',
      },
      date: '2024-01-20',
      tags: ['Astro', 'Web Development', 'UI/UX'],
      category: 'Projects',
    },
  },
];
