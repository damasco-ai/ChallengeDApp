import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto py-10 flex flex-row items-center">
      <div className="mr-auto">
        {/* Links */}
        {/* <div className="flex space-x-2 mb-6">
          <a
            href="#"
            className="flex items-center justify-center text-4xl w-14 h-14 rounded-2xl border-2 border-black transition-all ease-in-out hover:bg-primary"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-4xl w-14 h-14 rounded-2xl border-2 border-black transition-all ease-in-out hover:bg-primary"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-4xl w-14 h-14 rounded-2xl border-2 border-black transition-all ease-in-out hover:bg-primary"
          >
            <Image
              src="/icons/dex-screener.svg"
              alt="Damasco AI - DEX Screener"
              width={1000}
              height={1000}
              className="w-9 h-9"
            />
          </a>
        </div> */}
        <span className="font-body text-lg font-medium">
          &copy; Copyright 2025 DAMASCO AI
        </span>
      </div>
    </footer>
  );
};

export default Footer;
