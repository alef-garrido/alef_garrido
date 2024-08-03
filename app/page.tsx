import Link from "next/link"

export default function Home() {
  return (
    <main className="grid place-items-center">
      <h1 className="m-4 text-3xl">Oscar Garrido</h1>
      <Link href={"blogs"} className="m-2 text-blue-500 text-xl underline">
        Visita Mi blog →
      </Link>
      <Link href={"about"} className="m-2 text-blue-500 text-xl underline">
        + Sobre Mi →
      </Link>
    </main>
  )
}
