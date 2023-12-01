import React from 'react';
import github from '@/public/github-white.svg';
import x from '@/public/x.svg';
import instagram from '@/public/instagram.svg';
import facebook from '@/public/facebook.svg';
import linkedind from '@/public/linkedin.svg';
import Image from 'next/image';

const ContactContainer = () => {
  return (
    <div className='w-full flex items-center'>
      {/* Column 1 */}
      <div>
        <div>
          <div><div className='text-[38px] font-normal'>Contact</div></div>
          <div><div className='text-[64px] font-medium'>Let’s Connect</div></div>
          <div><div className='text-[26px] font-normal leading-[38px] w-[60%]'>Drop your queries and we will get back
            to you as soon possible...</div></div>
        </div>

        <div className='mt-[60px]'>
          <div><div className='text-[30px] font-medium'>Send us an email:</div></div>
          <div><div className='text-[20px] font-medium text-[#0780FF]'>teams.netcode@gmail.com</div></div>
        </div>

        <div className='mt-[48px]'>
          <div><div className='text-[30px] font-medium'>Contact us:</div></div>
          <div><div className='text-[20px] font-medium text-[#0780FF]'>+94 74 3837 327</div></div>
        </div>

        <div className='flex items-center gap-[30px] mt-[60px]'>
          <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center'><Image src={github} alt='GitHub' className='w-[26px] h-[26px]' /></div>
          <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center'><Image src={x} alt='X' className='w-[26px] h-[26px]' /></div>
          <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center'><Image src={instagram} alt='Instagram' className='w-[26px] h-[26px]' /></div>
          <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center'><Image src={facebook} alt='Facebook' className='w-[26px] h-[26px]' /></div>
          <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center'><Image src={linkedind} alt='LinkedIn' className='w-[26px] h-[26px]' /></div>
        </div>
      </div>

      {/* column 2 */}
      <div className='flex flex-col gap-[40px]'>
        {/* first, last names */}
        <div className='items-center flex gap-[24px]'>
          {/* first name */}
          <div className='flex-1'>
            <div className='text-[21px] font-medium pb-[14px]'>First Name</div>
            <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg:Alex' />
          </div>
          {/* last name */}
          <div className='flex-1'>
            <div className='text-[21px] font-medium pb-[14px]'>Last Name</div>
            <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg: Cray' />
          </div>

        </div>


        {/* email */}
        <div className='w-full'>
          <div className='text-[21px] font-medium pb-[14px]'>Email</div>
          <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg: example@domain.com' />
        </div>


        {/* subject */}
        <div className='w-full'>
          <div className='text-[21px] font-medium pb-[14px]'>Subject</div>
          <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg: Just saying hi' />
        </div>


        {/* message */}
        <div className='w-full'>
          <div className='text-[21px] font-medium pb-[14px]'>First Name</div>
          <textarea className='border-[1px] min-h-[180px] py-[24px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='Let’s talk about...' />
        </div>

        <button className='w-full bg-black h-[60px] rounded-[12px] text-white text-[24px] font-semibold'>Send</button>
      </div>

    </div>
  )
}

export default ContactContainer