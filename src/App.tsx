import React from "react";
import { motion } from "motion/react";
import SectionInicio from "./components/SectionInicio";
import SectionQueEsZero from "./components/SectionQueEsZero";
import SectionQueHaceZero from "./components/SectionQueHaceZero";
import SectionContacto from "./components/SectionContacto";
import ScrollIndicator from "./components/ScrollIndicator";

export default function App() {
  const sections = [
    { id: "section-origen", label: "ORIGEN" },
    { id: "section-que-es-zero", label: "¿QUÉ ES ZERO?" },
    { id: "section-que-hace-zero", label: "BASE ZERO" },
    { id: "section-cero-limites", label: "CERO LÍMITES" },
  ];

  return (
    <main className="relative w-full min-h-screen bg-black overflow-y-auto selection:bg-white selection:text-black">
      {/* Floating Interactive Navigation Overlay */}
      <ScrollIndicator sections={sections} />

      {/* Floating background grids for subtle architectural structure */}
      <div className="fixed inset-0 grid grid-cols-4 pointer-events-none z-0 opacity-5">
        <div className="border-r border-white/40 h-full" />
        <div className="border-r border-white/40 h-full" />
        <div className="border-r border-white/40 h-full" />
        <div className="h-full" />
      </div>

      {/* Scrollable sections flow */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Section 1: ORIGEN (Hero) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionInicio />
        </motion.div>

        {/* Section 2: ¿QUÉ ES ZERO? */}
        <SectionQueEsZero />

        {/* Section 3: ¿QUÉ HACE ZERO? */}
        <SectionQueHaceZero />

        {/* Section 4: CERO LÍMITES (Contacto) */}
        <SectionContacto />
      </div>
    </main>
  );
}
