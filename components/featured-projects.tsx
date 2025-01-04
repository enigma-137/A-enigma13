"use client"

import { Card, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    <div>
      <h3 className="text-lg font-bold mt-9 mb-6">Featured Projects</h3>
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card
                onClick={() => window.open(project.link, '_blank')}
                className="cursor-pointer hover:bg-accent/50 transition-colors"
              >
                <CardHeader className="p-0">
                  <div className="relative h-10"></div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.users}</p>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}