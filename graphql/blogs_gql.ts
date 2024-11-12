import { Blog, BlogDetail } from "@/interfaces/blogs";
import { GraphQLClient, gql } from "graphql-request";

const URL = process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT as string;
const graphqlAPI = new GraphQLClient(URL);

// Define interfaces for each GraphQL response
interface BlogSlugResponse {
  blogs: { slug: string }[];
}

interface BlogBySlugResponse {
  blog: {
    title: string;
    content: { html: string };
  };
}

interface BlogContent {
    title: string;
    content: {
      html: string;
    };
  }
  

interface AllBlogsResponse {
  blogs: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
  }[];
}

// Fetch all blog slugs
export const fetchAllBlogSlugs = async (): Promise<string[]> => {
  const query = gql`
    query GetBlogSlugs {
      blogs {
        slug
      }
    }
  `;

  const result = await graphqlAPI.request<BlogSlugResponse>(query);
  return result.blogs.map((blog) => blog.slug);
};

interface BlogContent {
    title: string;
    content: {
      html: string;
    };
  }
  
// Define the expected response structure for the query
interface BlogResponse {
  blog: {
    title: string;
    content: {
      html: string;
    };
  };
}

// Function to fetch blog by slug
export const fetchBlogBySlug = async (slug: string): Promise<BlogDetail | null> => {
  const query = gql`
    query GetBlogBySlug($slug: String!) {
      blog(where: { slug: $slug }) {
        title
        content {
          html
        }
      }
    }
  `;

  const variables = { slug };

  try {
    const result = await graphqlAPI.request<{ blog: BlogDetail }>(query, variables);
    return result.blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};


  export const fetchAllBlogs = async (): Promise<Blog[]> => {
    const query = gql`
      query GetAllBlogs {
        blogs {
          id
          title
          slug
          excerpt
          content {
            text
          }
        }
      }
    `;
  
    try {
      const result = await graphqlAPI.request<{ blogs: Blog[] }>(query);
      return result.blogs;
    } catch (error) {
      console.error("Error fetching blogs:", JSON.stringify(error, null, 2));
      throw new Error("Failed to fetch blogs");
    }
  };
  