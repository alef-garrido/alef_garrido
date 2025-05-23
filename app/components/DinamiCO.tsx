'use client'
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Check } from 'lucide-react';
import { useToast } from "./ui/use-toast";
import { cn } from "../lib/utils/utils";

const DinamiCO: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Request Received!",
        description: "We'll review your invitation request for Dinami_CO.",
      });
    }, 1500);
  };

  return (
    <section id="dinamico" className="p-16 bg-texture-xl bg-cover bg-center">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "relative h-96 rounded-xl overflow-hidden border border-border order-2 lg:order-1",
            "bg-[url('https://images.unsplash.com/photo-1517842264405-72bb906a1936?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')]",
            "bg-cover bg-center hidden lg:block"
          )}/>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl">Dinami_CO</h2>
            <p className="text-black font-mono">
              Curated Hybrid events that combine intellectual stimulation with genuine social connection, 
              designed to forge meaningful relationships around shared ideas.
            </p>
            
            <div className="space-y-2">
              <h3 className="font-display text-xl">What to Expect:</h3>
              <ul className="font-mono list-disc list-inside space-y-1 text-black">
                <li>Thoughtfully curated guest lists</li>
                <li>Structured conversations on fascinating topics</li>
                <li>Delicious meals in inspiring settings</li>
                <li>A perfect blend of serious thought and joyful connection</li>
              </ul>
            </div>
            
            <Card className="shadow-md mt-8">
              <CardContent className="p-6">
                {!isSubmitted ? (
                  <div className="space-y-4">
                    <h3 className="font-display text-xl">Request an Invitation</h3>
                    <p className="text-sm text-black mb-2">
                      Interested in attending a Dinami_CO dinner? Tell us a bit about yourself.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-3 font-mono">
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <Input
                          name="location"
                          placeholder="Your city/location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        />
                        <Textarea
                          name="message"
                          placeholder="Why are you interested in Dinami_CO? (Optional)"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Invitation'}
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                      <Check className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-display text-xl">Request Received</h3>
                    <p className="text-black mb-4">
                      Thank you for your interest! We&apos;ll review your request and be in touch soon.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DinamiCO;
