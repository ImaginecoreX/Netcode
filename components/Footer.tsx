import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col items-center w-full h-[80px]'>
      <div className='frame-container flex items-center justify-between h-full nsTsm:flex-col nsTsm:justify-center'>
          <div className='text-[12px]'>© 2022 • NetCode – All Rights Reserved</div>
          <div className='text-[12px] nsTsm:text-[10px] nsTsm:pt-[4px] nsTsm:opacity-80'>Developed By: ImaginecoreX (Pvt) Ltd.</div>
      </div>
    </div>
  )
}

export default Footer