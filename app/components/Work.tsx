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
            My goal is to design and build intelligent systems at the intersection of{" "}
            <strong>AI, Data, and Software</strong>. <br />
            My work spans frontend, mobile, and machine learning — with a strong focus on{" "}
            <strong>scalable AI-driven interfaces</strong> and{" "}
            <strong>data-powered decision systems</strong>. PS: I know a little about Blockchain.<br />

{" "} <br />
            Currently, I am learning Data science while building{" "}
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
            <strong>AI + statistics</strong> for smart food recommendations. <br />

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
