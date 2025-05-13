
import React from 'react';
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { FileText, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-texture-y p-16 md:py-24">
      <div className="hybrid-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content section */}
          <div className="space-y-6 animate-fade-in">
            {/* Header card based on the provided example */}
            <div className="bg-accent shadow-lg p-4 mb-8">
              <div className="w-full flex justify-center mb-4">
                <h1 className="font-display text-4xl">Going Hybrid</h1>
              </div>
              
              <div className="grid place-items-center grid-cols-2">
                <div className="flex flex-col items-center">
                  <p className="text-lg font-bold">
                    Digital & Physical
                  </p>
                  <p className="text-xs font-light text-center">
                    Balancing technology<br />
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
                  <a 
                    href="#contact" 
                    className="text-primary text-sm underline hover:text-secondary"
                  >
                    Let&apos;s Talk →
                  </a>
                </div>
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">
              Escape the purely
              <span className="text-primary"> digital </span>
              paradigm.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
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
          )}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
