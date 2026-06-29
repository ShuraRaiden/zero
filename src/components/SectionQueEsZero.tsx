import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function SectionQueEsZero() {
  const { scrollYProgress } = useScroll();

  // Custom vertical offsets for high-impact parallax
  const bgY = useTransform(scrollYProgress, [0.1, 0.45], [-60, 60]);
  const textScale = useTransform(scrollYProgress, [0.15, 0.4], [0.95, 1.1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.45], [20, -20]);

  return (
    <section
      id="section-que-es-zero"
      className="relative min-h-screen w-full bg-black text-white flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 select-none border-b border-white/20 py-24"
    >
      {/* Background Macro Texture with Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] opacity-30 pointer-events-none overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1517030330234-94c4fa9fc8ca?auto=format&fit=crop&q=80&w=1200"
          alt=""
          className="w-full h-full object-cover binary-high-contrast-extreme"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black pointer-events-none" />
      </motion.div>


      {/* Centered Heading */}
      <div className="relative z-10 w-full text-center px-4 max-w-5xl mb-12">
        <motion.h2
          className="font-display font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none select-none transition-all duration-300"
          style={{
            WebkitTextStroke: "1.5px #ffffff",
            color: "transparent",
            y: textY,
            scale: textScale
          }}
        >
          ¿QUÉ ES ZERO?
        </motion.h2>
      </div>

      {/* Main Copy Area */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-12 mt-6">
        <div className="flex flex-col gap-6">
          <p className="font-sans font-black text-2xl md:text-3xl lg:text-4xl text-white leading-tight uppercase tracking-tight">
            Zero no es la ausencia de logros, sino la eliminación absoluta de cualquier distracción que te impida alcanzarlos.
          </p>
          <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed max-w-2xl">
            En una disciplina contaminada por el ruido de las modas y los complementos superfluos, ZERO defiende una vuelta al origen.
          </p>
        </div>

        {/* 2 Grid Columns for 01 and 02 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          {/* Column 01 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">01 / ORIGEN</span>
            <h3 className="font-display font-black text-lg text-white tracking-widest uppercase">Punto Cero</h3>
            <p className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed">
              Aceptar la realidad de tu forma física actual sin adornos. Únicamente partiendo de una evaluación limpia y objetiva de tu motor metabólico podemos construir una base atlética indestructible.
            </p>
          </div>

          {/* Column 02 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase">02 / SILENCIO</span>
            <h3 className="font-display font-black text-lg text-white tracking-widest uppercase">Cero Ruido</h3>
            <p className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed">
              Descartamos las rutinas genéricas de internet y las modas comerciales de material deportivo. Enfocamos la energía en datos biológicos concretos y en la llamada salvaje de la altitud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
