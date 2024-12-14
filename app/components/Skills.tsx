import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react';

const skillsOrbit1 = [
  { name: 'JavaScript', image: '/js.png' },
  { name: 'React', image: '/react.png' },
  { name: 'TypeScript', image: '/typescipt.png' }
];

const skillsOrbit2 = [
  { name: 'MongoDB', image: '/mongodb.png' },
  { name: 'Prisma', image: '/prisma.png' },
  { name: 'Framer Motion', image: '/motions.png' },
  { name: 'TailwindCSS', image: '/tailwind.png' }
];

const skillsOrbit3 = [
  { name: 'Next.js', image: '/nextjs.png' },
  { name: 'ShadCN UI', image: '/shadcn.png' },
  { name: 'Google Docs', image: '/docs.png' }
];

const orbitDuration = 30; 

const getTranslateX1 = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 640 ? '50px' : '150px'; 
  }
  return '150px'; 
};

const getTranslateX2 = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 640 ? '100px' : '200px'; 
  }
  return '200px'; 
};
const getTranslateX3 = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 640 ? '150px' : '250px'; 
  }
  return '250px'; 
};

const SkillsSection: React.FC = () => {
  return (
    
    <div className="relative w-full h-[50vh] flex justify-center items-center">
      <h2 className="text-xl font-bold text-white mb-1 underline absolute text-left top-1">Skills</h2>

      <div className="relative flex justify-center items-center">
        {/* Central Skill */}
        <motion.div className="relative border-4 border-white w-12 h-12 md:w-24 md:h-24 rounded-full flex justify-center animate-pulse items-center">
          <Image
            src="/nextjs.png"
            alt="Next.js"
            className="rounded-full"
            width={90}
            height={90}
          />
        </motion.div>

        {/* Orbit 1 */}
        <motion.div
          className="absolute  w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full"
          style={{ border: '2px dashed rgba(255, 255, 255, 0.5)' }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: orbitDuration,
            ease: 'linear',
          }}
        >
          {skillsOrbit1.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="absolute w-6 md:w-12 h-6 md:h-12 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${(i / skillsOrbit1.length) * 360}deg) translate(-50%, -50%) translateX(${getTranslateX1()})`,
                transformOrigin: '0 0',
              }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-full h-full border-4 border-white rounded-full object-contain"
                width={225}
                height={225}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Orbit 2 (Counterclockwise) */}
        <motion.div
          className="absolute  w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full"
          style={{ border: '2px dashed rgba(255, 255, 255, 0.5)' }}
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: orbitDuration * 1.5, // Slightly slower than previous
            ease: 'linear',
          }}
        >
          {skillsOrbit2.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="absolute w-7 h-7 md:w-14 md:h-14 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${(i / skillsOrbit2.length) * 360}deg) translate(-50%, -50%) translateX(${getTranslateX2()})`,
                transformOrigin: '0 0',
              }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-full h-full border-4 border-white animate-pulse rounded-full object-contain"
                width={225}
                height={225}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Orbit 3 */}
        <motion.div
          className="absolute  w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full"
          style={{ border: '2px dashed rgba(255, 255, 255, 0.5)' }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: orbitDuration * 2, // Slowest rotation 60
            ease: 'linear',
          }}
        >
          {skillsOrbit3.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="absolute w-8 h-8 md:w-16 md:h-16 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${(i / skillsOrbit3.length) * 360}deg) translate(-50%, -50%) translateX(${getTranslateX3()})`,
                transformOrigin: '0 0',
              }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-full h-full border-4 border-white rounded-full object-contain"
                width={225}
                height={225}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
