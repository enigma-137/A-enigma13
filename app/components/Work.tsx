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
  I build software across both web and mobile platforms, with experience spanning frontend engineering, mobile development, and AI-driven interfaces. <br />
  Currently, I’m focused on creating intelligent user-facing systems — emphasizing clean UI, performance, and scalable architectures using TypeScript, React, React Native, and AI APIs. <br />
  
  I’ve been working on both the web and mobile versions of{' '}
  <strong> <Link href="https://nuwellai.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:underline"> NuWell AI</Link></strong>, a health and nutrition platform that leverages Artificial Intelligence for intelligent meal recommendations. <br />
  
 
  You will always find me building things that will make our day to day lives easier. I have experience working with several startups and projects and have been able to contribute to their success.  <br />
  
  For more details, see my{' '}
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
