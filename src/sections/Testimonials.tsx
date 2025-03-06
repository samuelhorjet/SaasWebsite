"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import avatar1 from "@/src/assets/avatar-1.png";
import avatar2 from "@/src/assets/avatar-2.png";
import avatar3 from "@/src/assets/avatar-3.png";
import avatar4 from "@/src/assets/avatar-4.png";
import avatar5 from "@/src/assets/avatar-5.png";
import avatar6 from "@/src/assets/avatar-6.png";
import avatar7 from "@/src/assets/avatar-7.png";
import avatar8 from "@/src/assets/avatar-8.png";
import avatar9 from "@/src/assets/avatar-9.png";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const SecondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  const [, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if we're on desktop
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);

    return () => {
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, []);

  const TestimonialsColumn = (props: {
    className?: string;
    testimonials: typeof testimonials;
    speed?: number;
  }) => {
    const columnRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [animationName, setAnimationName] = useState("");

    // Setup the animation
    useEffect(() => {
      const column = columnRef.current;
      if (column) {
        const scrollHeight = column.scrollHeight;
        const speedFactor = props.speed || 50;
        const animationDuration = scrollHeight / speedFactor;

        // Create a unique animation name for each column
        const uniqueAnimationName = `scrollUp-${Math.random()
          .toString(36)
          .substr(2, 9)}`;
        setAnimationName(uniqueAnimationName);

        const style = document.createElement("style");
        style.textContent = `
          @keyframes ${uniqueAnimationName} {
            0% { transform: translateY(0); }
            100% { transform: translateY(-${scrollHeight / 2}px); }
          }
        `;
        document.head.appendChild(style);

        // Apply animation if not paused
        if (!isPaused) {
          column.style.animation = `${uniqueAnimationName} ${animationDuration}s linear infinite`;
        } else {
          column.style.animation = "none";
        }

        return () => {
          document.head.removeChild(style);
        };
      }
    }, [props.speed, isPaused]);

    // Handle pause/resume based on hover or click
    const handleMouseEnter = () => {
      if (isDesktop && columnRef.current) {
        setIsPaused(true);
        columnRef.current.style.animation = "none";
      }
    };

    const handleMouseLeave = () => {
      if (isDesktop && columnRef.current && animationName) {
        setIsPaused(false);
        const scrollHeight = columnRef.current.scrollHeight;
        const speedFactor = props.speed || 50;
        const animationDuration = scrollHeight / speedFactor;
        columnRef.current.style.animation = `${animationName} ${animationDuration}s linear infinite`;
      }
    };

    const handleClick = () => {
      if (!isDesktop) {
        setIsPaused(!isPaused);
      }
    };

    return (
      <div
        className={twMerge(
          "flex justify-center h-[600px] lg:h-[900px] overflow-hidden relative cursor-pointer",
          props.className
        )}
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div ref={columnRef} className="flex flex-col gap-6">
          {[...props.testimonials, ...props.testimonials].map(
            (testimonial, index) => (
              <div
                key={index}
                className="border border-[#afafaf]/90 max-w-xs lg:max-w-[20rem] w-full rounded-3xl p-8 lg:p-10 shadow-[10px_14px_20px_#868686] bg-white"
              >
                <p className="text-[#333] mb-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.imageSrc || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium tracking-tight leading-5 text-[#333]">
                      {testimonial.name}
                    </div>
                    <div className="tracking-tight leading-5 text-[#666]">
                      {testimonial.username}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-14 md:py-20 bg-white">
      <div>
        <div className="max-w-[590px] lg:max-w-[600px] mx-auto px-4">
          <div className="text-center text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl text-center md:text-6xl lg:text-[50px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mb-3">
            What our users say
          </h2>
          <p className="text-center text-[22px] lg:text-[22px] leading-[1.4] tracking-tight text-[#010d3e] mb-12">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <TestimonialsColumn testimonials={firstColumn} speed={60} />
          <TestimonialsColumn
            testimonials={SecondColumn}
            className="hidden md:flex"
            speed={100}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
            speed={140}
          />
        </div>
      </div>
    </section>
  );
};
