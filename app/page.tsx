import Image from "next/image"
import Link from "next/link"
import BrandLogo from "@/public/pp.png"
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Ecosystem from './components/Ecosystem';
import DigitalMaze from './components/DigitalMaze';
import DinamiCO from './components/DinamiCO';
import XnorIA from './components/XnorIA';
import NomadProxy from './components/NomadProxy';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="max-w-[1080px] h-dvh grid place-items-center">

      <div className="grid grid-cols-1 gap-2 shadow-lg">

      <section className="grid grid-rows-2 p-4 bg-texture-head rounded-lg shadow-lg">
          <div className="w-full flex justify-center">
            <Image
              src={BrandLogo.src}
              alt="Company"
              width={100}
              height={100}
            />
          </div>
          
          <div className="grid place-items-center grid-cols-2">
            <div className="flex-col items-center">
                <p className="text-lg">
                  <b>Alef Lemat</b>
                </p>
                <p className="text-xs font-light">Business <br /> Implementation.<br /> Tech Assitance</p>
            </div>

            <div className="flex flex-col items-end justify-center">
              <Link
                href={"about"}
                className="text-blue-500 text-sm underline hover:text-green-500"
              >
                + Sobre mi →
              </Link>
              <Link href={"blogs"} className="text-blue-500 text-sm underline hover:text-green-500">
                Mi blog →
              </Link>
              <a className="text-blue-500 text-sm underline hover:text-green-500" href="https://wa.me/14493123765" target="_blank">
                Let&apos;s Talk →
              </a>
            </div>
          </div>
        </section>

        <Hero />
        <Manifesto />
        <Ecosystem />
        <DigitalMaze />
        <DinamiCO />
        <XnorIA />
        <NomadProxy />
        <Contact />


        <section className="bg-texture-foot p-8 rounded-lg shadow-lg row-span-2">
          <div className="px-4 flex items-center gap-4">
            <div className="relative right-1">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0 animate-ping"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
            <h2 className="text-3xl my-4 overline">Operate 250% faster <br /> in every team:</h2>
          </div>
          <hr />

          <div className="container mx-auto m-4">
            <ul className="grid place-items-center text-1xl grid-cols-3 gap-4">
              <li className="my-2 w-30 h-4 rounded-sm bg-green-400">⚙️General</li>
              <li className="my-2 w-34 h-4 rounded-sm bg-green-400">⚒️Operations</li>
              <li className="my-2 w-30 h-4 rounded-sm bg-green-400">🏷️Product</li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  )
}
