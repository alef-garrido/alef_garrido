
import React from 'react';
import { cn } from "../lib/utils/utils";

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-border bg-texture-head bg-cover bg-center">
      <div className="font-mono flex justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display">Going Hybrid</h1>
        </div>
        <div className="grid grid-flow-col gap-4">
          <a 
            href="#ecosystem" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Ecosystem
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a 
            href="#manifesto" 
            className={cn(
              "bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm",
              "hover:bg-primary/90 transition-colors"
            )}
          >
            Manifesto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
