// app/blog/[slug]/page.tsx
import { fetchBlogBySlug } from "@/graphql/blogs_gql";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const slug = params.slug; // Access params directly without awaiting

  if (!slug) {
    notFound();
    return;
  }

  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    notFound();
    return;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-4">{blog.title}</h1>
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: blog.content.html }}
      ></div>
    </div>
  );
};

export default BlogPage;
