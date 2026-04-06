'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  name: string;
  link: string;
  description: string;
  image?: string;
  users?: string | null;
}

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="w-full space-y-24">
      {projects.map((project, index) => {
        let projectSlug = project.link;
        try {
          if (project.link.startsWith('http')) {
            const url = new URL(project.link);
            projectSlug = url.hostname.toUpperCase();
          } else if (project.link.startsWith('/')) {
            projectSlug = "LOCAL.APP";
          }
        } catch (e) {
          projectSlug = project.link.toUpperCase();
        }

        const projectNumber = (index + 1).toString().padStart(2, '0');

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Number and Meta */}
              <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-4">
                <span className="text-4xl md:text-6xl font-mono opacity-10 font-bold group-hover:opacity-30 transition-opacity duration-500">
                  {projectNumber}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                    {projectSlug}
                  </span>
                  {project.users && (
                    <span className="text-[10px] font-mono text-primary/60 italic">
                      {project.users} reached
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <Link
                  href={project.link}
                  target={project.link.startsWith('http') ? "_blank" : "_self"}
                  className="inline-flex items-center gap-3 group/link"
                >
                  <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight group-hover:italic transition-all duration-300">
                    {project.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-primary-foreground group-hover/link:-rotate-45 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </Link>

                <div className="max-w-xl">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle background glow on hover */}
            <div className="absolute -inset-x-8 -inset-y-8 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl -z-10 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
}
