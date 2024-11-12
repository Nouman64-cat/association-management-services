export interface CaseStudy {
    id: string;
    title: string;
    description: {
      text: string;
    };
    image: {
      url: string;
    };
    link: {
      fileName: string;
      url: string;
    };
    clientName: string;
    results: string;
  }
  