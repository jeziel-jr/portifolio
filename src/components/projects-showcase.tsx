import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  Code,
  Database,
  TrendingUp,
  MessageCircle,
  Palette,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/app/glowing-effect";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "Dashboard administrativo completo para e-commerce com análise de vendas, gestão de produtos e relatórios em tempo real.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/jeziel/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "Aplicativo de gerenciamento de tarefas com drag & drop, categorização inteligente e sincronização em tempo real.",
    technologies: ["React", "TypeScript", "Framer Motion", "Firebase"],
    githubUrl: "https://github.com/jeziel/task-manager",
    liveUrl: "https://task-manager-pro.vercel.app",
    icon: <Code className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Weather Forecast",
    description:
      "App de previsão do tempo com mapas interativos, alertas personalizados e interface moderna e responsiva.",
    technologies: ["React", "API Integration", "Chart.js", "Tailwind"],
    githubUrl: "https://github.com/jeziel/weather-app",
    liveUrl: "https://weather-forecast-pro.vercel.app",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Site portfólio moderno com animações fluidas, design responsivo e otimização completa para SEO.",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/jeziel/portfolio-website",
    liveUrl: "https://jeziel-portfolio.vercel.app",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "Chat Application",
    description:
      "Aplicação de chat em tempo real com salas temáticas, emojis personalizados e notificações push.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/jeziel/chat-app",
    liveUrl: "https://realtime-chat-pro.vercel.app",
    icon: <MessageCircle className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "Finance Tracker",
    description:
      "Sistema de controle financeiro pessoal com gráficos interativos, categorização automática e relatórios detalhados.",
    technologies: ["React", "Chart.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/jeziel/finance-tracker",
    liveUrl: "https://finance-tracker-pro.vercel.app",
    icon: <Database className="w-8 h-8" />,
  },
];

export default function ProjectsShowcase() {
  return (
    <div
      id="projects"
      className="min-h-dvh w-full py-20 flex flex-col items-center gap-12 z-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold sm:text-5xl text-center"
      >
        Projetos
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col group rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      {/* Card Header with Icon */}
      <div
        className={cn(
          "relative h-48 bg-gradient-to-br flex items-center justify-center",
          "transition-transform duration-300"
        )}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-white">{project.icon}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-accent hover:border-primary/20 transition-all duration-200 group/btn"
          >
            <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            <span>Código</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 group/btn"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
            <span>Demo</span>
          </a>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[1.5rem]" />
    </motion.div>
  );
};
