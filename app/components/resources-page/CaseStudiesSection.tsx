// Assuming fetchCaseStudies function and interface have been updated as shown above
"use client";
import React, { useEffect, useState } from 'react';
import { fetchCaseStudies } from '@/graphql';
import { CaseStudy } from '@/interfaces/case_studies';

const CaseStudiesSection: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const loadCaseStudies = async () => {
      const data = await fetchCaseStudies();
      setCaseStudies(data);
    };

    loadCaseStudies();
  }, []);

  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">{caseStudy.title}</h3>
              <p className="text-gray-700 text-base mb-4">{caseStudy.description.text}</p>
              {caseStudy.link?.url && (
                <a
                  href={caseStudy.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-bluish text-white font-semibold rounded-lg hover:bg-dark-blue transition-colors"
                >
                  View Full Case Study
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
