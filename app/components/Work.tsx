'use client';


import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

// Dynamically import Typewriter to disable SSR
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
      {/* Work Section */}
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
  I've worked across different domains in tech — contributing as a frontend developer, AI research assistant, and as a writer. <br />
  I’m currently building intelligent user-facing systems with a focus on clean UI, performance, and scalable frontend architectures. <br />
  At{' '}
  <Link
    href="https://jojo.exchange/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:underline"
  >
    Jojo Exchange
  </Link>
  , I work as an AI Research Assistant exploring ways AI can enhance decentralized trading experiences. <br />
  My earlier roles involved content development at{' '}
  <Link
    href="https://superex.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:underline"
  >
    SuperEX NG
  </Link>{' '}
  and{' '}
  <Link
    href="https://artkit.art"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:underline"
  >
    ARTKIT
  </Link>, where I developed articles and technical documentation. <br />
  Today, I’m focused on using TypeScript, React, and AI APIs to build smarter interfaces. For more, check my{' '}
  <Link
    href="/cv.pdf"
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
