'use client';


import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

// Dynamically imported Typewriter to disable SSR
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

const WorkSection: React.FC = () => {
  const [startTypingWork, setStartTypingWork] = useState(false);
  const [startTypingConnect, setStartTypingConnect] = useState(false);

  const { ref: workRef, inView: workInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: connectRef, inView: connectInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (workInView) setStartTypingWork(true);
    if (connectInView) setStartTypingConnect(true);
  }, [workInView, connectInView]);

  return (
    <div className="">

      <div ref={workRef} className="mb-2">
        <p className="text-base font-bold font-sans  mb-2">
          Work.
        </p>
        <p className="text-sm leading-relaxed font-sans">
          {/* {startTypingWork ? (
            <Typewriter
              options={{
                strings: [
                  `I’m a frontend developer and a writer, with experience working on various projects such as SuperEX NG and ARTKIT as a Content Writer. When it comes to web development, I have contributed to frontend development, UI optimization, and content creation across different platforms. My passion lies in blending design with functionality to create seamless user experiences..`,
                ],
                autoStart: true,
                loop: false,
                delay: 80,
                cursor: '|',
              }}
            />
          ) : ( */}
          <>
            Software Engineer with a growing focus on Rust, AI, and Automation.
            I design and build scalable systems and practical tools that solve real-world problems.

            I have experience developing and maintaining management platforms, and I’ve collaborated with teams across both Web2 and Web3 environments. I enjoy working on systems-level challenges and creating solutions that are efficient, reliable, and easy to scale.

            I also build tools and experimental apps in my spare time, many of which you can explore on my GitHub.

            If you’re working on something interesting, need my services or facing a problem worth solving, feel free to reach out. <br /><br />
            Currently leading the development of <strong>
              <Link
                href="https://nuwellai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:underline"
              >
                NuWell AI
              </Link>
            </strong>, an AI-powered nutrition platform. <br /><br />
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:underline"
            >
              Resume
            </Link>
          </>

          {/* )} */}
        </p>
      </div>


    </div>
  );
};

export default WorkSection;
