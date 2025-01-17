import React from "react";

import Image from "next/image";

import Connector from "./connector";
import DEXMarquee from "./dex-marquee";

const Header: React.FC = () => {
  return (
    <>
      <header className="border-b border-[#FF5722]/20 bg-white sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4 md:h-20">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            <div className="flex items-center gap-8 mb-4 md:mb-0">
              <a href="https://damasco.ai">
                <span className="flex flex-row items-center select-none bg-background gap-2 text-xl font-bold font-display">
                  <Image
                    src="/logo.png"
                    alt="Damasco AI - Logo"
                    width={124}
                    height={124}
                    className="w-16 h-16 mix-blend-multiply"
                    draggable={false}
                  />
                  <span>DAMASCO AI</span>
                </span>
              </a>
            </div>
            <Connector />
          </div>
        </div>
      </header>
      <DEXMarquee />
    </>
  );
};

export default Header;
