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
      name: 'Nuwell AI',
      users: '150+/month',
      stars: 3,
      link: 'nuwellai.com/',
    },
    {
      name: 'FST-Cloud',
      users: '120+/month',
      stars: 1,
      link: 'https://fst-cloud.vercel.app/',
    },
    {
      name: 'Solar Bridge',
      link: 'https://solarbridge.vercel.app/',
      stars: 2,
      users: '12/M',
    },
    {
      name: 'Drops Tracker',
      users: '20+/M',
      stars: 1,
      link: 'https://drops-tracker.vercel.app/home',
    },
    {
      name: 'AI Article Summarizer',
      link: 'https://enigmaaisummarizer.vercel.app/',
      stars: 1,
      users: '56/M',
      
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
   <p className='text-sm p-4'><Clock  className='h-4 w-4 inline'/>  {currentTime.wat} WAT</p>  
      <div className="w-full max-w-4xl px-4 py-8 mx-auto relative">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="absolute top-4 right-4 p-2 rounded-full border-2 border-border hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>

       

        {/* Navigation Icon */}
        <div className="flex items-center mb-8">
          <Image
            src="/freepik__adjust__44279.png"
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full border-4 border-border"
          />
        
        </div>

        {/* Profile Section */}
        <div className="text-left mb-6">
          <h2 className="text-lg font-bold mb-2">Hello,
            I'm <span className="animate-pulse">ENIGMA.</span>
          </h2>
          <p className="text-sm font-sans">
  I'm a software developer passionate about crafting modern frontend architectures and intelligent digital experiences. I specialize in building scalable, interactive software applications and enjoy experimenting with AI, ML, and automation tools. My work explores how code can solve real-world problems and push the boundaries of what's possible with software.
</p>

        </div>

        <div className=''>
          <WorkSection />
        </div>
        <h3 className="text-base font-bold mt-9 mb-6">Featured Projects.</h3>
        <FeaturedProjects projects={featuredProjects} />

         {/* Connect Section */}
      <div className='py-2'>
        <h2 className="text-lg font-bold">
       Connect.
        </h2>
        <p className="text-sm leading-relaxed mb-4 font-sans">
          Feel free to reach out on any of these platforms:
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