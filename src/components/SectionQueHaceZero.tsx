import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import starrySky from "@/assets/starry_sky.png";

export default function SectionQueHaceZero() {
  const { scrollYProgress } = useScroll();

  // Custom vertical offsets for Section 3
  const imageY = useTransform(scrollYProgress, [0.4, 0.85], [-40, 40]);
  const textY = useTransform(scrollYProgress, [0.4, 0.85], [15, -15]);

  return (
    <section
      id="section-que-hace-zero"
      className="relative min-h-screen w-full bg-white text-black flex flex-col justify-between px-4 md:px-16 lg:px-24 py-16 select-none border-b border-black"
    >
      {/* Background Section Split & Image Layer (Always split as columns) */}
      <div className="absolute inset-0 w-full h-full flex flex-row pointer-events-none overflow-hidden">
        {/* Left Column: stark white background with mountain silhouettes */}
        <div className="relative w-1/2 h-full bg-white flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[120%] opacity-15">
            <img
              src="https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&q=80&w=1200"
              alt=""
              className="w-full h-full object-cover binary-high-contrast"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        {/* Right Column: pure black background with starry sky */}
        <div className="relative w-1/2 h-full bg-black flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[120%] opacity-25">
            <img
              src={starrySky}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Centered Content Block (Symmetric Title + Paragraph with Center Split Gap) */}
      <div className="flex-1 flex flex-col justify-center items-center relative w-full max-w-5xl mx-auto py-8">
        
        {/* Symmetrical Title (Split to avoid cutting letters) */}
        <motion.div 
          style={{ y: textY }}
          className="flex justify-center items-center w-full mb-8 font-display font-black text-3xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none select-none"
        >
          <span className="text-black text-right w-1/2 pr-3 md:pr-6">BASE</span>
          <span className="text-white text-left w-1/2 pl-3 md:pl-6">ZERO</span>
        </motion.div>

        {/* Symmetrical Action Manifesto (Split to avoid cutting letters) */}
        <motion.div 
          style={{ y: textY }}
          className="flex flex-row justify-center items-stretch w-full gap-4 md:gap-12"
        >
          {/* Left Part: Black text on white background */}
          <div className="w-1/2 text-right text-black pr-2 md:pr-4">
            <p className="font-sans font-medium text-xs md:text-lg lg:text-xl leading-relaxed max-w-md ml-auto">
              Representa el Punto Cero de la preparación física: la humildad ante el esfuerzo, la precisión de la fisiología medible y la determinación cruda en el terreno de montaña.
            </p>
          </div>
          
          {/* Right Part: White text on black background */}
          <div className="w-1/2 text-left text-white pl-2 md:pl-4">
            <p className="font-sans font-medium text-xs md:text-lg lg:text-xl leading-relaxed max-w-md mr-auto">
              Entrenamos el motor biológico limpio, sin excusas ni adornos.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Columns */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-8 mt-auto pb-4">
        {/* 2 Grid Columns for 03 and 04 (Always split to match layout) */}
        <div className="grid grid-cols-2 gap-4 md:gap-12 border-t border-black/15 pt-8">
          {/* Column 03 - on the left side (white background, black text) */}
          <div className="flex flex-col gap-2 md:gap-3 text-black">
            <span className="font-mono text-[9px] md:text-xs text-black tracking-[0.2em] uppercase font-bold">03 / DISCIPLINA</span>
            <h3 className="font-display font-black text-sm md:text-lg text-black tracking-wider md:tracking-widest uppercase">Cero Excusas</h3>
            <p className="font-sans text-[10px] md:text-sm text-black font-medium leading-relaxed">
              La montaña no perdona la falta de respeto ni la pereza. Tu cuerpo no miente en el laboratorio. La constancia diaria y la resiliencia en climas inclementes son los únicos caminos factibles.
            </p>
          </div>

          {/* Column 04 - on the right side (black background, white text) */}
          <div className="flex flex-col gap-2 md:gap-3 text-white">
            <span className="font-mono text-[9px] md:text-xs text-white/50 tracking-[0.2em] uppercase">04 / POTENCIAL</span>
            <h3 className="font-display font-black text-sm md:text-lg text-white tracking-wider md:tracking-widest uppercase">Cero Límites</h3>
            <p className="font-sans text-[10px] md:text-sm text-white/70 font-light leading-relaxed">
              Los límites no existen en tu ADN, existen en tu mente. Incrementando tu potencia aeróbica y tu capacidad de tolerar la acidosis metabólica, las barreras anteriores se vuelven obsoletas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
