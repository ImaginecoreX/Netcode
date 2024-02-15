import { AllAccounts } from '@/utils/WhatsApp'
import { CloseOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

const WhatsAppCard = ({setVisible}:WhatsAppCardProps) => {
  return (
    <div className='w-full min-h-screen absolute bg-[#00000084] backdrop-blur-sm flex justify-center items-center z-50'>
    <div className='bg-white p-[12px] rounded-full fixed z-[1000] top-[30px] right-[30px] cursor-pointer hover:scale-95 transform transition-transform duration-300' onClick={() => setVisible(false)}>
      <CloseOutlined />
    </div>

      <div className='w-[60%] h-[80vh] bg-emerald-100 rounded-[48px] flex-col flex justify-center box-border p-[50px] flex-wrap items-center overflow-y-auto'>
        <div>
          <div className='text-[2.5rem] font-medium pb-8 text-emerald-800'>WhatsApp</div>
        </div>
      {AllAccounts.map((data, index)=>(
      <div key={index}>
          <div className='w-[300px] h-[550px] relative rounded-[24px] border shadow-md'>
            <Image src={data.WhatsAppQR} alt={data.mobile} fill className='rounded-[24px]'/>
          </div>
          <div className='text-center box-border p-[12px] rounded-[24px] z-30 shadow-md mt-[1px] bg-[#1EAB62] text-white'>
            <div className='text-[15px]'>{data.name}</div>
            <div className='text-[16px] font-semibold text-black'>{data.mobile}</div>
          </div>
      </div>
    ))}
      </div>


  </div>
  )
}

export default WhatsAppCard