# Stormbound Isles Website

A modern website built with Next.js for the Stormbound Isles Minecraft mod. This site showcases the mod's features, gameplay, and provides download information.

## About the Mod

Stormbound Isles is a Minecraft mod for version 1.21.1 built to support other mods like Create, Iris, Simple Voice Chat, Sodium, and more, featuring:

- Five elemental-themed islands: Volcano, Ice/Snow, Desert, Mushroom, and Crystal/Magic
- Team-based competition with building, fighting, and survival challenges
- Random catastrophes that influence gameplay
- Team passive bonuses depending on island and position
- A protection phase followed by PvP opportunities
- Scoring system based on construction, survival, and creativity
- Built to support other mods like Create, Iris, Simple Voice Chat, Sodium, and more

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) - Scroll detection

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/no-felix/stormbound-isles-nextjs.git
cd stormbound-isles-nextjs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Build the project:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

- `/src/app` - Next.js app router and main layout
- `/src/components` - React components
  - `/animations` - Animation components (FadeIn, Reveal, Parallax)
  - `/layout` - Layout components (Navbar, Footer)
  - `/sections` - Main page sections (Hero, Features, Islands, etc.)
- `/public` - Static assets (images, fonts, etc.)

## Adding Content

### Images

Add images to the `/public` folder and reference them in your components:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

### New Sections

Create new section components in `/src/components/sections` and add them to the main page in `/src/app/page.tsx`.

## Deployment

The site can be deployed to various platforms:

### Vercel (Recommended)

Deploy to Vercel with minimal configuration:

```bash
npm run build
vercel
```

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the contents of the `out` folder (for static hosting) or `.next` folder (for Node hosting) to your hosting provider.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Geist Font](https://vercel.com/font)
- [react-bits](https://github.com/DavidHDev/react-bits) - Used for `Squares`, `Particles`, and `Aurora` components.
