import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center z-50 gap-8 h-[calc(100dvh-98px)] mt-[98px] pt-7">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-xl font-semibold md:text-2xl">
          Oi, Eu sou o Jeziel 👋
        </h2>
        <p className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Portfólio
        </p>
      </motion.div>

      <div className="flex flex-col items-center gap-4">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/avatar.png"
          alt="Description of the image"
          className="w-96"
        />

        {/* Sobre mim */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-center"
        >
          <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Sou um desenvolvedor web apaixonado por criar experiências digitais
            incríveis. Com uma sólida formação em desenvolvimento front-end,
            estou sempre em busca de novos desafios e oportunidades para
            aprender e crescer. Meu portfólio apresenta uma seleção de projetos
            que refletem minha dedicação à qualidade e à inovação.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
