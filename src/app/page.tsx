"use client";
import { useTheme } from "../components/ThemeProvider";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import AboutMe from "@/components/about-me";
import SkillsShowcase from "@/components/skills-show-case";
import ProjectsShowcase from "@/components/projects-showcase";
import { PremiumContact } from "@/components/ui/PremiumContact";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const navItems = [
    { name: "Sobre mim", url: "#about-me", icon: Briefcase },
    { name: "Habilidades", url: "#skills", icon: FileText },
    { name: "Projetos", url: "#projects", icon: User },
    { name: "Contato", url: "#contact", icon: Home },
  ];

  return (
    <div className="w-full px-10 pb-10 pt-0 flex flex-col">
      {/* Navbar with ModeToggle and NavBar components */}
      <div className="flex items-center justify-center fixed top-0 left-0 right-0 z-[999] py-6 px-10">
        {/* <div className="invisible">
          <ModeToggle />
        </div> */}
        <NavBar items={navItems} />
        {/* <ModeToggle /> */}
      </div>

      <AboutMe />
      <SkillsShowcase />
      <ProjectsShowcase />
      <PremiumContact />
    </div>
  );
}
