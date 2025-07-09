# NLW Agents

A modern React web application developed during Rocketseat's NLW (Next Level Week) event, featuring a real-time room-based system with AI agents.

## 🚀 Tech Stack

### Core Technologies
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Reusable component library (New York style)
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful SVG icons
- **Class Variance Authority** - Type-safe component variants

### State Management & Routing
- **React Router DOM 7** - Client-side routing
- **TanStack Query** - Server state management and caching

### Development Tools
- **Biome** - Fast linter and formatter
- **Ultracite** - Advanced code quality rules
- **tw-animate-css** - CSS animations for Tailwind

## 🏗️ Architecture & Patterns

- **Component-based architecture** with reusable UI components
- **File-based routing** using React Router
- **Type-safe development** with TypeScript strict mode
- **CSS-in-JS approach** using Tailwind utility classes
- **Server state management** with TanStack Query for efficient data fetching

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Shadcn/ui components
├── lib/                # Utility functions
├── pages/              # Route components
├── app.tsx             # Main app component
└── main.tsx            # Application entry point
```

## ⚡ Quick Start

### Prerequisites
- Node.js (18+)
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter

## 🎨 UI Components

This project uses Shadcn/ui components with:
- **New York style** configuration
- **Zinc color scheme** for modern aesthetics
- **CSS variables** for theme customization
- **Lucide icons** for consistent iconography

## 📝 Development Notes

- Path aliasing configured with `@/` pointing to `src/`
- Strict TypeScript configuration for enhanced type safety
- Biome for fast linting and code formatting
- Ultracite rules for advanced code quality enforcement

---

Built with ❤️ during **Rocketseat's NLW event**
