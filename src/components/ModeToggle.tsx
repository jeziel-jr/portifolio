// src/components/ModeToggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

import { Switch } from "./ui/switch";
import { AcrylicCard } from "./ui/AcrylicCard";

export default function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <AcrylicCard className="h-12 px-4 py-3">
      <div className="flex items-center gap-2">
        <Sun className={`${theme === "light" ? "" : "opacity-40"}`} />
        <Switch
          checked={theme === "dark"}
          onCheckedChange={toggleTheme}
          aria-label="Alternar tema"
        />
        <Moon className={`${theme === "dark" ? "" : "opacity-40"}`} />
      </div>
    </AcrylicCard>
  );
}
