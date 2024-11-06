import React from 'react';

const blogPosts = [
  { title: "Top 5 Membership Engagement Strategies", date: "October 10, 2024" },
  { title: "Legal Updates for Nonprofits", date: "September 15, 2024" },
  { title: "Effective Communication Tactics for Associations", date: "August 30, 2024" }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Blog</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold font-axiforma">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
