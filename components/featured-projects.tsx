"use client";

import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import { Star, Users } from "lucide-react";

interface Project {
  name: string;
  users: string;
  stars: number;
  link: string;
  image?: string;
  description?: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const Card = ({
  children,
  onSwipeComplete,
  canSwipe,
}: {
  children: React.ReactNode;
  onSwipeComplete: () => void;
  canSwipe: boolean;
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [constrained, setConstrained] = useState(true);

  const flyAway = (dir: "left" | "right") => {
    const flyAwayDistance = (dirLocal: "left" | "right") => {
      if (!cardRef.current) return 0;

      const parentElement = cardRef.current.parentElement;
      if (!parentElement) return 0;

      const parentWidth = parentElement.getBoundingClientRect().width;
      const childWidth = cardRef.current.getBoundingClientRect().width;

      return dirLocal === "left"
        ? -(parentWidth + childWidth)
        : parentWidth + childWidth;
    };

    setConstrained(false);
    controls
      .start({
        x: flyAwayDistance(dir),
        transition: { duration: 0.3 },
      })
      .then(() => {
        x.set(0);
        setConstrained(true);
        onSwipeComplete();
      });
  };

  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  return (
    <motion.div
      ref={cardRef}
      className="absolute w-full h-full"
      animate={controls}
      drag={canSwipe ? "x" : false}
      dragConstraints={
        constrained ? { left: -200, right: 200, top: 0, bottom: 0 } : false
      }
      dragElastic={0.6}
      style={{ x, rotate }}
      onDragEnd={() => {
        const currentVelocity = x.getVelocity();
        const currentX = x.get();
        const swipeThresholdDistance = 80; // px
        const velocityThreshold = 50; // px/s

        const shouldSwipeLeft =
          currentX < -swipeThresholdDistance ||
          currentVelocity <= -velocityThreshold;
        const shouldSwipeRight =
          currentX > swipeThresholdDistance ||
          currentVelocity >= velocityThreshold;

        if (canSwipe && (shouldSwipeLeft || shouldSwipeRight)) {
          flyAway(shouldSwipeLeft ? "left" : "right");
        } else {
          controls.start({
            x: 0,
            rotate: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          });
        }
      }}
      whileTap={{ scale: canSwipe ? 1.02 : 1 }}
    >
      {children}
    </motion.div>
  );
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const initialProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Nuwell AI Recipes",
            users: "15k+",
            stars: 4.8,
            link: "#",
            description:
              "AI-powered nutrition and calorie tracking collaboration platform for food science",
            image:
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=160&fit=crop",
          },
          {
            name: "Spotify Music App",
            users: "500M+",
            stars: 4.5,
            link: "#",
            description: "Spotify-inspired music app for playlist students",
            image:
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=160&fit=crop",
          },
          {
            name: "Weather Dashboard",
            users: "2M+",
            stars: 4.2,
            link: "#",
            description:
              "Modern weather tracking with beautiful visualizations",
            image:
              "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=160&fit=crop",
          },
        ];

  const [cards, setCards] = useState<Project[]>(initialProjects);

  const handleSwipeComplete = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

  const reversedCards = cards.slice().reverse();

  return (
    <div className="flex justify-center items-center  bg-gradient-to-br  p-4">
      <div className="relative w-[400px] h-[500px]">
        {reversedCards.map((project, index) => {
          const canSwipe = index === reversedCards.length - 1;
          const stackIndex = reversedCards.length - 1 - index;

          return (
            <motion.div
              key={`${project.name}-${cards.indexOf(project)}`}
              className="absolute inset-0"
              style={{
                zIndex: index,
              }}
              animate={{
                scale: 1 - stackIndex * 0.03,
                y: stackIndex * 6,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Card onSwipeComplete={handleSwipeComplete} canSwipe={canSwipe}>
                <div className="relative w-full p-3 rounded-xl shadow-2xl overflow-hidden">
                  {/* Solid background layer to prevent transparency */}
                  <div className="absolute inset-0 rounded-xl bg-card" />

                  {/* Paper texture overlay */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-40 dark:opacity-0"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.06) 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.04) 0%, transparent 50%),
                        linear-gradient(45deg, rgba(222, 184, 135, 0.08) 0%, rgba(205, 133, 63, 0.03) 50%, rgba(139, 69, 19, 0.05) 100%)
                      `,
                    }}
                  />

                  {/* Subtle noise texture */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' result='noiseBase'/%3E%3CfeColorMatrix in='noiseBase' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                      backgroundSize: "150px 150px",
                    }}
                  />

                  {/* Content layer */}
                  <div className="relative z-10 p-2 flex flex-col h-full">
                    {project.image && (
                      <div
                        className="w-full h-40 rounded-lg bg-contain  sepia-[0.5] bg-center mb-4 shadow-md border"
                        style={{
                          backgroundImage: `url(${project.image})`,
                        }}
                        // className="border"
                      />
                    )}

                    <h4 className="text-2xl font-serif font-bold mb-2 text-card-foreground leading-tight">
                      {project.name}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {project.description || "No description available."}
                    </p>

                    <div
                      className="flex justify-between pt-4 items-center text-sm text-card-foreground mt-auto border-t border-border/30"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <span className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full">
                        <Users className="h-4 w-4" />
                        <span className="font-semibold">{project.users}</span>
                      </span>
                      <span className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-full">
                        <Star
                          className="h-4 w-4"
                          fill="#F59E0B"
                          stroke="#F59E0B"
                        />
                        <span className="font-semibold">{project.stars}</span>
                      </span>
                    </div>
                  </div>

                  {/* Enhanced border and shadow */}
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none border"
                    style={{
                      boxShadow: `
                        0 25px 50px -12px rgba(0, 0, 0, 0.15),
                        0 10px 20px -5px hsl(var(--muted)),
                        inset 0 1px 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 hsl(var(--border))
                      `,
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-muted-foreground">
        <p className="text-sm font-medium">
          Swipe left or right to browse projects
        </p>
        <div className="flex gap-2 mt-2 justify-center">
          {cards.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-muted"
              style={{
                backgroundColor: i === 0 ? "#F59E0B" : "hsl(var(--muted))",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
