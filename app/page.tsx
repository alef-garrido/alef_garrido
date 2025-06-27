'use client';
import Image from "next/image";
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Ecosystem from './components/Ecosystem';
import DigitalMaze from './components/DigitalMaze';
import DinamiCO from './components/DinamiCO';
import XnorIA from './components/XnorIA';
import NomadProxy from './components/NomadProxy';
import Footer from './components/Footer';
import BackgroundImage from './components/ui/background-image';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  // Slideshow logic
  const slides = [
    <Hero key="hero" />, <Manifesto key="manifesto" />, <Ecosystem key="ecosystem" />,
    <DigitalMaze key="digitalmaze" />, <DinamiCO key="dinamico" />, <XnorIA key="xnoria" />, <NomadProxy key="nomadproxy" />
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, 4000); // auto-slide every 4s
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <>
      <BackgroundImage
        src="/bg-texture-blue-Y.png"
        alt="Background texture"
        className="w-full p-8 shadow-lg row-span-2"
      >
        <div className='flex items-center justify-between gap-4 p-4 transition-all duration-500 ease-in-out'>

          <div className="flex items-center justify-center">
            <Image
              width={961}
              height={961}
              // Using width and height props for better performance
              src="/a_lemat_logo.png"
              alt="MD Logo"
              className="w-56 h-auto object-contain mb-4 drop-shadow-lg transition-all duration-500 ease-in-out"
            />
          </div>
          <div className="px-4 flex items-center gap-4">
            <div className="relative right-1">
              <div className="w-4 h-4 bg-red-500 rounded-full" />
              <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0 animate-ping" />
              <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0 animate-pulse" />
            </div>
            <h2 className="text-2xl my-4 overline">Operate 250% faster <br /> in every team with Advanced CX</h2>
          </div>

        </div>

        <hr />

        <div className="container mx-auto m-4">
          <ul className="grid place-items-center text-1xl grid-cols-3 gap-4">
            <li className="my-2 w-30 h-4 rounded-sm bg-green-400">⚙️Leadership</li>
            <li className="my-2 w-34 h-4 rounded-sm bg-green-400">⚒️Operations</li>
            <li className="my-2 w-30 h-4 rounded-sm bg-green-400">🏷️Product</li>
          </ul>
        </div>
      </BackgroundImage>
      <div id='slide' className="relative w-full mx-auto overflow-hidden shadow-lg">
        <div className="relative w-full min-w-[1050px] h-full min-h-[1050px]">
          {slides.map((Slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            >
              {Slide}
            </div>
          ))}
        </div>
        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-20"
          aria-label="Previous slide"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-20"
          aria-label="Next slide"
        >
          ▶
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'} transition-colors`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
