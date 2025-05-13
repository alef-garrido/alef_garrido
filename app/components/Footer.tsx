
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t">
      <div className="hybrid-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">Going Hybrid</h3>
            <p className="text-sm text-black">
              Reclaiming the balance between digital and physical worlds.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#manifesto" className="text-black hover:text-primary transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#digital-maze" className="text-black hover:text-primary transition-colors">
                  Digital Maze
                </a>
              </li>
              <li>
                <a href="#dinamico" className="text-black hover:text-primary transition-colors">
                  Dinami_CO
                </a>
              </li>
              <li>
                <a href="#xnoria" className="text-black hover:text-primary transition-colors">
                  Xnor_IA
                </a>
              </li>
              <li>
                <a href="#nomad-proxy" className="text-black hover:text-primary transition-colors">
                  nomad_proxy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium mb-2">Connect With Us</h4>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow on Instagram</span>
            </a>
            
            <div className="pt-4">
              <p className="text-xs text-black">
                &copy; {currentYear} Going Hybrid. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
