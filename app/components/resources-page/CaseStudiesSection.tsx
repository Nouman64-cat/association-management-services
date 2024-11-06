import React from 'react';

const caseStudies = [
  { title: "How AMS Helped XYZ Association Grow Membership by 50%", summary: "A comprehensive look at our approach and results." },
  { title: "Streamlining Compliance for ABC Community Group", summary: "Improving governance and compliance through structured support." }
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Case Studies</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold font-axiforma">{caseStudy.title}</h3>
            <p className="text-gray-700 mt-2">{caseStudy.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
