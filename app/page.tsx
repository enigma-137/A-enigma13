'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import WorkSection from './components/Work';
import { useTheme } from 'next-themes';
import { Sun, Moon, Clock } from 'lucide-react';
import { FeaturedProjects } from '@/components/featured-projects';
import SkillsSection from './components/Skills';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

interface Project {
  name: string;
  users: string;
  stars: number;
  link: string;
  image: string;
  description: string;
}

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState({ wat: '', gmt: '' });
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        wat: now.toLocaleTimeString('en-NG', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' }),
        gmt: now.toLocaleTimeString('en-GB', { timeZone: 'GMT', hour: '2-digit', minute: '2-digit' }),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredProjects: Project[] = [
    {
      name: "Nuwell AI",
      users: "700+",
      stars: 0,
      link: "https://nuwellai.com/",
      image: "/projects/nuwell.png",
      description:
        "AI-powered nutrition app with food recognition, meal recommendations, and calorie tracking for healthier eating habits."
    },
    {
      name: "Medimind",
      users: "",
      stars: 0,
      link: "https://smartremii-health.netlify.app/",
      image: "/projects/medimind.png",
      description:
        "Multi-tenant healthcare platform connecting hospitals, doctors, and patients with appointment scheduling and record management."
    },
    {
      name: "Awaclinic",
      users: "",
      stars: 0,
      link: "https://awaclinic.vercel.app/",
      image: "/projects/awaclinic.png",
      description:
        "Multilingual voice-powered health assistant using speech recognition for accessible medical guidance in native languages."
    },
    {
      name: "Type Race",
      users: "~150",
      stars: 2,
      link: "https://typespace.pxxl.click",
      image: "/projects/typerace.png",
      description:
        "Multiplayer typing speed test with real-time leaderboards."
    },
    {
      name: "JOJO AGENT X",
      users: "",
      stars: 0,
      link: "https://x.com/jojo_agent_x",
      image: "/projects/jojo-x.png",
      description:
        "An autonomous AI agent on X for real time crypto updates and insights."
    },
    {
      name: "Ghost followers and X circle",
      users: "",
      stars: 0,
      link: "https://twitter0-apps.vercel.app/",
      image: "/projects/ghost.png",
      description:
        "Identify ghost followers and manage social circles for enhanced engagement."
    },
    {
      name: "FST-Cloud",
      users: "345+",
      stars: 2,
      link: "/#",
      image: "/projects/cloud.png",
      description:
        "Academic material sharing and organization platform for students."
    },
    {
      name: "GitHub worth",
      users: "3K+",
      stars: 7,
      link: "https://github-worth.pxxl.click/",
      image: "/projects/github-worth.png",
      description:
        "Evaluate GitHub repository value based on key metrics."
    },
  ];



  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <p className='text-sm p-4'><Clock className='h-4 w-4 inline' />  {currentTime.wat} WAT</p>
      <div className="w-full max-w-4xl px-4 py-8 mx-auto relative">

        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="absolute top-4 right-4 p-2 rounded-full border-2 border-border hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>




        <div className="flex items-center mb-8">
          <Image
            src="/5987562050374715409.jpg"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-4 border-border"
          />

        </div>


        <div className="text-left mb-6">
          <h2 className="text-lg font-bold mb-2">
            Hello, I am <span className="animate-pulse">Emmanuel.</span>
          </h2>
          <p className="text-sm font-sans">
            Building reliable systems across Rust, AI, and blockchain.
            Focused on architectural precision and software that works.
          </p>
        </div>

        <div className=''>
          <WorkSection />
        </div>
        <h3 className="text-base font-bold mt-9 mb-6">Featured Projects.</h3>
        <p className='text-xs italic'>swipe cards</p>
        <FeaturedProjects projects={featuredProjects} />


        <div className='py-2'>
          <h2 className="text-lg font-bold">
            Connect.
          </h2>
          <p className="text-sm leading-relaxed mb-4 font-sans">
            Find me on:
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://x.com/nigmaQx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-white"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://github.com/enigma-137"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-white"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/emmanuel-onoja-22b7a51a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-white"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
        <div className='mb-4'>
          <SkillsSection />
        </div>

      </div>


    </div>
  );
}