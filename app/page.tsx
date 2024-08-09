import Image from "next/image"
import Link from "next/link"
import ProfilePic from "@/public/pp.png"
import BrandLogo from "@/public/MD_Logo_861x163.png"

export default function Home() {
  return (
    <main className="h-dvh grid place-items-center">


      <div className="max-w-md mx-auto bg-texture p-6 rounded-lg shadow-lg">
        <div className="w-full grid place-items-center">
        <img 
            src={BrandLogo.src} 
            alt="Company" 
            // width={100} 
            // height={'auto'}
            className="h-18 m-4" 
          />
        </div>
        <h2 className="text-2xl font-bold m-4">Dedicated Training of<br /> AI Business Assistants</h2>

        <div className="space-y-4 m-8">
          <div className="border-b pb-2">
            <h3 className="text-lg font-semibold">AI Strategy Consultation</h3>
            <p className="text-sm text-gray-600">90-minute personalized session · Zoom</p>
            <p className="text-lg font-bold text-blue-600">US$ 300</p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-lg font-semibold">Custom AI Assistant Package</h3>
            <p className="text-sm text-gray-600">Your dedicated AI + 4 implementation sessions</p>
            <p className="text-lg font-bold text-blue-600">US$ 2,000</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-600">Full AI Business Integration</h3>
            <p className="text-sm text-gray-600">AI system + Web app + 24/7 support</p>
            <div className="flex items-center border-b pb-2">
              <p className="text-lg font-bold text-blue-600">US$ 5,000</p>
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Best Value</span>
            </div>
          </div>
        </div>

        <p className="m-4 text-xs text-gray-500 border-b p-2">Prices may vary. We offer tailored solutions to meet your specific business needs.
        </p>


      </div>

      <section className="flex items-center max-w-md mx-auto bg-texture p-9 rounded-lg shadow-lg">

        <div className="mt-4 flex justify-between items-center">
    
          <div className="flex items-center">
            <Image src={ProfilePic.src} alt="Profile" width={70} height={70} className="m-2 border rounded-xl" />
            <div>
              <p><b>Alef Garrido</b></p>
              <p className="text-sm font-light">AI Business <br /> Tech Consultant</p>
            </div>
          </div>
        </div>

        <div className=" items-center m-4 ">
          <Link href={"about"} className="m-2 text-purple-500 text-sm underline">
            + Sobre Mi →
          </Link>
          <br />
          <Link href={"blogs"} className="m-2 text-purple-500 text-sm underline">
            Visita Mi blog →
          </Link>
        </div>

      </section>

<style>

</style>

    </main>
  )
}
