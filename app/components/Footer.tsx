import React from 'react';
import { Instagram } from 'lucide-react';
import Link from "next/link"
import Image from "next/image"
import BrandLogo from "@/public/pp.png"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-mono p-12 border-t bg-texture-head shadow-lg">

      <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-8">

        <div className='border border-white p-8'>
          <div className="flex justify-left m-2 ">
            <Image
              src={BrandLogo.src}
              alt="Company"
              width={70}
              height={70}
              className='border border-white'
            />
          </div>

          <div className="mb-4 grid grid-cols-2 ">

            <div className=''>
              <p className="text-lg">
                <b>Alef Lemat</b>
              </p>
              <p className="text-xs font-light">Business <br /> Implementation.<br /> Tech Assitance</p>
            </div>

            <div className="flex flex-col items-end justify-center">
              <Link
                href={"about"}
                className="text-blue-500 text-sm underline hover:text-green-500"
              >
                + Sobre mi →
              </Link>
              <Link href={"blogs"} className="text-blue-500 text-sm underline hover:text-green-500">
                Mi blog →
              </Link>
              <a className="text-blue-500 text-sm underline hover:text-green-500" href="https://wa.me/14493123765" target="_blank">
                Let&apos;s Talk →
              </a>

            </div>

          </div>
          <hr className="border-t border-gray-300 mb-4" />
          <h3 className="font-display text-xl">Going Hybrid</h3>
          <p className="text-sm text-black">
            Don&apos;t Preach, nor teach.<br />
            Enable yourself to get into action, fast.
          </p>

        </div>

        <div className=" space-y-4">
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
            href="https://instagram.com/alef_lemat"
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



    </footer>
  );
};

export default Footer;
