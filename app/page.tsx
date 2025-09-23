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
    users: "700+/month",
    stars: 3,
    link: "https://nuwellai.com/",
    image: "/projects/nuwell.png",
    description:
      "Nuwell AI is an advanced nutrition and calorie tracking application designed to help users build healthier eating habits. It combines AI-powered food recognition, personalized meal recommendations, and detailed nutritional analysis to guide users toward their health goals. With features like modern calorie tracking, recipe suggestions, and an AI diet coach, Nuwell makes nutrition management simple, accurate, and accessible to everyone."
  },
  {
    name: "Medimind",
    users: "40+/month",
    stars: 3,
    link: "https://mediminds.netlify.app/",
    image: "/projects/medimind.png",
    description:
      "Medimind. A multi-tenant healthcare platform that connects hospitals, doctors, and patients in one integrated system. It supports appointment scheduling, patient record management, and doctor-patient communication, making healthcare delivery more efficient. The app provides a secure environment where hospitals can manage their workflows, doctors can track patient histories, and patients can easily access medical services from anywhere."
  },
  {
    name: "Awaclinic",
    users: "10+/month",
    stars: 3,
    link: "https://nuwellai.com/",
    image: "/projects/awaclinic.png",
    description:
      "Awaclinic. A multilingual, local voice-powered health assistant designed to make medical guidance more accessible. Built with speech recognition technology, it enables users to interact in their native languages and receive instant health support. The platform bridges language barriers in healthcare, allowing rural and urban communities alike to access vital information and connect with medical professionals with ease."
  },
  {
    name: "Solar Bridge",
    users: "00+/month",
    stars: 3,
    link: "https://solarbridge.vercel.app/",
    image: "/projects/solar.png",
    description:
      "Solar Bridge is a platform we are building for monitoring and tracking solar equipment usage. It provides real-time insights into energy output, system performance, and equipment efficiency, helping users optimize their solar infrastructure. Whether for small-scale installations or larger solar farms, Solar Bridge ensures better maintenance, cost savings, and reliable clean energy management."
  },
  {
    name: "FST-Cloud",
    users: "200+/month",
    stars: 1,
    link: "https://fst-cloud.vercel.app/",
    image: "/projects/cloud.png",
    description:
      "FST-Cloud is a cloud-based collaboration tool designed for students to upload, share, and download academic materials. The platform organizes PDFs and documents by subject and category, making it easy for learners to find the resources they need. With a clean interface and fast retrieval system, FST-Cloud encourages knowledge sharing and supports academic growth within student communities."
  },
  {
    name: "Spotivibes",
    users: "89+/month",
    stars: 1,
    link: "http://spotivibes-x.vercel.app/",
    image: "/projects/sportivibe.png",
    description:
      "Spotivibes is a music streaming web app inspired by Spotify, offering playlist creation, discovery, and playback features. Users can explore curated tracks, build their own playlists, and enjoy a smooth listening experience directly from the browser. It demonstrates how modern frontend development can be applied to deliver engaging, music-focused digital experiences."
  },
];



  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
   <p className='text-sm p-4'><Clock  className='h-4 w-4 inline'/>  {currentTime.wat} WAT</p>  
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
         I am <span className="animate-pulse">ENIGMA.</span>
          </h2>
          <p className="text-sm font-sans">
  A random software guy who is more about crafting modern and intelligent digital products. 
 I explore how we can solve real-world problems and push the boundaries of what's possible with software.
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