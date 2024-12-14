import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const WorkSection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-300 p-8">
    
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white mb-6">Work </h2>
       
        <p className="text-lg leading-relaxed">
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
  </Link>
  {' '} as a Content Writer. {' '}
  <br />
  When it comes web development! I have contributed to frontend development, UI optimization, and content creation across different platforms. 
  My passion lies in blending design with functionality to create seamless user experiences. For more details, 
  check out my{' '}
  <Link
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-500 hover:underline"
  >
    CV
  </Link>
  .
</p>
</div>

      {/* Let's Connect Section */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6"> Connect</h2>
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
