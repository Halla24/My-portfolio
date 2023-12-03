import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FlipCard from './FlipCard';

export default function HeaderCard() {
  return (
    <div className="flex z-10 flex-col items-center justify-center my-8 max-w-screen-xl mx-auto">
      <div className="flex z-[1] sm:flex-row sm:items-center flex-col-reverse sm:justify-center gap-8 w-full md:w-[777px] lg:w-[960px] xl:w-[1222px]">
        <div className="flex flex-col justify-center items-start gap-6 w-full" style={{ wordWrap: 'break-word' }}>
          <h5 className="text-[#1A1A1A] md:text-[32px] sm:text-[24px] text-[10px] lg:text-[48px] sm:leading-[32px] sm:tracking-[0.11px] font-[500] lg:leading-[44px] lg:tracking-[0.18px] break-words font-serif italic">
            About me
          </h5>
          <p className="text-[#ba76bfed] md:text-[18px] sm:text-[16px] text-[10px] lg:text-[24px] font-[400] lg:leading-[30px] lg:tracking-[0.10px] break-words font-serif italic">
            As a passionate Frontend Web Developer, I specialize in creating engaging digital experiences using HTML, CSS, JavaScript, Next.js, and React. I have a proven track record of building various websites that captivate users. Furthermore, I freelance as a translator for multiple languages, including Turkish, English, French, Chinese, and more.
          </p>
          <Link href="/My-CV.pdf" passHref>
          <button
         className="text-center bg-[#4B2499] hover:bg-purple-500 w-[80px] h-[20px] sm:text-[13px] text-[10px] rounded-[20px] text-white lg:text-[18px] font-serif italic sm:font-normal sm:w-[120px] sm:h-[40px] md:w-[180px] md:h-[50px] lg:w-[150px] lg:h-[60px] xl:w-[220px] xl:h-[70px]"
            >
        More
      </button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <FlipCard />
        </div>
      </div>
    </div>
  );
}


