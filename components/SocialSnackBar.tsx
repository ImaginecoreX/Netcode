import Image from 'next/image';
import React from 'react';
import facebook from '@/public/facebook.svg';
import x from '@/public/x.svg';
import instagram from '@/public/instagram.svg';
import linkedin from '@/public/linkedin.svg';
import whatsApp from '@/public/whatsapp.svg';
import email from '@/public/email.svg';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import Link from 'next/link';

interface SocialSnackBarProps{
  setWA:Function;
}

const SocialSnackBar = ({setWA}:SocialSnackBarProps) => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: 'start',
      });
    }
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={slideInFromLeft(0.3)} className='fixed top-1/3 left-0 transform -translate-y-1/2 z-[100]'>
      <div className='w-[42px] bg-black h-auto rounded-r-[4px] py-[12px] '>
        <div className='flex flex-col items-center gap-[24px]'>

          <div><Image src={facebook} alt='facebook' className='cursor-pointer' /></div>
          <div><Image src={x} alt='facebook' className='cursor-pointer' /></div>
          <Link href="https://www.instagram.com/netcodegroup?igsh=MW11eGxmaDBiZW90bQ==" legacyBehavior passHref={true}><a target="_blank" rel="noopener noreferrer"><div><Image src={instagram} alt='facebook' className='cursor-pointer' /></div></a></Link>
          <Link href="https://www.linkedin.com/in/netcodegroup/" legacyBehavior passHref={true}><a target="_blank" rel="noopener noreferrer"><div><Image src={linkedin} alt='facebook' className='cursor-pointer' /></div></a></Link>
          <div onClick={()=>setWA(true)}><Image src={whatsApp} alt='facebook' className='cursor-pointer' /></div>
          <div onClick={() => scrollToSection('contact')}><Image src={email} alt='facebook' className='cursor-pointer' /></div>


        </div>
      </div>
    </motion.div>
  )
}

export default SocialSnackBar;

