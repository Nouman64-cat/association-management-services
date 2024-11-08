export interface Testimonial {
    authorName: string;
    testimonialText: string;
    authorImage: {
      fileName: string;
      url?: string; // Assuming URL might be added later; mark it optional if not always present
    };
  }

  