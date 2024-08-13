import Example from "./example.mdx"

export default function AboutPage() {
  return (
    <main className="
      max-w-[420px] 
      md:max-w-[950px] 
      md:p-12
      p-4 
      bg-texture-xl 
      rounded-lg 
      shadow-lg">
      <section className="prose">
        <Example />
      </section>
    </main>
  )
}
