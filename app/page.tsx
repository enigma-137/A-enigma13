'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, ArrowRight, Dot } from 'lucide-react';
import { ProjectList } from './components/ProjectList';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Project {
  name: string;
  users: string | null;
  stars: number;
  link: string;
  image: string;
  description: string;
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredProjects: Project[] = [
    {
      name: "C-Radar",
      users: null,
      stars: 0,
      link: "https://github.com/enigma-137/c-radar",
      image: "/projects/c-radar.png",
      description: "High-performance Rust & TypeScript cryptocurrency dashboard with real-time market insights and an AI-powered chat assistant."
    },
    {
      name: "Nuwell AI",
      users: "700+",
      stars: 0,
      link: "https://nuwellai.com/",
      image: "/projects/nuwell.png",
      description: "AI-powered nutrition app with food recognition, meal recommendations, and calorie tracking for healthier eating habits."
    },
    {
      name: "Log Analyzer",
      users: null,
      stars: 0,
      link: "https://github.com/enigma-137/log-analyzer",
      image: "/projects/log.png",
      description: "Parallel-processed Rust CLI for deep server log analysis, supporting Nginx, Apache, and custom regex-based parsing."
    },
    {
      name: "Solana-X",
      users: null,
      stars: 0,
      link: "https://github.com/enigma-137/solana-x",
      image: "/projects/solana.png",
      description: "Solana-based content creation engine that generates tweet ideas from external links using automated insights."
    },
    {
      name: "Image CDN",
      users: null,
      stars: 2,
      link: "https://github.com/enigma-137/image-cdn",
      image: "/projects/cdn.png",
      description: "Streamlined Rust command-line utility for lightning-fast image uploads and Cloudinary CDN management."
    },
    {
      name: "GitHub Worth",
      users: "3K+",
      stars: 7,
      link: "https://github.com/enigma-137/github-worth",
      image: "/projects/github-worth.png",
      description: "Analytical platform to evaluate GitHub repository value and impact based on key development metrics."
    },
    {
      name: "Medimind",
      users: null,
      stars: 0,
      link: "https://smartremii-health.netlify.app/",
      image: "/projects/medimind.png",
      description: "Multi-tenant healthcare platform connecting hospitals and doctors with advanced appointment scheduling."
    },
    {
      name: "JOJO AGENT X",
      users: null,
      stars: 0,
      link: "https://x.com/jojo_exchange",
      image: "/projects/jojo-x.png",
      description: "An autonomous AI agent on X for real-time crypto updates, sentiment analysis, and market insights."
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/50 border-b border-border/10">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase opacity-50">Portfolio v3.0</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/about" className="text-xs font-mono tracking-widest hover:text-primary transition-colors uppercase">
            About
          </Link>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="group relative p-2 transition-all duration-300 active:scale-90"
            aria-label="Toggle theme"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 relative z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <div className="w-full max-w-6xl px-6 md:px-12 py-32 mx-auto">

        {/* Hero Section */}
        <header className="mb-48 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-[120px] font-serif font-black leading-[0.8] mb-8 tracking-tighter"
            >
              Emmanuel <br />
              <span className="text-muted-foreground/30 ml-4 md:ml-12">Onoja.</span>
            </motion.h1>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase py-4 border-y border-border/10">
              <Link href="https://github.com/enigma-137" target="_blank" className="hover:text-primary transition-colors tracking-widest">Github</Link>
              <Link href="mailto:emmanuelonoja@gmail.com" className="hover:text-primary transition-colors tracking-widest">Email</Link>
              <Link href="https://x.com/nigmaQx" target="_blank" className="hover:text-primary transition-colors tracking-widest">Twitter</Link>
            </div>
          </div>

          <div className="order-1 md:order-2 self-start flex flex-col items-end text-right">
            <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase mb-4 tracking-[0.3em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Online
            </div>
            <h2 className="text-xl md:text-2xl font-serif max-w-[280px] leading-snug">
              Software Engineer.
            </h2>
          </div>
        </header>

        {/* Section Label */}
        {/* <div className="mb-24 flex items-center gap-8">
          <h3 className="text-[10px] font-mono tracking-[0.5em] text-muted-foreground uppercase rotate-180 [writing-mode:vertical-lr]">Selected Work</h3>
          <div className="h-px bg-border/20 flex-1" />
        </div> */}

        {/* Projects List */}
        <section className="relative">
          <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase mb-4 tracking-[0.3em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <p className='text-2xl'>Projects</p>
          </div>
          <ProjectList projects={featuredProjects} />

          {/* Background Decorative Text */}
          <div className="hidden lg:block absolute -right-24 top-0 opacity-[0.02] -z-10 select-none">
            <span className="text-[200px] font-serif font-black [writing-mode:vertical-lr] tracking-tighter">
              ENIGMA
            </span>
          </div>
        </section>

        {/* Footer Link */}
        <footer className="mt-48 pt-12 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-8 group">
          {/* <Link href="/about" className="flex items-center gap-4 text-3xl font-serif font-light hover:gap-8 transition-all duration-500">
            Wanna see the full journey? <span className="italic text-muted-foreground group-hover:text-primary transition-colors">Start here.</span> <ArrowRight className="h-8 w-8" />
          </Link> */}
          <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">© {new Date().getFullYear()} ENIGMA.</div>
        </footer>
      </div>

    </div>
  );
}