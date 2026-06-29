import React, { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  sections: { id: string; label: string }[];
}

export default function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is mostly visible in viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
            break;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="scroll-indicator-bar"
      className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-6 items-center"
    >
      <div className="h-16 w-[1px] bg-white/20 relative mix-blend-difference">
        <div className="absolute top-0 left-0 w-full bg-white transition-all duration-300 h-1/2" />
      </div>

      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => handleScrollTo(sec.id)}
            className="group flex items-center justify-end gap-3 cursor-pointer outline-none focus:outline-none"
            aria-label={`Scroll to ${sec.label}`}
          >
            {/* Hover Text label - Snug dynamic glass capsule */}
            <span
              className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-all duration-300 ${
                activeSection === "section-origen"
                  ? isActive
                    ? "bg-black text-white px-2.5 py-1 rounded-sm border border-white/20 shadow-lg font-bold opacity-100 translate-x-0"
                    : "bg-black/55 backdrop-blur-sm text-white/75 px-2.5 py-1 rounded-sm border border-white/5 hover:bg-black hover:text-white hover:border-white/15 hover:scale-105 opacity-100 translate-x-0"
                  : isActive
                    ? "bg-black/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-sm border border-white/15 shadow-lg font-bold opacity-100 translate-x-0"
                    : "text-white opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 mix-blend-difference"
              }`}
            >
              {sec.label}
            </span>

            {/* Indicator Dot */}
            <div className="relative flex items-center justify-center w-3 h-3 mix-blend-difference">
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-white scale-125" : "bg-white/40 group-hover:bg-white/70"
                }`}
              />
              {isActive && (
                <div className="absolute inset-0 border border-white rounded-full animate-ping opacity-30" />
              )}
            </div>
          </button>
        );
      })}

      <div className="h-16 w-[1px] bg-white/20 mix-blend-difference" />
    </div>
  );
}
