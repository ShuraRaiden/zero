import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Logo from "./Logo";
import skierHero from "@/assets/skier_hero.png";

export default function SectionInicio() {
  const { scrollYProgress } = useScroll();
  
  // Create parallax translations for the full-screen background
  const imageY = useTransform(scrollYProgress, [0, 0.25], [0, -30]);

  return (
    <section
      id="section-origen"
      className="relative h-screen w-full bg-white text-black flex flex-col justify-between overflow-hidden px-8 md:px-16 lg:px-24 py-12 select-none border-b border-black"
    >
      {/* Full-bleed Background Skier Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y: imageY, scaleX: -1.05, scaleY: 1.05, objectPosition: "35% center" }}
          src={skierHero}
          alt="Skier carving down mountain background"
          className="w-full h-full object-cover binary-high-contrast"
        />
        {/* Soft vignette/gradient to ensure readability at the top and bottom margins */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30 pointer-events-none" />
      </div>

      {/* Top Header */}
      <div className="flex justify-between items-center z-20 relative gap-4 w-full">
        <Logo color="black" size="md" className="shrink-0" />
      </div>

      {/* Bottom Footer Info (Location & Weather) */}
      <div className="z-20 relative w-full flex justify-between items-end mt-auto">
        <div className="flex flex-col gap-1 font-mono text-[9px] md:text-[10px] text-black tracking-wider font-semibold">
          <span className="font-black text-black">// PISTA DE REGISTRO</span>
          <span>42.5428° N, 1.7336° E // PAS DE LA CASA, ANDORRA // TEMP: -4.0°C</span>
        </div>
      </div>
    </section>
  );
}
