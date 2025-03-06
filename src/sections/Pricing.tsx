import checkIcon from "@/src/assets/check.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 500 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-10">
      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div className="p-4 max-w-[500px] mx-auto">
        <h2 className="text-3xl text-center md:text-6xl lg:text-[50px] font-bold tracking-tight bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
          Pricing
        </h2>
        <p className="text-center text-[22px] lg:text-[20px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
      </div>

      <div className="flex lg:flex-row lg:items-end lg:justify-center flex-col items-center gap-[40] mt-10">
        {pricingTiers.map(
          (
            { title, monthlyPrice, buttonText, popular, inverse, features },
            index
          ) => (
            <div
              key={index}
              className={twMerge(
                "border border-[#f1f1f1] max-w-xs lg:max-w-[20rem] w-full rounded-3xl p-10 shadow-[0_14px_20px_#868686]",
                inverse && "border-black bg-black text-white"
              )}
            >
              {/* Title and Popular Tag */}
              <div className="flex justify-between items-center">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse && "text-white/60"
                  )}
                >
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span
                      className="bg-gradient-to-r from-[#dd7ddf] via-[#e1cd86] to-[#3DD7DF] text-transparent bg-clip-text font-bold animate-[moveGradient_2s_infinite_linear]"
                      style={{
                        backgroundSize: "200% 200%",
                        animation: "moveGradient 1s infinite linear",
                      }}
                    >
                      Popular
                    </span>
                  </div>
                )}
              </div>

              {/* Price Section */}
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50">
                  {" "}
                  /month
                </span>
              </div>

              {/* Button */}
              <button
                className={twMerge(
                  "btn btn-primary w-full mt-[30px]",
                  inverse && "bg-white hover:text-white text-black"
                )}
              >
                {buttonText}
              </button>

              {/* Features List */}
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex text-sm items-center gap-4">
                    <Image
                      src={checkIcon || "/check-icon.png"}
                      width={20}
                      height={20}
                      alt="check icon"
                      className={twMerge(
                        "filter invert-0",
                        inverse && "invert"
                      )}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};
