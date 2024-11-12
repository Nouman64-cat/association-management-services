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

  // In your blogs interface file
export interface BlogDetail {
  title: string;
  content: {
    html: string;
  };
}

  