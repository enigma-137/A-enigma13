'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WorkSection from '../components/Work';
import SkillsSection from '../components/Skills';
import { FeaturedProjects } from '@/components/featured-projects';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface Project {
    name: string;
    users: string;
    stars: number;
    link: string;
    image: string;
    description: string;
}

export default function AboutPage() {
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
            name: "C-Radar",
            users: "Real-time AI",
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
            users: "CLI Tool",
            stars: 0,
            link: "https://github.com/enigma-137/log-analyzer",
            image: "/projects/log.png",
            description: "Parallel-processed Rust CLI for deep server log analysis, supporting Nginx, Apache, and custom regex-based parsing."
        },
        {
            name: "Solana-X",
            users: "Web3 Tool",
            stars: 0,
            link: "https://github.com/enigma-137/solana-x",
            image: "/projects/solana.png",
            description: "Solana-based content creation engine that generates tweet ideas from external links using automated insights."
        },
        {
            name: "Image CDN",
            users: "Utility",
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
            users: "B2B Health",
            stars: 0,
            link: "https://smartremii-health.netlify.app/",
            image: "/projects/medimind.png",
            description: "Multi-tenant healthcare platform connecting hospitals and doctors with advanced appointment scheduling."
        },
        {
            name: "JOJO AGENT X",
            users: "500+",
            stars: 0,
            link: "https://x.com/jojo_agent_x",
            image: "/projects/jojo-x.png",
            description: "An autonomous AI agent on X for real-time crypto updates, sentiment analysis, and market insights."
        },
    ];

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            <div className="w-full max-w-4xl px-4 py-8 mx-auto relative">
                <div className="flex justify-between items-center mb-8">
                    <p className='text-sm'><Clock className='h-4 w-4 inline mr-2 text-muted-foreground' /> {currentTime.wat} WAT</p>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                        <button
                            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center mb-8">
                    <Image
                        src="/5987562050374715409.jpg"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="rounded-full border-2 border-border"
                    />
                </div>

                <section className="mb-12">
                    <h1 className="text-3xl font-serif font-bold mb-6">About Me</h1>
                    <div className="text-left mb-8">
                        <h2 className="text-xl font-bold mb-4">
                            <span className="text-primary italic px-1"></span>
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed font-sans max-w-2xl">
                            I am actively working towards becoming a dedicated Software Engineer specializing in Rust and AI. I focus on building reliable systems that scale, integrating innovative solutions to solve complex problems with precision and efficiency.
                        </p>
                    </div>
                </section>

                <div className="mb-12">
                    <WorkSection />
                </div>

                <div className="mb-12">
                    <SkillsSection />
                </div>

                {/* <div className="mb-12">
                    <h3 className="text-xl font-bold mb-6">Old Swiping View.</h3>
                    <FeaturedProjects projects={featuredProjects} />
                </div> */}

                <div className='py-4 border-t border-border mt-12'>
                    <h2 className="text-lg font-bold mb-4">Connect.</h2>
                    <div className="flex flex-wrap gap-6 text-muted-foreground">
                        <Link href="https://x.com/nigmaQx" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Twitter size={20} /> Twitter
                        </Link>
                        <Link href="https://github.com/enigma-137" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Github size={20} /> GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/emmanuel-onoja-22b7a51a7/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Linkedin size={20} /> LinkedIn
                        </Link>
                        <Link href="mailto:hello@example.com" className="hover:text-primary transition-colors flex items-center gap-2">
                            <Mail size={20} /> Email
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
