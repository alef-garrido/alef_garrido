import React from 'react';
import { cn } from "../lib/utils/utils";
import { Button } from "./ui/button";
import { FileText, Download } from 'lucide-react';
import BackgroundImage from "./ui/background-image";
import BlurImage from "./ui/blur-image";

const Hero: React.FC = () => {
  return (
    <section id="nomad-proxy" className="my-4 p-16 bg-texture-xl bg-white bg-center">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content section */}
          <div className="space-y-6 animate-fade-in">


            <div className="bg-texture-head rounded-xl shadow-lg p-8 mb-8">
              <h1 className="pv-2 font-display text-4xl sm:text-4xl md:text-6xl leading-tight">
                Stop Shouting at Bots, <br /> Start Connecting with actual HUMANS.
              </h1>

              <h2 className="my-8 font-mono text-2xl sm:text-2xl md:text-3xl leading-tight">
                Escape the
                <span className="text-monospace"> Digital Maze </span>
                Going Hybrid
              </h2>



              <div className="py-8 grid place-items-center grid-cols-2">
                
                <div className="flex flex-col items-center">

                  <p className="text-lg font-bold">
                    Digital & Physical
                  </p>
                  <p className="text-xs font-light text-center">
                    Leveraging technology<br />
                    with meaningful<br />
                    human interactions
                  </p>

                </div>

                <div className="flex flex-col items-end justify-center">
                  <a
                    href="#manifesto"
                    className="text-primary text-sm underline transition-colors duration-200 hover:text-blue-500 hover:animate-pulse"
                  >
                    + Our Manifesto →
                  </a>
                  <a
                    href="#ecosystem"
                    className="text-primary text-sm underline transition-colors duration-200 hover:text-yellow-500 hover:animate-pulse"
                  >
                    Ecosystem →
                  </a>
                  <a
                    className="text-black text-sm underline transition-colors duration-200 hover:text-orange-500 hover:animate-pulse"
                    href="https://wa.me/14493123765"
                    target="_blank"
                  >
                    Let&apos;s Talk →
                  </a>
                </div>
              </div>
            </div>

            <div className='m-8 pt-8'>
              <h2 className='my-2 text-2xl font-display'> <b>Change your paradigms.</b> </h2>

              <p className="font-mono text-lg md:text-xl text-black max-w-lg">
                Going Hybrid is a philosophy, <br  /> brand, ecosystem, <br  />and a set of tools designed to help you reclaim the value of physical interactions in our increasingly digital world.
              </p>

              <div className="my-2 flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="#manifesto" className="transition-colors duration-200 hover:text-blue-500 hover:animate-pulse">
                    <FileText className="w-4 h-4" />
                    Read Manifesto
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="/api/download/digital-maze" className="transition-colors duration-200 hover:text-yellow-500 hover:animate-pulse">
                    <Download className="w-4 h-4" />
                    Get Digital Maze
                  </a>
                </Button>

              </div>
            </div>
          </div>


          {/* Hero image section */}

          <div

            className={cn(
              "hidden lg:block relative h-96 rounded-xl overflow-hidden border border-border bg-cover bg-center"
            )}
            style={{ backgroundImage: "url('/-texturebg-blue-Y.png')" }}

          />

        </div>
      </div>
    </section>
  );
};

export default Hero;
