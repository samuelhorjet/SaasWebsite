"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import productImage from "@/src/assets/product-image.png";
import pyramidImage from "@/src/assets/pyramid.png";
import tubeImage from "@/src/assets/tube.png";

export const ProductShowcase = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ParallaxProvider>
      <section className="bg-gradient-to-b overflow-hidden from-[#fff] to-[#6788ff] py-24">
        <div className="p-[1rem] justify-center">
          <div className="max-w-[590px] lg:max-w-[500px] mx-auto">
            <div className="text-center">Boost your productivity</div>
            <h1 className="text-3xl text-center md:text-6xl lg:text-[50px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              A more effective way to track progress
            </h1>
            <p className="text-center text-[22px] lg:text-[20px] leading-[40px] tracking-tight text-[#010d3e] mt-5">
              Effortlessly turn your ideas into a fully functional, responsive,
              SaaS website in just minutes with this template
            </p>
          </div>
          <div className="relative">
            <Image
              className="mt-10 w-full md:w-[700px] lg:w-[78%] h-auto mx-auto"
              src={productImage || "/product-image.png"}
              width={700}
              height={220}
              alt="product image"
            />
            {isMounted && (
              <>
                <Parallax
                  className="absolute hidden md:block -right-28 lg:right-5 -top-24"
                  speed={-10}
                >
                  <Image
                    className="lg:w-[250px]"
                    src={pyramidImage || "/pyramid-image.png"}
                    width={220}
                    height={220}
                    alt="Pyramid image"
                  />
                </Parallax>
                <Parallax
                  className="absolute hidden md:block -left-28 lg:left-5 bottom-5"
                  speed={10}
                >
                  <Image
                    className="lg:w-[250px]"
                    src={tubeImage || "/tube-image.png"}
                    width={220}
                    height={220}
                    alt="Tube image"
                  />
                </Parallax>
              </>
            )}
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};
