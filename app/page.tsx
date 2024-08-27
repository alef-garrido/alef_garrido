import Image from "next/image"

import Link from "next/link"
import BrandLogo from "@/public/MD_Logo_861x163.png"

export default function Home() {
  return (
    <main className="max-w-[1080px] h-dvh grid place-items-center ">

      <div className="grid grid-cols-1 gap-2">

        <section className="flex items-center  bg-texture-head  md:px-2 md:pb-2 rounded-lg shadow-lg">

          <div className="mt-4 flex justify-between items-center">

            <div className="flex items-center">
              <Image
                src={BrandLogo.src}
                alt="Company"
                width={150}
                height={90}
                className="h-18 m-4"
              />
              <div className="py-4">
                <p><b>Oscar Lemat</b></p>
                <p className="text-sm font-light">Business <br /> Implementation.<br /> Tech Assitance</p>
              </div>
            </div>
          </div>

          <div className="p-2 items-center m-4 text-right ">
            <Link
              href={"about"}
              className="m-2 
              text-stone-950 
              text-sm 
              underline"
            >
              + Sobre mi →
            </Link>
            <br />
            <Link href={"blogs"} className="m-2 text-stone-950 text-sm underline">
              Mi blog →
            </Link>
            <br />
            <a className="m-2 text-stone-950 text-sm underline" href="https://wa.me/14493123765" target="_blank">  Let&apos;s Talk → </a>


          </div>

        </section>

        <section className="max-w-lg mx-auto bg-texture p-8 rounded-lg shadow-lg">
          <div className="w-full grid place-items-center">

          </div>
          <h2 className="text-2xl font-bold m-4">Dedicated Training of<br /> AI Business Assistants</h2>

          <div className="space-y-4 m-8">
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold">AI Strategy Consultation</h3>
              <p className="text-sm text-gray-600">90-minute personalized session · Zoom</p>
              <p className="text-lg font-bold text-blue-600">
                <a
                  href="https://buy.stripe.com/eVabJucaP62z7Kw144"
                  className="hover:text-white"
                >
                  → $ 300 USD </a>
              </p>
            </div>

            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold">Custom AI Assistant Package</h3>
              <p className="text-sm text-gray-600">Your dedicated AI + 4 implementation sessions</p>
              <p className="text-lg font-bold text-blue-600">
                <a
                  href="https://buy.stripe.com/6oE00M6QvgHd5CodQR"
                  className="hover:text-white"
                >
                  → $ 2,000 USD
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600">Full AI Business Integration</h3>
              <p className="text-sm text-gray-600">AI system + Web app + 24/7 support</p>
              <div className="flex items-center border-b pb-2">
                <p className="text-lg font-bold text-blue-600">
                  <a
                    href="https://buy.stripe.com/bIYaFq8YD2Qn5CobIK"
                    className="hover:text-white"
                  >
                    → $ 5,000 USD
                  </a>
                </p>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Best Value</span>
              </div>
            </div>
          </div>

          <p className="m-4 text-xs text-gray-500 border-b p-2">Prices may vary. <br /> I offer tailored solutions to meet your specific business needs.
          </p>


        </section>

        <section className=" bg-texture-foot p-8 rounded-lg shadow-lg md:row-span-2">
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
            <ul className="grid grid-cols-1 place-items-center text-1xl md:grid-cols-3 gap-4">
              <li className="m-2 w-30 h-4 rounded-sm bg-green-400">⚙️General</li>
              <li className="m-2 w-34 h-4 rounded-sm bg-green-400">👨🏽‍🔧Engineering</li>
              <li className="m-2 w-30 h-4 rounded-sm bg-green-400">🎨Design</li>
              <li className="m-2 w-34 h-4 rounded-sm bg-green-400">⚒️Operations</li>
              <li className="m-2 w-30 h-4 rounded-sm bg-green-400">📡Marketing</li>
              <li className="m-2 w-30 h-4 rounded-sm bg-green-400">🏷️Product</li>
            </ul>
          </div>
        </section>

      </div>


    </main>
  )
}
