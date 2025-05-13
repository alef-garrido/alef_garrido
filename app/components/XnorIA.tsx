'use client'
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Layers, Check } from 'lucide-react';
import { useToast } from "./ui/use-toast";

const XnorIA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "You'll be notified when Xnor_IA launches.",
      });
    }, 1500);
  };

  return (
    <section id="xnoria" className="p-16 bg-texture-y text-black">
      <div className=" ">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="w-16 h-16 bg-hybrid-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Layers className="h-8 w-8 text-hybrid-blue" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl">Xnor_IA</h2>
          <p className="text-black">
            The next evolution in our hybrid ecosystem: print and Run digital solutions for strategic technology integration.
          </p>
        </div>
        
        <Card className="max-w-md mx-auto bg-texture-y border-hybrid-blue/20">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl text-black mb-2">Coming Soon</h3>
                <p className="text-sm text-black">
                  Xnor_IA combines physical tools with digital intelligence to create a truly hybrid workflow.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-black">Key Features:</h4>
                <ul className="space-y-1 text-black">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-hybrid-blue"></div>
                    <span>Printable templates with digital augmentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-hybrid-blue"></div>
                    <span>AI-powered but privacy-focused</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-hybrid-blue"></div>
                    <span>Seamlessly bridge analog and digital worlds</span>
                  </li>
                </ul>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs text-black">Sign up for early access:</p>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-texture-y/30 border-hybrid-blue/20 focus:border-hybrid-blue"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-hybrid-blue hover:bg-hybrid-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Get Early Access'}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-12 h-12 bg-hybrid-blue/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-6 w-6 text-hybrid-blue" />
                  </div>
                  <p className="text-sm text-black">
                    You're on the list! We'll notify you when Xnor_IA launches.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default XnorIA;
