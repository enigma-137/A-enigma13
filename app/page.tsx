'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import WorkSection from './components/Work';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { FeaturedProjects } from '@/components/featured-projects';
import SkillsSection from './components/Skills';

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
      name: 'Nuwell',
      users: '100+/month',
      stars: 3,
      link: 'https://nuwellx.vercel.app/',
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
        <div className="text-left mb-12">
          <h1 className="text-2xl font-bold mb-2">Hello,</h1>
          <h2 className="text-3xl font-bold mb-4">
            I'm <span className="animate-pulse">ENIGMA.</span>
          </h2>
          <p className="text-base text-muted-foreground">
            I am a software developer specialized in developing modern frontend infrastructures. My passion is building
            stuff that makes life easier for everyone. I also have interests in AI and ML tech!
          </p>
        </div>

        <div className=''>
          <WorkSection />
        </div>

        <FeaturedProjects projects={featuredProjects} />
        <SkillsSection />
      </div>

      
    </div>
  );
}