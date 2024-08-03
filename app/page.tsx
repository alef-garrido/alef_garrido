import Link from "next/link"

export default function Home() {
  return (
    <main className="grid place-items-center">
      <h1 className="text-3xl">Static Blog Demo</h1>
      <Link href={"blogs"} className="text-blue-500 text-xl underline">
        Visita Mi blog
      </Link>
      <Link href={"about"} className="text-blue-500 text-xl underline">
        + Sobre Mi
      </Link>
    </main>
  )
}
