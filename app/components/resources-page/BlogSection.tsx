import React from 'react';

const blogPosts = [
  { title: "Top 5 Membership Engagement Strategies", date: "October 10, 2024" },
  { title: "Legal Updates for Nonprofits", date: "September 15, 2024" },
  { title: "Effective Communication Tactics for Associations", date: "August 30, 2024" }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Blog
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">{post.title}</h3>
              <p className="text-gray-500">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
