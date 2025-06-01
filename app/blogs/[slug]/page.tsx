import { getBlogBySlug, getAllBlogSlug } from "../fetchers"
import Image from "next/image";

export async function generateStaticParams() {
  return getAllBlogSlug()
}

// Define a type for your blog's frontmatter for better type safety
interface BlogPostFrontmatter {
  title: string;
  author?: string; // Assuming author and publishDate are optional
  publishDate?: string;
  heroImage?: string; // Add heroImage to your frontmatter if you want to specify it per post
  // Add any other frontmatter fields you expect
}

interface BlogData {
  frontmatter: BlogPostFrontmatter;
  content: React.ReactNode; // or JSX.Element if you're sure
  slug: string;
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  // Cast the result of getBlogBySlug to the more specific BlogData type
  const blog = await getBlogBySlug(params.slug) as BlogData;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header and Hero Image Section */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {blog.frontmatter.title}
          </h1>
          {/* Optional: Author and Publish Date */}
          {(blog.frontmatter.author || blog.frontmatter.publishDate) && (
            <div className="mb-6 text-sm text-gray-600">
              {blog.frontmatter.author && <span>By {blog.frontmatter.author}</span>}
              {blog.frontmatter.author && blog.frontmatter.publishDate && <span className="mx-2">|</span>}
              {blog.frontmatter.publishDate && <span>On {new Date(blog.frontmatter.publishDate).toLocaleDateString()}</span>}
            </div>
          )}
          {/* Hero Image Placeholder */}
          {/* Replace with <img /> tag if blog.frontmatter.heroImage is available */}
          {blog.frontmatter.heroImage ? (
            <Image 
              src={blog.frontmatter.heroImage} 
              alt={blog.frontmatter.title} 
              className="w-full h-64 md:h-96 object-cover rounded-md mb-6"
              width={1200} height={384}
              priority
            />
          ) : (
            <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center rounded-md mb-6">
              <span className="text-gray-500">Hero Image Placeholder</span>
            </div>
          )}
        </div>

        {/* Divisory Border */}
        <hr className="border-gray-300" />

        {/* Main MDX Content */}
        {/* The `prose` class from @tailwindcss/typography is good for styling MDX content */}
        <div className="prose prose-slate lg:prose-lg max-w-none p-6 md:p-8">
          {blog.content}
        </div>
      </article>
    </main>
  )
}
