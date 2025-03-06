import AcmeLogo from "@/src/assets/logo-acme.png";
import QuantumLogo from "@/src/assets/logo-quantum.png";
import EchoLogo from "@/src/assets/logo-echo.png";
import CelestialLogo from "@/src/assets/logo-celestial.png";
import PulseLogo from "@/src/assets/logo-pulse.png";
import ApexLogo from "@/src/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  const logos = [
    { src: AcmeLogo, alt: "Acme Logo" },
    { src: QuantumLogo, alt: "Quantum Logo" },
    { src: EchoLogo, alt: "Echo Logo" },
    { src: CelestialLogo, alt: "Celestial Logo" },
    { src: PulseLogo, alt: "Pulse Logo" },
    { src: ApexLogo, alt: "Apex Logo" },
  ];

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container lg:pl-[210]">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 lg:gap-24 flex-none animate-ticker">
            {logos.map((logo, index) => (
              <Image
                key={index}
                className="logo-tick"
                src={logo.src || `/logo-${logo.alt.toLowerCase()}.png`}
                alt={logo.alt}
              />
            ))}
            <div className="pl-14 lg:pl-24" /> {/* Add padding at the end */}
          </div>
          <div className="flex gap-14 lg:gap-24 flex-none animate-ticker">
            {logos.map((logo, index) => (
              <Image
                key={index}
                className="logo-tick"
                src={logo.src || `/logo-${logo.alt.toLowerCase()}.png`}
                alt={logo.alt}
              />
            ))}
            <div className="pl-14 lg:pl-24" /> {/* Add padding at the end */}
          </div>
        </div>
      </div>
    </div>
  );
};
