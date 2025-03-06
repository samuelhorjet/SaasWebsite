"use client";
import logo from "@/src/assets/logosaas.png";
import Image from "next/image";
import socialx from "@/src/assets/social-x.svg";
import socialins from "@/src/assets/social-insta.svg";
import sociallin from "@/src/assets/social-linkedin.svg";
import socialpin from "@/src/assets/social-pin.svg";
import socialyou from "@/src/assets/social-youtube.svg";
import { ChevronUp } from "lucide-react";

export const Footer = () => {
  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-center text-sm bg-black text-[#bcbcbc] py-10 relative">
      <div>
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:absolute before:bg-rainbow-gradient">
          <Image
            className="lg:w-[40px] relative"
            src={logo || "/pyramid-image.png"}
            width={40}
            height={40}
            alt="Pyramid image"
          />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Image
            className="lg:w-[40px] filter invert brightness-0"
            src={socialx || "/pyramid-image.png"}
            width={40}
            height={40}
            alt="Pyramid image"
          />
          <Image
            className="lg:w-[40px] filter invert brightness-0"
            src={socialins || "/pyramid-image.png"}
            width={40}
            height={40}
            alt="Pyramid image"
          />
          <Image
            className="lg:w-[40px] filter invert brightness-0"
            src={sociallin || "/pyramid-image.png"}
            width={40}
            height={40}
            alt="Pyramid image"
          />
          <Image
            className="lg:w-[40px] filter invert brightness-0"
            src={socialpin || "/pyramid-image.png"}
            width={40}
            height={40}
            alt="Pyramid image"
          />
          <Image
            className="lg:w-[40px] filter invert brightness-0"
            src={socialyou || "/pyramid-image.png"}
            width={40}
            height={40}
            alt="Pyramid image"
          />
        </div>
        <p className="mt-6">
          © 2025 Your Company, Inc. All rights reserved.
          <a href="#" className="block md:inline pl-2 hover:text-white">
            Made by Horjet
          </a>
        </p>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 md:right-10 p-3 bg-[#333] hover:bg-[#444] text-white rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
  );
};
