import Image from "next/image";
import React from "react";

const skills = [
  { name: "JavaScript", image: "/js.png" },
  { name: "React", image: "/react.png" },
  { name: "TypeScript", image: "/typescipt.png" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "Prisma", image: "/prisma.png" },
  { name: "Framer Motion", image: "/motions.png" },
  { name: "TailwindCSS", image: "/tailwind.png" },
  { name: "Next.js", image: "/nextjs.png" },
  { name: "ShadCN UI", image: "/shadcn.png" },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="container">
        <h2 className="text-base font-bold mb-4 font-sans">Tools.</h2>
        <p className="text-muted-foreground text-sm mb-8 font-sans">
          My primary stack focuses on Next.js, TypeScript, ShadCN UI, and
          MongoDB. However, I adapt to different tools and technologies as
          needed &lt; after all, they’re just tools :) &gt;
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex font-sans items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-sm"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
