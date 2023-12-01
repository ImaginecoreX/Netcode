import Image from 'next/image';
import React from 'react';
import facebook from '@/public/facebook.svg';
import x from '@/public/x.svg';
import instagram from '@/public/instagram.svg';
import linkedin from '@/public/linkedin.svg';
import whatsApp from '@/public/whatsapp.svg';
import email from '@/public/email.svg';

const SocialSnackBar = () => {
  return (
  <div className='fixed top-1/2 left-0 transform -translate-y-1/2'>
      <div className='w-[42px] bg-black h-auto rounded-r-[4px] py-[12px] '>
      <div className='flex flex-col items-center gap-[24px]'>

        <div><Image src={facebook} alt='facebook' className='cursor-pointer'/></div>
        <div><Image src={x} alt='facebook' className='cursor-pointer'/></div>
        <div><Image src={instagram} alt='facebook' className='cursor-pointer'/></div>
        <div><Image src={linkedin} alt='facebook' className='cursor-pointer'/></div>
        <div><Image src={whatsApp} alt='facebook' className='cursor-pointer'/></div>
        <div><Image src={email} alt='facebook' className='cursor-pointer'/></div>
      

      </div>
    </div>
  </div>
  )
}

export default SocialSnackBar