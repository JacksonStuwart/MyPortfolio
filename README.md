# Jackson Stuwart - AI-First Full Stack Engineer Portfolio

This is a modern, premium, dark-mode-first personal portfolio website built to showcase my AI-first workflow, multi-agent systems, and full-stack engineering projects. It is designed to position me as a High-Agency Builder and Systems Thinker for startup founders, recruiters, and engineering leaders hiring for AI-native roles.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Inter & Outfit (Google Fonts)

## Features
- **Glassmorphic UI**: Premium frosted glass effects and deep dark mode aesthetics utilizing custom Tailwind CSS variables.
- **Scroll-reactive Navbar**: Intelligently hides when reading to maximize viewing space and reappears on scroll up.
- **Abstract Portrait Hero**: Custom CSS masking seamlessly blends the portrait image directly into the dark background, overlaying a massive typography hook.
- **Interactive Multi-Agent Workflow Diagram**: Stunning visual representation of the orchestration pipeline (Reason -> Build -> Verify -> Ship) using custom SVG gradients and Framer Motion.
- **Immersive Project Cards**: Gorgeous hover glows and detailed categorizations for projects like the "Personal Agentic Swarm" and AI-native applications.
- **Bento-Grid Tech Stack**: Over 40 technologies cleanly mapped across domains (Cloud Architecture, LLM & Agentic, ML Ops, Frontend, etc.).
- **Responsive Design**: Flawlessly scalable across mobile, tablet, and ultra-wide displays.

## How it Works Under the Hood
- The site heavily utilizes `framer-motion` for staggered entrance animations, scroll-triggered reveals (`whileInView`), and complex states.
- Reusable utility classes (like `glass` and `glass-strong`) are defined within `src/app/globals.css` to provide consistent, performant backdrop blurring across components.
- Components are entirely modular (e.g., `Hero.tsx`, `About.tsx`, `TechStack.tsx`) and assembled seamlessly within `src/app/page.tsx` for optimal Next.js Server Components / Client Components hydration.

## Local Development
To run this project locally, ensure you have Node.js installed.

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server. 
   *(Note: Due to path spacing on certain Windows profiles, you may need to run the explicit node binary if `npm run dev` fails)*:
   ```bash
   node ./node_modules/next/dist/bin/next dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Vercel
This project is natively designed to be deployed on Vercel seamlessly. There is no complex server configuration required.

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit of portfolio"
   git push origin main
   ```
2. Go to [Vercel.com](https://vercel.com) and log in.
3. Click "Add New Project" and import your connected GitHub repository.
4. Vercel will automatically detect that it's a Next.js application and configure the build settings.
5. Click **Deploy**. Your site will be live in minutes.
6. Any future pushes to your `main` branch on GitHub will automatically trigger a continuously integrated new deployment on Vercel!

## License
Built with passion by Jackson Stuwart. All rights reserved.
