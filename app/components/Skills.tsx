import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", image: "/python.jfif" },
  { name: "JavaScript", image: "/js.png" },
  { name: "ShadCN UI", image: "/shadcn.png" },
  { name: "Jupyter", image: "/Jupyter_logo.svg.png" },
  { name: "React", image: "/react.png" },
  { name: "TypeScript", image: "/typescipt.png" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "Prisma", image: "/prisma.png" },
  { name: "Framer Motion", image: "/motions.png" },
  { name: "TailwindCSS", image: "/tailwind.png" },
  { name: "Next.js", image: "/nextjs.png" },
  { name: "Matplotlib", image: "/matplotlib.png" },
  { name: "Seaborn", image: "/seaborn.png" },
  { name: "Scikit-learn", image: "/skicit.png" },
  { name: "NumPy", image: "/numpy.png" },
  { name: "Pandas", image: "/pandas.png" },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full pb-20 pt-10">
      <div className="container">
        <h2 className="text-base font-bold mb-4 font-sans">Tools.</h2>
        <p className="text-muted-foreground text-sm mb-8 font-sans">
          My primary stack focuses on Next.js, TypeScript, ShadCN UI, and
          MongoDB and several others for frontend, and whatever technology is needed for AI/ML and DS. However, I adapt to different tools and technologies as
          needed &lt; after all, they’re just tools :) &gt;
        </p>

        <div className="flex flex-wrap gap-2" style={{ perspective: '1000px' }}>
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="inline-flex font-sans items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1.5 bg-muted rounded-full text-xs sm:text-sm cursor-default"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: Math.random() * 0.2 }}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={16}
                height={16}
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
