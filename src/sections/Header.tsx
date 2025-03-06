"use client";

import Image from "next/image";
import ArrowRight from "@/src/assets/arrow-right.svg";
import Logo from "@/src/assets/logosaas.png";
import MenuIcon from "@/src/assets/menu.svg";
import { useEffect } from "react";

export const Header = () => {
  // Add smooth scrolling behavior when clicking on anchor links
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Optional: Handle link clicks with JavaScript for more control
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            // Account for fixed header height
            const headerHeight =
              document.querySelector("header")?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-md backdrop-blur-md bg-opacity-90">
        <p className="text-white/80 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <Image
            className="bg-white rounded-2xl p-1 ml-3"
            src={ArrowRight || "/arrow-right.svg"}
            alt="Arrow right"
            width={30}
            height={16}
          />
        </div>
      </div>
      <div className="py-5 bg-opacity-90 backdrop-blur-md">
        <div className="px-4 sm:px-8 lg:px-28 flex justify-between items-center">
          <Image
            className="lg:ml-10 lg:w-[40px]"
            src={Logo || "/logosaas.png"}
            alt="Saas Logo"
            width={40}
            height={40}
          />
          <nav className="hidden sm:flex lg:pr-10 gap-2 md:gap-6 text-black/100 items-center text-sm md:text-base">
            <a
              href="#hero"
              className="hover:text-[#001e80] md:text-[15px] lg:text-[15px] transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="hover:text-[#001e80] md:text-[15px] lg:text-[15px] transition-colors"
            >
              Features
            </a>
            <a
              href="#customers"
              className="hover:text-[#001e80] md:text-[15px] lg:text-[15px] transition-colors"
            >
              Customers
            </a>
            <a
              href="#pricing"
              className="hover:text-[#001e80] md:text-[15px] lg:text-[15px] transition-colors"
            >
              Update
            </a>
            <a
              href="#cta"
              className="hover:text-b[#001e80] md:text-[15px] lg:text-[15px] transition-colors"
            >
              Help
            </a>
            <button className="bg-black md:text-[15px] lg:text-[15px] text-white lg:px-4 lg:py-2 md:px-4 md:py-3 rounded-xl hover:bg-[#001e80] tracking-tight transition-colors">
              Get for free
            </button>
          </nav>
          <Image
            className="sm:hidden"
            src={MenuIcon || "/menu.svg"}
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </header>
  );
};
