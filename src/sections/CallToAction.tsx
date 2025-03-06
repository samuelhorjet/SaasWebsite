"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import tubeImage from "@/src/assets/spring.png";
import pyramidImage from "@/src/assets/star.png";
import ArrowRight from "@/src/assets/arrow-right.svg";

export const CallToAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ParallaxProvider>
      <section className="bg-gradient-to-b overflow-hidden from-[#fff] to-[#6788ff] py-14 md:py-20">
        <div className="p-[1rem] justify-center">
          <div className="max-w-[500px] lg:max-w-[600px] mx-auto">
            <h2 className="text-3xl text-center md:text-5xl lg:text-[50px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Sign up for free today
            </h2>
            <p className="text-center text-[22px] lg:text-[25px] leading-[30px] md:leading-[35px] lg:leading-[40px] tracking-tight text-[#010d3e] mt-5">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <div className="flex gap-1 items-center mt-[30px] justify-center">
              <button className="btn btn-primary text-lg md:text-xl lg:text-[17px]">
                Get for free
              </button>
              <button className="btn btn-text flex items-center gap-1 text-lg md:text-xl lg:text-[17px]">
                <span>Learn more</span>
                <Image
                  src={ArrowRight || "/arrow-right.svg"}
                  alt="Arrow right"
                  width={24}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="relative">
            {isMounted && (
              <>
                <Parallax
                  className="absolute hidden md:block -right-28 lg:right-10 -bottom-20"
                  speed={10}
                >
                  <Image
                    className="lg:w-[350px]"
                    src={tubeImage || "/tube-image.png"}
                    width={200}
                    height={200}
                    alt="Tube image"
                  />
                </Parallax>
                <Parallax
                  className="absolute hidden md:block -left-28 lg:left-10 bottom-10"
                  speed={10}
                >
                  <Image
                    className="lg:w-[350px]"
                    src={pyramidImage || "/pyramid-image.png"}
                    width={200}
                    height={200}
                    alt="Pyramid image"
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
