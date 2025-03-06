"use client";
import Image from "next/image";
import ArrowRight from "@/src/assets/arrow-right.svg";
import cogImage from "@/src/assets/cog.png";
import cylinderImage from "@/src/assets/cylinder.png";
import noodleImage from "@/src/assets/noodle.png";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="pt-[150px] md:pt-[200px] lg:pt-[100] lg:h-[115vh] z-20 md:pb-10 pb-20 bg-[radial-gradient(ellipse_300%_120%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
      <div className="px-4 sm:px-8 lg:px-28">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[370px] lg:pl-[40] xl:w-[550px]">
            <div className="text-sm lg:text-lg inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[75px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl lg:text-xl text-[#010d3e] tracking-tight mt-6">
              Celebrate the joy of accomplishmentwith an app designed to track
              your progress, motivate your efforts, and celebrate your success.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary lg:text-[15px] md:text-xl">
                Get for free
              </button>
              <button className="btn btn-text flex items-center gap-1 lg:text-[15px] md:text-xl">
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
          <div className="mt-20 md:mt-0 lg:pt-[90] md:flex-1 relative md:h-[648px] lg:h-[700px] xl:h-[750px]">
            <div className="relative h-full w-full">
              <Image
                className={`md:absolute md:h-full md:w-auto md:max-w-none lg:right-5 md:-right-100 lg:w-[600] lg:h-[550] lg:object-contain ${
                  mounted ? "animate-float" : ""
                }`}
                src={cogImage || "/cog.png"}
                alt="cog image"
                width={500}
                priority
              />
              <Image
                className="hidden -rotate-[8deg] md:block md:absolute -top-10 lg:-top-5 -left-24 lg:w-55 lg:-left-36"
                src={cylinderImage || "/cylinder.png"}
                width={220}
                height={220}
                alt="cylinder image"
              />
              <Image
                className="hidden lg:block absolute top-[380px] left-[400px] rotate-[20deg]"
                src={noodleImage || "/noodle.png"}
                width={170}
                height={170}
                alt="noodle image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
