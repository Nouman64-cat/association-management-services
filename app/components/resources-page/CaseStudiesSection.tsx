import React from 'react';

const caseStudies = [
  { title: "How AMS Helped XYZ Association Grow Membership by 50%", summary: "A comprehensive look at our approach and results." },
  { title: "Streamlining Compliance for ABC Community Group", summary: "Improving governance and compliance through structured support." }
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">{caseStudy.title}</h3>
              <p className="text-gray-700 text-base">{caseStudy.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
