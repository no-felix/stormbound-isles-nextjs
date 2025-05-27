<div align=[🎮 Live Demo](https://no-felix.github.io/stormbound-isles-nextjs/) • [🚀 Quick Start](#-quick-start) • [🤝 Contributing](#-contributing)center">

# 🌋 Stormbound Isles

**A Next.js-powered showcase for an epic Minecraft mod**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

[🎮 Live Demo](https://no-felix.github.io/stormbound-isles-nextjs/) • [ Quick Start](#-quick-start) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Overview

Stormbound Isles is a **learning-focused web development project** that serves as both a personal skill-building exercise and a promotional showcase for [my Minecraft mod](https://github.com/no-felix/stormbound-isles). Built with cutting-edge technologies, this project demonstrates modern web development practices through immersive animations, responsive design, and interactive elements.

### 🎯 Project Goals

**Primary: Skill Development & Learning**
- 🚀 **Modern React Patterns** - Exploring Next.js 15, TypeScript, and advanced hooks
- 🎨 **Advanced CSS Techniques** - Glassmorphism, custom animations, and responsive design
- ⚡ **WebGL & Performance** - Interactive particle systems and optimization strategies
- 🛠️ **Professional Workflow** - CI/CD, code quality, and documentation best practices

**Secondary: Mod Promotion**
- 📢 **Showcase Platform** - Highlight my Stormbound Isles Minecraft mod features
- 🌐 **Community Hub** - Provide information and downloads for players
- 🎮 **Interactive Experience** - Engage users with the mod's elemental theme

### 🎯 What Makes This Special

- **🌟 Interactive Particle System** - WebGL-powered floating particles with dynamic connections
- **🎨 Glassmorphism Design** - Modern UI with backdrop blur and elegant transparency effects  
- **⚡ Blazing Fast Performance** - Built with Next.js 15 and optimized for speed
- **📱 Mobile-First Design** - Fully responsive across all devices
- **🌙 Dark Theme Optimized** - Carefully crafted dark mode experience
- **♿ Accessibility First** - ARIA-compliant and keyboard navigation support

### 🏝️ The Stormbound Isles Experience

Experience the ultimate Minecraft showdown across **five elemental islands**:

| 🌋 **Volcano** | ❄️ **Ice** | 🏜️ **Desert** | 🍄 **Mushroom** | 💎 **Crystal** |
|:---:|:---:|:---:|:---:|:---:|
| Fiery landscapes with active volcanoes | Perpetual frost and towering glaciers | Sun-scorched dunes and ancient ruins | Bioluminescent fungi and spore clouds | Energy-infused crystals and light puzzles |

**Core Gameplay Features:**
- 🤝 **Team-based Competition** - Five teams, five unique strategies
- 🌪️ **Dynamic Disasters** - Random catastrophes reshape the battlefield
- ⚖️ **Jury & PvP Phases** - Creative building meets strategic combat
- ✨ **Elemental Powers** - Island-specific bonuses and abilities
- 🏆 **Multi-layered Scoring** - Creativity, survival, and strategy all matter

---

## 🛠️ Tech Stack

This project leverages cutting-edge technologies for optimal performance and developer experience:

### **Frontend**
- **[Next.js 15.3.2](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - Latest React with new features
- **[TypeScript 5.x](https://typescriptlang.org/)** - Type-safe JavaScript superset
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Latest utility-first CSS framework
- **[Framer Motion 12.15.0](https://framer.com/motion/)** - Production-ready motion library

### **Graphics & Animation**
- **[OGL 1.0.11](https://github.com/oframe/ogl)** - Lightweight WebGL library for particles
- **Custom WebGL Shaders** - Hand-crafted visual effects
- **CSS Animations** - Smooth transitions and micro-interactions

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **GitHub Actions** - Automated CI/CD pipeline

### **Architecture Highlights**
- 📦 **Component-Based Design** - Modular and reusable React components
- 🎯 **Absolute Imports** - Clean import paths with `@/` alias
- 🔧 **Type Safety** - Strict TypeScript configuration
- ♿ **Accessibility** - ARIA labels and semantic HTML
- 📱 **Responsive Design** - Mobile-first approach

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 20.x+** - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/no-felix/stormbound-isles-nextjs.git
cd stormbound-isles-nextjs
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

### Development

**Start the development server:**

```bash
npm run dev
# or
yarn dev
```

🌐 **Open [http://localhost:3000](http://localhost:3000)** to view the site

### Production Build

**Build for production:**

```bash
npm run build
# or
yarn build
```

**Start production server:**

```bash
npm run start
# or
yarn start
```

---

## 📁 Project Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── not-found.tsx      # Custom 404 page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Footer.tsx    # Site footer
│   │   └── Layout.tsx    # Main layout wrapper
│   ├── sections/         # Page sections
│   │   ├── CallToAction.tsx
│   │   ├── Features.tsx
│   │   ├── Hero.tsx
│   │   └── Islands.tsx
│   ├── FloatingParticles.tsx  # WebGL particle system
│   ├── ScrollToTop.tsx        # Scroll utility
│   └── SectionDivider.tsx     # Section transitions
└── assets/               # Static assets & resources
```

### Key Components

| Component | Purpose | Features |
|-----------|---------|----------|
| `FloatingParticles` | WebGL particle system | Dynamic connections, color transitions |
| `SectionDivider` | Smooth section transitions | SVG waves with gradient fills |
| `Hero` | Landing page showcase | Typing animation, island badges |
| `Islands` | Interactive island explorer | Glassmorphism cards, smooth transitions |

---

## 🎨 Design Features

### Glassmorphism UI
- **Backdrop blur effects** with CSS `backdrop-filter`
- **Semi-transparent backgrounds** for depth and elegance
- **Subtle border gradients** that respond to content

### Interactive Elements
- **WebGL particle system** with 100+ floating particles
- **Dynamic particle connections** based on proximity
- **Smooth scroll animations** with `framer-motion`
- **Responsive hover states** throughout the interface

### Color System
The site uses a carefully crafted **5-color elemental palette**:

```css
:root {
  --isle-fire: #ff5a36;      /* Volcano Island */
  --isle-ice: #5ad1ff;       /* Ice Island */
  --isle-desert: #ffe156;    /* Desert Island */
  --isle-mushroom: #b36cff;  /* Mushroom Island */
  --isle-crystal: #5affc6;   /* Crystal Island */
}
```

---

## 🚀 Performance Optimizations

- **Turbopack** - Next.js 15's ultra-fast bundler for development
- **Static Site Generation** - Pre-rendered pages for lightning-fast loading
- **WebGL Optimization** - Efficient particle rendering with OGL
- **Image Optimization** - Automatic WebP conversion and responsive loading
- **CSS Optimization** - Tailwind CSS purging for minimal bundle size

### Performance Metrics
- ⚡ **First Contentful Paint**: <1.5s
- 🎯 **Largest Contentful Paint**: <2.5s
- 📱 **Mobile Performance Score**: 95+
- 🖥️ **Desktop Performance Score**: 98+

---

## 🌐 Deployment

### GitHub Pages (Production)

The site is automatically deployed via **GitHub Actions**:

1. Push to `master` branch
2. GitHub Actions builds the project
3. Deploys to GitHub Pages
4. Available at: `https://no-felix.github.io/stormbound-isles-nextjs`

### Alternative Deployment Options

<details>
<summary><strong>🔹 Vercel (Recommended)</strong></summary>

```bash
npm run build
npx vercel --prod
```

Perfect integration with Next.js features.
</details>

<details>
<summary><strong>🔹 Netlify</strong></summary>

```bash
npm run build
# Deploy ./out folder to Netlify
```

Great for static site hosting with CDN.
</details>

<details>
<summary><strong>🔹 Custom Server</strong></summary>

```bash
npm run build
# Deploy ./out folder to your hosting provider
```

Works with any static file hosting service.
</details>

---

## 💻 Development

### Adding New Sections

1. **Create component** in `/src/components/sections/`
2. **Import in** `/src/app/page.tsx`
3. **Add navigation** to footer links

Example new section:

```tsx
// src/components/sections/NewSection.tsx
"use client";

import React from "react";

const NewSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-6 gradient-text">
        New Section
      </h2>
      {/* Your content here */}
    </div>
  );
};

export default NewSection;
```

### Styling Guidelines

- **Use Tailwind classes** for consistent styling
- **Follow glassmorphism pattern** with `.glass` utility class
- **Implement responsive design** with mobile-first approach
- **Use CSS custom properties** for theme consistency

### Component Patterns

```tsx
// Recommended component structure
interface ComponentProps {
  title: string;
  description: string;
  // Add strict TypeScript types
}

const Component: React.FC<ComponentProps> = ({ title, description }) => {
  // Use hooks for state management
  const [isVisible, setIsVisible] = useState(false);
  
  // Implement accessibility
  return (
    <div className="glass p-6 rounded-2xl" role="article" aria-label={title}>
      {/* Component content */}
    </div>
  );
};
```

---

## 🤝 Contributing

We welcome contributions to make Stormbound Isles even better! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs** - Found an issue? Open a GitHub issue
- 💡 **Suggest Features** - Have ideas? We'd love to hear them
- 🔧 **Submit PRs** - Code improvements and new features
- 📖 **Improve Documentation** - Help others understand the project
- 🎨 **Design Enhancements** - UI/UX improvements

### Development Workflow

1. **Fork** the repository
2. **Create** your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make** your changes following our coding standards
4. **Test** your changes thoroughly
5. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push** to your branch:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open** a Pull Request

### Code Standards

- ✅ **TypeScript strict mode** - No `any` types
- ✅ **ESLint compliance** - Run `npm run lint`
- ✅ **Component documentation** - JSDoc comments for complex logic
- ✅ **Responsive design** - Test on multiple screen sizes
- ✅ **Accessibility** - ARIA labels and semantic HTML

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Free to use** for personal and commercial projects
- ✅ **Modify and distribute** as needed
- ✅ **No warranty** - use at your own risk
- ⚖️ **Attribution required** - include original license

---

## 🙏 Acknowledgments

### Technologies & Libraries
- **[Next.js Team](https://nextjs.org/)** - For the amazing React framework
- **[Tailwind Labs](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Framer](https://framer.com/motion/)** - For the beautiful animation library
- **[OGL](https://github.com/oframe/ogl)** - For the lightweight WebGL library

### Design Inspiration
- **Glassmorphism UI trends** - Modern design patterns
- **Gaming UI/UX** - Inspiration from gaming websites
- **Elemental themes** - Color psychology and natural elements

### Special Thanks
- **Minecraft Community** - For continued inspiration
- **Open Source Contributors** - For making development tools accessible
- **GitHub** - For providing excellent hosting and CI/CD tools

---

## 📞 Contact & Support

### Get in Touch
- 🐙 **GitHub**: [@no-felix](https://github.com/no-felix)
- 🌐 **Live Site**: [stormbound-isles-nextjs](https://no-felix.github.io/stormbound-isles-nextjs)
- 📧 **Issues**: [GitHub Issues](https://github.com/no-felix/stormbound-isles-nextjs/issues)

### Project Status
- 🚧 **Status**: Active Development
- 🎯 **Version**: 0.1.0
- 📅 **Last Updated**: May 2025
- 🔄 **CI/CD**: GitHub Actions

### Legal Notice
> **Disclaimer**: Stormbound Isles is not affiliated with, endorsed by, or related to Mojang Studios or Microsoft. This is an independent fan project showcasing my Minecraft mod.

---

<div align="center">

**Made with ❤️ and modern web technologies**

*If you found this project helpful, please consider giving it a ⭐!*

</div>
