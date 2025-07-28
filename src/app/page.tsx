"use client";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";
import ModeToggle from "@/components/ModeToggle";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: "Sobre mim", url: "#", icon: Briefcase },
    { name: "Habilidades", url: "#", icon: FileText },
    { name: "Projetos", url: "#", icon: User },
    { name: "Contato", url: "#", icon: Home },
  ];

  return (
    <div className="w-full h-dvh p-10 flex flex-col">
      {/* Navbar with ModeToggle and NavBar components */}
      <div className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-6">
        <div className="invisible">
          <ModeToggle />
        </div>
        <NavBar items={navItems} />
        <ModeToggle />
      </div>

      <div className="flex flex-col items-center z-50 mt-20">
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

        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/avatar.png"
          alt="Description of the image"
          className="w-96"
        />

        {/* Sobre mim */}
      </div>
    </div>
  );
}
