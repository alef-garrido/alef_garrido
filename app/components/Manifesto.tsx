'use client'

import React from 'react';
import { Button } from "./ui/button";
import { Download } from 'lucide-react';
import { Card, CardContent } from "./ui/card";

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-16 bg-accent bg-texture-foot">
      <div className="hybrid-container">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl">The Going Hybrid Manifesto</h2>
          <p className="text-black">
            Our philosophy on reclaiming the balance between digital and physical worlds.
          </p>
        </div>
        
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="prose prose-lg text-black max-w-none">
              <h3 className="font-display text-2xl mb-4">The Limitations of a Digital-Only Approach</h3>
              <p className="mb-4">
                In our rush to digitize everything, we've lost something profound: the tactile experience, 
                the physical connection, and the focused attention that comes from interacting with the material world.
              </p>
              <p className="mb-4">
                Digital tools create remarkable efficiencies, but they also fragment our attention, 
                isolate us from embodied experiences, and often fail to engage our full cognitive and sensory capabilities.
              </p>
              
              <h3 className="font-display text-2xl mt-8 mb-4">The Hybrid Solution</h3>
              <p className="mb-4">
                Going Hybrid isn't about rejecting technology—it's about thoughtfully integrating it with physical interactions 
                to create experiences that are greater than the sum of their parts.
              </p>
              <p className="mb-8">
                By combining the best aspects of both worlds, we can create deeper engagement, more meaningful connections, 
                and experiences that respect our human nature while leveraging the power of digital tools.
              </p>
              
              <div className="text-center">
                <Button size="lg" variant="default" className="gap-2" asChild>
                  <a href="#" onClick={(e) => e.preventDefault()}>
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
