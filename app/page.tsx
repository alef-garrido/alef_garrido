import Image from "next/image";
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Ecosystem from './components/Ecosystem';
import DigitalMaze from './components/DigitalMaze';
import DinamiCO from './components/DinamiCO';
import XnorIA from './components/XnorIA';
import NomadProxy from './components/NomadProxy';
import Footer from './components/Footer';
import BackgroundImage from './components/ui/background-image';

export default function Home() {
  return (
    <>
      <BackgroundImage
        src="/bg-texture-blue-Y.png"
        alt="Background texture"
        className="w-full p-8 shadow-lg row-span-2"
      >
        <div className='flex items-center justify-between gap-4 p-4 transition-all duration-500 ease-in-out'>

          <div className="flex items-center justify-center">
            <Image
              width={961}
              height={961}
              // Using width and height props for better performance
              src="/a_lemat_logo.png"
              alt="MD Logo"
              className="w-56 h-auto object-contain mb-4 drop-shadow-lg transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="px-4 flex items-center gap-4">
            <div className="relative right-1">
              <div className="w-4 h-4 bg-red-500 rounded-full" />
              <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0 animate-ping" />
              <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0 animate-pulse" />
            </div>
            <h2 className="text-2xl my-4 overline">Operate 250% faster <br /> in every team with Advanced CX</h2>
          </div>

        </div>

        <hr />

        <div className="container mx-auto m-4">
          <ul className="grid place-items-center text-1xl grid-cols-3 gap-4">
            <li className="my-2 w-30 h-4 rounded-sm bg-green-400">⚙️Leadership</li>
            <li className="my-2 w-34 h-4 rounded-sm bg-green-400">⚒️Operations</li>
            <li className="my-2 w-30 h-4 rounded-sm bg-green-400">🏷️Product</li>
          </ul>
        </div>
      </BackgroundImage>
      <div className="grid grid-cols-1 gap-2 shadow-lg">


        <Hero />
        <Manifesto />
        <Ecosystem />
        <DigitalMaze />
        <DinamiCO />
        <XnorIA />
        <NomadProxy />
      </div>
      <Footer />
    </>

  );
}
