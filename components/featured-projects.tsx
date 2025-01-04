"use client"

import { Card, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Droplets, Star, Users } from 'lucide-react';

interface Project {
  name: string;
  users: string;
  stars: number;
  link: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className='relative px-12 '>
      <Carousel className="w-full ">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div
                onClick={() => window.open(project.link, '_blank')}
                className="cursor-pointer hover:bg-accent/50 transition-colors"
              >
                <div className="p-0 shadow-lg">
                  <div className="relative h-10"> </div>
                  <div className="p-4">

                    <h4 className="text-lg font-semibold">{project.name}</h4>
                    <div className='flex flex-row justify-between'>
                    <p className="text-sm text-muted-foreground"><Users className='inline h-3 w-3'/> {project.users}</p>
                    <p className="text-sm text-muted-foreground"><Star  className='inline h-3 w-3'/>{project.stars}</p>
                    </div>
   
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}