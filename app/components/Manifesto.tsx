'use client'

import React from 'react';
import { Button } from "./ui/button";
import { Download } from 'lucide-react';
import { Card, CardContent } from "./ui/card";

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className=" p-8 md:p-16 bg-accent bg-texture-xl bg-center bg-cover bg-no-repeat">
      <div className=" ">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl">The Going Hybrid Manifesto</h2>
          <p className="text-black">
            Our philosophy on reclaiming the balance between digital and physical worlds.
          </p>
        </div>
        
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8 font-mono">
            <div className="prose prose-lg text-black max-w-none">
              <h3 className="font-display text-2xl mb-4">The Limitations of a Digital-Only Approach</h3>
              <p className="mb-4">
                In our rush to digitize everything,<br /> 
                we've lost something profound:<br /> 
                the ability to capitalize socially on the human-to-human connection.<br />
                <br /> 
                Everyone seems to be fading into clicks, 
                likes and shares, 
                missing on the physical reality 
                (made of multiple layers of sensory 
                and the processing of meaning). 
                <br />
                The missing potential of the focused attention that comes from interacting with the material world. 
                
                <br />
                Posibilities are out there, but they are not being used.
              </p>
              <p className="mb-4">
                Digital tools create remarkable efficiencies, <br />
                but they also fragment our attention,<br />   
                isolate us from embodied experiences, <br />
                and often fail to engage our full cognitive and sensory capabilities.
              </p>
              
              <h3 className="font-display text-2xl mt-8 mb-4">Going Hybrid</h3>
              <p className="mb-4">
                Going Hybrid isn&apos;t about rejecting technology<br />—it&apos;s about thoughtfully integrating it with physical interactions <br />
                to create experiences that are greater than the sum of their parts.
              </p>
              <p className="mb-8">
                By combining the best aspects of both worlds, <br />we can create deeper engagement, more meaningful connections, <br />
                and experiences that respect our human nature while leveraging the power of digital tools.
              </p>
              
              <div className="text-center">
                <Button size="lg" variant="default" className="gap-2" asChild>
                  <a
                    className="transition-colors duration-200 hover:text-blue-500 hover:animate-pulse"
                    href="/api/manifesto" download="going-hybrid-manifesto.pdf"
                  >
                    <Download className="w-4 h-4" />
                    Download Full Manifesto (PDF)
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Manifesto;
