import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';


const skills = [
  { name: 'JavaScript', image: '/js.png' },
  { name: 'React', image: '/react.png' },
  { name: 'TypeScript', image: '/typescipt.png' },
  { name: 'MongoDB', image: '/mongodb.png' },
  { name: 'Prisma', image: '/prisma.png' },
  { name: 'Framer Motion', image: '/motions.png' },
  { name: 'TailwindCSS', image: '/tailwind.png' },
  { name: 'Next.js', image: '/nextjs.png' },
  { name: 'ShadCN UI', image: '/shadcn.png' },
  { name: 'Google Docs', image: '/docs.png' }
];

const SkillsSection: React.FC = () => {
  const scatterEffect = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: Math.random() * 360,
      x: Math.random() * 400 - 200, 
      y: Math.random() * 400 - 200, // scatter effect on Y axis
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 100,
        damping: 15
      },
    }),
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold text-white mb-6 underline">Skills</h2>
      <motion.div
        className="grid grid-cols-3 gap-4"
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={scatterEffect}
            className="relative w-20 h-20"
          >
            <Image
              src={skill.image}
              alt={skill.name}
              className="w-full h-full rounded-full object-contain"
              width={225}
              height={225}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
