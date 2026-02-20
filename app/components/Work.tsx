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
            I build and design intelligent systems at the intersection of{" "}
            <strong>Rust, AI, and Software Engineering</strong>. <br />
            My work spans frontend and backend — with a growing focus on{" "}
            <strong>reliable systems programming</strong>,{" "}
            <strong>AI-powered tools</strong>, and{" "}
            <strong>performance-driven applications</strong>. <br />
            PS: Yes, I understand Blockchain too. <br />

            {" "} <br />
            Currently, I’m deepening my expertise in{" "}
            <strong>Rust and AI infrastructure</strong> while building{" "}
            <strong>
              <Link
                href="https://nuwellai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:underline"
              >
                NuWell AI
              </Link>
            </strong>
            , a nutrition and well-being platform that applies{" "}
            <strong>AI + structured data systems</strong> for smart food recommendations. <br />

            For more details, check my{" "}
            <Link
              href="/resumes.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:underline"
            >
              CV
            </Link>
            .
          </>

          {/* )} */}
        </p>
      </div>


    </div>
  );
};

export default WorkSection;
