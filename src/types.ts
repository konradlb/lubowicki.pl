export interface Post {
    slug: string;
    data: {
      title: {
        pl: string;
        en: string;
      };
      excerpt: {
        pl: string;
        en: string;
      };
      date: string; // ISO 8601 format, e.g., "YYYY-MM-DD"
      tags: string[];
      category: string;
    };
  }