
import React from 'react';
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { FileText, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-texture-y p-16 md:py-24">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content section */}
          <div className="space-y-6 animate-fade-in">


            <div className="bg-texture-xl rounded-xl shadow-lg p-4 mb-8">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
                Stop Shouting at Bots. Start Connecting with Humans.
              </h1>

              <h2 className="m-4 font-display text-2xl sm:text-xl md:text-3xl leading-tight">
                Escape the
                <span className="text-monospace"> Digital Maze </span>
                Going Hybrid
              </h2>

             

              <div className="grid place-items-center grid-cols-2">
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
                    className="text-primary text-sm underline hover:text-secondary"
                  >
                    + Our Manifesto →
                  </a>
                  <a
                    href="#ecosystem"
                    className="text-primary text-sm underline hover:text-secondary"
                  >
                    Ecosystem →
                  </a>
                  <a className="text-black text-sm underline hover:text-green-500" href="https://wa.me/14493123765" target="_blank">
                    Let&apos;s Talk →
                  </a>
                </div>
              </div>
            </div>

            <h2 className='text-2xl font-display'> <b>Change your paradigms.</b> </h2>

            <p className="font-mono text-lg md:text-xl text-black max-w-lg">
              Going Hybrid is a philosophy, an ecosystem, and a set of tools designed to help you reclaim the value of physical interactions in our increasingly digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#manifesto">
                  <FileText className="w-4 h-4" />
                  Read Manifesto
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="#download">
                  <Download className="w-4 h-4" />
                  Get Digital Maze
                </a>
              </Button>
            </div>
          </div>

          {/* Hero image section */}
          <div className={cn(
            "hidden lg:block relative h-96 rounded-xl overflow-hidden border border-border",
            "bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')]",
            "bg-cover bg-center"
          )} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
