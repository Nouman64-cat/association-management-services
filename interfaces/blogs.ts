export interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: {
      text: string;
      markdown: string;
      html: string;
    };
  }
  