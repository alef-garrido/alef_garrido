'use client'
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Download, Check } from 'lucide-react';
import { useToast } from "./ui/use-toast";

const DigitalMaze: React.FC = () => {
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
        title: "Success!",
        description: "The Digital Maze download link has been sent to your email.",
      });
    }, 1500);
  };

  return (
    <section id="digital-maze" className="p-16 bg-texture-head">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl">Digital Maze</h2>
            <p className="font-mono text-black">
              A print-and-play game that brings digital concepts into the physical world, 
              designed to foster meaningful connections and thoughtful conversations.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-display text-xl">Key Features:</h3>
              <ul className="font-mono list-disc list-inside space-y-1 text-black">
                <li>Printable board and cards</li>
                <li>Engaging gameplay for 2-6 players</li>
                <li>Thought-provoking questions and challenges</li>
                <li>Designed for meaningful social interaction</li>
              </ul>
            </div>
          </div>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              {!isSubmitted ? (
                <div className="space-y-4">
                  <h3 className="font-display text-xl">Get Your Free Copy</h3>
                  <p className="font-mono text-sm text-black mb-4">
                    Enter your email to receive the free print-and-play version of Digital Maze.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="font-mono space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : (
                        <>
                          <Download className="h-4 w-4" />
                          Download Digital Maze
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl">Thank You!</h3>
                  <p className="font-mono text-black mb-4">
                    Check your email for the download link to Digital Maze.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalMaze;
