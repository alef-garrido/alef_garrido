
import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Grid2X2, ArrowRight } from 'lucide-react';

const NomadProxy: React.FC = () => {
  return (
    <section id="nomad-proxy" className="my-4 p-16 bg-texture-xl bg-center bg-cover bg-no-repeat">
      <div className=" ">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-hybrid-green/10 rounded-full flex items-center justify-center">
              <Grid2X2 className="h-6 w-6 text-hybrid-green" />
            </div>
            <h2 className="font-display text-3xl">nomad_proxy</h2>
          </div>

          <p className="font-mono text-black mb-8">
            A suite of services designed to support your hybrid lifestyle and workflow.
            nomad_proxy helps you navigate the intersection of digital and physical worlds with ease.
          </p>

          <Card className="mb-8">
            <CardContent className="font-mono p-6 sm:p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-xl">Our Services</h3>
                  <p className="text-sm text-black">
                    nomad_proxy helps bridge the gap between digital efficiency and physical presence.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Physical Mail Handling</h4>
                    <p className="text-sm text-black">
                      We receive, scan, and forward your mail to wherever you are.
                    </p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Hybrid Workspace Solutions</h4>
                    <p className="text-sm text-black">
                      Physical and digital workspaces that adapt to your needs.
                    </p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Document Processing</h4>
                    <p className="text-sm text-black">
                      Converting between physical and digital documents seamlessly.
                    </p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Hybrid Event Support</h4>
                    <p className="text-sm text-black">
                      Facilitating events that bridge online and in-person experiences.
                    </p>
                  </div>
                </div>

                <div className="pt-4 ">
                  <Button className="flex gap-2 bg-hybrid-green hover:bg-hybrid-green/90">
                    <a href="https://nomad-proxy.vercel.app/">
                      Visit the website to Learn More About Services →
                    </ a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NomadProxy;
