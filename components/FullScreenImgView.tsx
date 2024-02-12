import { CloseOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

const FullScreenImgView = ({ setVisible, data }: FullScreenImageProps) => {
  return (
    <div className='w-full min-h-screen absolute bg-[#00000084] backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='bg-white p-[12px] rounded-full fixed z-[1000] top-[30px] right-[30px] cursor-pointer hover:scale-95 transform transition-transform duration-300' onClick={() => setVisible(false)}>
        <CloseOutlined />
      </div>
      <div className='w-[90%] h-[90vh] relative ' >
        <Image src={data ? data.diagram : ''} alt={data ? data.id.toString() : 'FullScreenImage'} fill className='object-contain' />
        
      </div>

      <div className='fixed bg-black text-white text-[15px] px-[30px] h-[4vh] nsTsm:h-auto nsTsm:py-[12px] nsTsm:flex-col flex justify-between items-center nsTsm:text-center bottom-0 w-full left-0 z-[1000]'>
          <div>{data ? data.title : ''}</div>
          <div className='opacity-60 nsTsm:mt-1'>BPD: {data? data.id:''}</div>
        </div>

    </div>
  )
}

export default FullScreenImgView