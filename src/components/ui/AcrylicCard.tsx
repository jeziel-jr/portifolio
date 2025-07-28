import React from "react";

interface AcrylicCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AcrylicCard({ children, className = "" }: AcrylicCardProps) {
  return (
    <div
      className={`bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg h-fit ${className}`}
    >
      {children}
    </div>
  );
}
