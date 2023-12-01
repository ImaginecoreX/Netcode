import Image from 'next/image';
import React from 'react';
import Netcode from '@/public/netcode.svg';
import lightMode from '@/public/lightMode.svg';

const Navbar = () => {
  return (
  <div className='w-full flex flex-col items-center py-[28px] fixed top-0 backdrop-blur-lg z-50'>
      <div className='flex frame-container w-full justify-between items-center'>
      {/* column 1 */}
        <div className='flex items-center'>
            <div><Image src={Netcode} alt='Netcode' className=''/></div>
            <div className='text-[20px] font-medium text-[#005DA7] text-center'>Netcode</div>
        </div>

      {/* column 2 */}
        <div className='flex items-center gap-[30px]'>

          <div className='flex items-center gap-[22px]'>
          <div className='pb-[5px] border-b-[3px] border-[#0085FF]'><div className='text-[18px] font-medium'>Home</div></div>
          <div className=''><div className='text-[18px]'>About</div></div>
          <div className=''><div className='text-[18px]'>Services</div></div>
          <div className=''><div className='text-[18px]'>Portfolio</div></div>
          <div className=''><div className='text-[18px]'>Team</div></div>
          <div className=''><div className='text-[18px]'>Contact</div></div>
          </div>
          <div className='bg-black w-[55px] h-[32px] rounded-full flex items-center box-border px-[8px]' ><Image src={lightMode} alt='Theme' className='w-[18px] h-[18px]'/></div>

        </div>
    </div>
  </div>
  )
}

export default Navbar