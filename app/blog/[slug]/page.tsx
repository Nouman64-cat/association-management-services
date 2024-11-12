// app/blog/[slug]/page.tsx
import { fetchBlogBySlug } from "@/graphql/blogs_gql";
import { BlogDetail } from "@/interfaces/blogs";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{ slug: string }>; // Define params as a Promise type
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params; // Await params to resolve the promise

  let blog: BlogDetail | null = null;

  try {
    blog = await fetchBlogBySlug(slug);
    if (!blog) throw new Error("Blog not found");
  } catch (err) {
    console.error("Blog not fetched", err);
  }

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
