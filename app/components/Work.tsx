'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
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
    <div className="bg-gray-900 text-gray-300 p-8">
      {/* Work Section */}
      <div ref={workRef} className="mb-6">
        <h2 className="text-xl font-bold text-white mb-6">
         Work
        </h2>
        <p className="text-lg leading-relaxed">
          {startTypingWork ? (
            <Typewriter
              options={{
                strings: [
                  `I’m a frontend developer and a writer, with experience working on various projects such as SuperEX NG and ARTKIT as a Content Writer. When it comes to web development, I have contributed to frontend development, UI optimization, and content creation across different platforms. My passion lies in blending design with functionality to create seamless user experiences..`,
                ],
                autoStart: true,
                loop: true,
                delay: 20,
                cursor: '|',
              }}
            />
          ) : (
            <>
              I’m a frontend developer and a writer, with experience working on various projects such as{' '}
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
              </Link>{' '}
              as a Content Writer. <br />
              When it comes to web development, I have contributed to frontend development, UI optimization, and content creation across different platforms. My passion lies in blending design with functionality to create seamless user experiences. For more details, check out my{' '}
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
          )}
        </p>
      </div>

      {/* Connect Section */}
      <div ref={connectRef}>
        <h2 className="text-xl font-bold text-white mb-6">
       Connect
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Feel free to reach out on any of these platforms:
        </p>
        <div className="flex space-x-6">
          <Link
            href="https://x.com/nigmaQx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-white"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="https://github.com/enigma-137"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-white"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/emmanuel-onoja-22b7a51a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-white"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
