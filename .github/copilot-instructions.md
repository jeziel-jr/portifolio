# Copilot Instructions for Portfolio Project

## Project Overview
This is a modern Next.js 15 portfolio built with TypeScript, featuring animated UI components using Framer Motion, a custom dark/light theme system, and Tailwind CSS v4 with shadcn/ui components.

## Key Architecture Patterns

### Component Structure
- **Page Components**: Located in `src/app/` (App Router structure)
- **Reusable Components**: `src/components/` for main sections (about-me, skills-show-case, etc.)
- **UI Components**: `src/components/ui/` for reusable interface elements
- **File Naming**: Use kebab-case for files (e.g., `about-me.tsx`, `tubelight-navbar.tsx`)

### Animation Patterns with Framer Motion
```tsx
// Standard fade-in pattern used throughout
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } }
};

// Stagger container for multiple child animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};
```

Always use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations.

### Theme System
- Custom theme provider in `src/components/ThemeProvider.tsx` manages light/dark modes
- Uses localStorage persistence and document.documentElement.className switching
- **Important**: Theme toggle currently hardcoded to "dark" only (see line 40 in ThemeProvider.tsx)
- Apply theme-aware styles using Tailwind's `dark:` prefix

### Styling Conventions
- **Tailwind CSS v4** with custom configuration in `src/app/globals.css`
- Uses `@import "tailwindcss"` and `@custom-variant dark (&:is(.dark *))`
- **Color Scheme**: Primary blues (`blue-600`, `indigo-400`), neutral grays
- **Typography**: Geist fonts (sans and mono) defined in layout.tsx
- **Utility Function**: Use `cn()` from `src/lib/utils.ts` for conditional classes

### Component Patterns
- All interactive components use `"use client"` directive
- Navigation uses smooth scroll with section detection (see `tubelight-navbar.tsx`)
- Form components follow controlled component pattern with validation
- Icons from Lucide React with consistent sizing (`h-5 w-5` standard)

## Development Workflow

### Scripts
```bash
npm run dev --turbopack    # Development with Turbopack
npm run build             # Production build
npm run start            # Production server
npm run lint             # ESLint checking
```

### File Organization
- **Absolute imports**: Use `@/` alias for `src/` directory
- **Type definitions**: Co-locate interfaces with components
- **Assets**: Static files in `public/` (avatar.png, icons)

### Animation Guidelines
1. Use consistent easing: `easeInOut` for most transitions
2. Standard durations: 0.8s for main animations, 0.3s for micro-interactions
3. Delay patterns: 0.2s stagger increments, 0.3s initial delay
4. Always wrap complex animations in motion.div containers
5. Use AnimatePresence for conditional rendering with exit animations

### Code Style
- **TypeScript**: Strict mode enabled, prefer interfaces over types
- **Component Props**: Destructure props in function parameters
- **Event Handlers**: Prefix with `handle` (handleInputChange, handleSubmit)
- **State**: Use descriptive names (isSubmitting, isSubmitted, not loading, done)

### Contact Form Pattern
The PremiumContact component demonstrates the project's form handling approach:
- Controlled inputs with error validation
- Loading states with animated feedback
- Success states with conditional rendering using AnimatePresence

### Performance Considerations
- Components use `whileInView` for performance optimization
- Images include proper alt attributes and object-fit styling
- Reduced motion preferences handled by Framer Motion automatically
