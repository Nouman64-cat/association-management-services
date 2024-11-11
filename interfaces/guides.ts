export interface Guide {
  id: string;
  guideTitle: string;
  guideDescription: string;
  downloadableFile: {
    id: string;
    fileName: string;
    url: string;
  };
}

export interface GuidesData {
  guides: Guide[];
}
