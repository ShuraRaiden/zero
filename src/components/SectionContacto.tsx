import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import mountFuji from "@/assets/mount_fuji.png";

export default function SectionContacto() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section
      id="section-cero-limites"
      className="relative min-h-screen w-full bg-white text-black flex flex-col justify-between px-8 md:px-16 lg:px-24 py-12"
    >
      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto items-center relative z-10 py-6">
        
        {/* Left Column (Lg: 5/12) - Mountain image and skis silhouette */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="relative aspect-square bg-black rounded-sm overflow-hidden shadow-2xl border border-black/10">
            <img
              src={mountFuji}
              alt="Mount Fuji covered in snow"
              className="w-full h-full object-cover scale-[1.3] origin-bottom binary-high-contrast"
            />
            {/* Skis silhouette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end justify-center pb-8">
              <svg
                width="80"
                height="180"
                viewBox="0 0 80 180"
                fill="none"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                className="opacity-90 drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                role="img"
                aria-label="Silueta de esquís"
              >
                <line x1="30" y1="180" x2="45" y2="10" />
                <line x1="50" y1="180" x2="35" y2="15" />
                <path d="M45 10C45 10 46 5 49 5" />
                <path d="M35 15C35 15 34 10 31 10" />
                <rect x="36" y="90" width="4" height="15" rx="1" fill="black" />
                <rect x="40" y="95" width="4" height="15" rx="1" fill="black" />
              </svg>
            </div>
            {/* Cabin light simulator dot */}
            <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" />
          </div>
          <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase">
            Estudio fotográfico residencial de alta accesibilidad
          </span>
        </div>

        {/* Right Column (Lg: 7/12) - The Contact Form & Socials */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full gap-8 lg:pl-12">
          
          <div className="flex flex-col gap-2">
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tighter uppercase text-black">
              Cero Límites
            </h2>
            <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase">Contacto</span>
            <p className="font-sans text-sm text-black/60 font-light max-w-md tracking-wide mt-2">
              ¿Listo para trazar tu propia línea? Déjanos un mensaje para colaboraciones, expediciones personalizadas o adquisición de tablas ZERO.
            </p>
          </div>

          {/* Interactive Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg">
            <div className="flex flex-col gap-1 border-b border-black py-2">
              <label htmlFor="contact-email" className="font-sans font-black text-[10px] tracking-widest text-black uppercase">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.direccion@email.com"
                className="font-mono text-sm bg-transparent border-none outline-none text-black placeholder-black/30 py-1 w-full"
              />
            </div>

            <div className="flex flex-col gap-1 border-b border-black py-2">
              <label htmlFor="contact-message" className="font-sans font-black text-[10px] tracking-widest text-black uppercase">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu consulta o propuesta técnica..."
                className="font-sans text-sm bg-transparent border-none outline-none text-black placeholder-black/30 py-1 w-full resize-none"
              />
            </div>

            <div className="relative">
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 font-sans font-black text-xs tracking-[0.3em] uppercase transition-all duration-300 relative overflow-hidden rounded-sm border-2 border-black ${
                  isSuccess 
                  ? "bg-black text-white cursor-default" 
                  : "bg-black text-white hover:bg-white hover:text-black cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                    Conectando con el emisor...
                  </span>
                ) : isSuccess ? (
                  "Mensaje enviado"
                ) : (
                  "Enviar mensaje"
                )}
              </button>

              {/* Progress bar line under button */}
              <AnimatePresence>
                {isSubmitting && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 h-1 bg-white"
                  />
                )}
              </AnimatePresence>
            </div>
          </form>

          {/* Social Icons row */}
          <div className="flex flex-col gap-4">
            <span className="font-sans font-black text-[10px] tracking-widest text-black uppercase">
              Redes sociales de transmisión:
            </span>
            
            <div id="socials-container" className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="group p-2 border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-current"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="group p-2 border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-current"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Youtube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
                className="group p-2 border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-current"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="X"
                className="group p-2 border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-current"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="group p-2 border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-current"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Success Notification Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 bg-black text-white p-6 border-2 border-white rounded-sm shadow-2xl z-50 max-w-sm"
          >
            <div className="flex flex-col gap-2">
              <span className="font-sans font-black text-xs tracking-widest uppercase text-white">
                // Transmisión completa //
              </span>
              <p className="font-mono text-xs text-white/80">
                Tu mensaje ha sido grabado en nuestro servidor y encriptado en el canal ZERO. Responderemos en menos de 24 horas.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Text */}
      <div className="border-t border-black/15 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 z-10 w-full">
        <span className="font-sans font-bold text-xs tracking-wide text-black/70">
          ZERO Performance Labs. All rights reserved © 2026
        </span>
        <span className="font-mono text-[9px] text-black/40 uppercase tracking-widest">
          [ 0.00 // BIOMETRIC ALTITUDE LABS ]
        </span>
      </div>
    </section>
  );
}
