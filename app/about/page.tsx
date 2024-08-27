import Profile from "./profile.mdx"

export default function AboutPage() {
  return (
    <main className="
      max-w-[420px] 
      md:max-w-[800px] 
      md:p-12
      p-4 
      bg-texture-y 
      rounded-lg 
      shadow-lg">
      <section className="prose">
        <Profile />
      </section>
    </main>
  )
}
