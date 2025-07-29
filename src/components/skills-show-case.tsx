import { motion } from "framer-motion";
import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";

export default function SkillsShowcase() {
  return (
    <div
      id="skills"
      className="w-full py-10 flex flex-col items-center gap-8 z-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold sm:text-5xl text-center dark:text-gray-200"
      >
        Habilidades
      </motion.h2>
      <FeaturesSectionWithHoverEffects />
    </div>
  );
}
