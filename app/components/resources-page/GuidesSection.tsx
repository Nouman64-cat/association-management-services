"use client";
import { fetchGuides } from "@/graphql";
import { Guide } from "@/interfaces/guides";
import React, { useEffect, useState } from "react";

const GuidesSection: React.FC = () => {
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    const loadGuides = async () => {
      const data = await fetchGuides();
      setGuides(data);
    };

    loadGuides();
  }, []);

  // Function to handle downloading with Blob
  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Guides and Whitepapers
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">
                {guide.guideTitle}
              </h3>
              <p className="text-gray-700 text-base mb-4">
                {guide.guideDescription}
              </p>
              {guide.downloadableFile?.url && (
                <button
                  onClick={() =>
                    handleDownload(
                      guide.downloadableFile.url,
                      guide.downloadableFile.fileName
                    )
                  }
                  className="inline-block mt-4 px-4 py-2 bg-bluish text-white font-semibold rounded-lg hover:bg-dark-blue transition-colors"
                >
                  Download
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
