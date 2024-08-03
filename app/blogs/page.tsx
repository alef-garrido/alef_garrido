import Link from "next/link"
import { getBlogs } from "./fetchers"

export default async function BlogsPage() {
  const blogs = await getBlogs()
  return (
    <section>
      <h1 className="text-6xl">My Learning Resources</h1>
      <div className="m-8">
        <a className="" href="/">Home</a>
      </div>
      
      {blogs.map((blog, i) => (
        <article key={i} className="grid grid-cols-4 text-3xl">
          <h2>{blog.frontmatter.title}</h2>
          <p>{blog.frontmatter.author}</p>
          <p>{blog.frontmatter.publishDate}</p>
          <Link href={`/blogs/${blog.slug}`}>Read More</Link>
        </article>
      ))}
    </section>
  )
}
