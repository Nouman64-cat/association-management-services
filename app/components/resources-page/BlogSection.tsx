"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchAllBlogs } from '@/graphql/blogs_gql';
import { Blog } from '@/interfaces/blogs';


const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await fetchAllBlogs();
      setBlogPosts(data);
    };

    loadBlogs();
  }, []);

  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Blog
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left cursor-pointer">
                <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">{post.title}</h3>
                <p className="text-gray-500">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
