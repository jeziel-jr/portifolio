import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-zinc-900 dark:text-zinc-50 font-inter relative overflow-hidden"
    >
      <motion.div
        className="w-full max-w-2xl flex flex-col items-center gap-12 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Avatar com efeito */}
        <motion.div
          className="relative mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-blue-900 to-orange-400 opacity-60 blur-lg animate-glow" />
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-700 dark:border-white/70 shadow-xl z-10 flex items-center justify-center"
            style={{ width: "8rem", height: "8rem" }}
          >
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-full h-full object-cover mt-4"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
        {/* Título e descrição */}
        <motion.div
          className="flex flex-col items-center gap-3 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-geist drop-shadow-lg">
            Oi, eu sou Jeziel 👋
          </h1>
          <p className="text-xl md:text-2xl text-center dark:text-zinc-300 max-w-lg mx-auto font-inter font-normal">
            Desenvolvedor web apaixonado por criar experiências digitais
            elegantes, acessíveis e de alta performance com React, TypeScript e
            UI moderna.
          </p>
        </motion.div>
        {/* Bloco sobre mim */}
        <motion.div
          className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-950/80 p-7 shadow-lg text-center font-inter backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-200 font-normal">
            Sempre aprendendo, sempre compartilhando. Meu portfólio apresenta
            projetos que refletem dedicação à qualidade, inovação e evolução
            constante.
          </p>
        </motion.div>
        {/* Redes sociais */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 w-full font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          <a
            href="https://github.com/jeziel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
            style={{ minWidth: 140, minHeight: 56 }}
            tabIndex={0}
          >
            <Github size={28} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jeziel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-7 py-3 text-base font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-100 dark:bg-[#0A66C2] text-[#0A66C2] dark:text-white"
            style={{ minWidth: 140, minHeight: 56 }}
            tabIndex={0}
          >
            <Linkedin size={28} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        .font-inter { font-family: 'Inter', 'Geist', system-ui, sans-serif; }
        .font-geist { font-family: 'Geist', 'Inter', system-ui, sans-serif; }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse 6s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
