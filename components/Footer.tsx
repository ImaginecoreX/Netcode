import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col items-center w-full h-[80px]'>
      <div className='frame-container flex items-center justify-between h-full nsTsm:flex-col nsTsm:justify-center'>
          <div className='text-[12px]'>© 2024 • NetCode – All Rights Reserved</div>
          <div className='text-[12px] nsTsm:text-[10px] nsTsm:pt-[4px] nsTsm:opacity-80'><Link href="https://www.imaginecorex.com/" legacyBehavior passHref={true}><a target="_blank" rel="noopener noreferrer">Developed By: ImaginecoreX (Pvt) Ltd.</a></Link></div>
      </div>
    </div>
  )
}

export default Footer