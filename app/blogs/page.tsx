import Link from "next/link"
import { getBlogs } from "./fetchers"

export default async function BlogsPage() {
  const blogs = await getBlogs()
  return (
    <section className="max-w-5xl mx-auto grid place-items-center bg-texture-head p-6 shadow-lg">
      <h1 className="text-6xl">The Eject Protocol</h1>
      <div className="m-8">
        
        <p>
          I got tired of corporate abusive pattern.
          I hit eject, and deployed an unexpected transformation.
          The boss can’t be hired, you know?
          Initialize your protocol today, I dare you.
        </p>

        <a className="" href="/">← Home</a>
      </div>

      {blogs.map((blog, i) => (
        <article key={i} className="flex text-lg m-4 md:grid md:grid-cols-4 md:text-2xl gap-4">
          <h2>{blog.frontmatter.title}</h2>
          <hr />
          <div className="flex gap-4">
            <p>{blog.frontmatter.author}</p>
            <p>{blog.frontmatter.publishDate}</p>
            <Link href={`/blogs/${blog.slug}`}>Read →</Link>
          </div>
        </article>
      ))}
    </section>
  )
}
