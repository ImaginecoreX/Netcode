'use client'
import React, { useEffect, useState } from 'react';
import x from '@/public/member-twitter.svg';
import github from '@/public/github.svg';
import instagram from '@/public/instagram-black.svg';
import Image from 'next/image';
import nethmina from '@/public/nethmina.jpeg';
import yasith from '@/public/yasith.jpeg';
import menaka from '@/public/menaka.jpeg';
import savindya from '@/public/savindya.jpeg';
import gayuru from '@/public/gayuru.jpeg';
import sahan from '@/public/sahan.jpeg';
import noha from '@/public/noha.jpeg';
import sasindu from '@/public/sasindu.jpeg';

interface MemberCardProps {
  data: any
}

const MemberCard:React.FC<MemberCardProps> = ({data}) => {

  const [memberImg, setMemberImg] = useState<any>();

  useEffect(()=>{

    if(data.img === 'nethmina'){
      setMemberImg(nethmina);
    }else if(data.img === 'yasith'){
      setMemberImg(yasith);
    }else if(data.img === 'menaka'){
      setMemberImg(menaka);
    }else if(data.img === 'savindya'){
      setMemberImg(savindya);
    }else if(data.img === 'sahan'){
      setMemberImg(sahan);
    }else if(data.img === 'gayuru'){
      setMemberImg(gayuru);
    }else if(data.img === 'noha'){
      setMemberImg(noha);
    }else if(data.img === 'sasindu'){
      setMemberImg(sasindu);
    }

  },[data]);

  return (
    <div className='w-auto h-auto border-[1px] border-[#DDD] rounded-[4px] pt-[40px] pb-[60px] px-[36px] relative'>

        <div className='border-b-[1px] border-[#DDD] pb-[26px]'>

          <div className='flex flex-col items-center relative'>
            <div className='w-[120px] h-[120px] border-[1px] border-[#DDD] relative'><Image src={memberImg} alt={data.name} fill className='w-[120px] h-[120px] object-cover'/></div>
            <div className='w-[22px] h-[22px] border-[1px] border-[#DDD] absolute bottom-[-11px] bg-white'></div>
          </div>

          <div className='pt-[30px]'>
            <div><div className='font-family-Lora text-[20px] italic text-center font-semibold'>{data.name}</div></div>
           <div className='mt-[14px]'> <div className='text-center font-medium text-[16px]'>{data.designation}</div></div>
          </div>

        </div>

        <div className='flex flex-col items-center'>

          <div className='pt-[24px]'><div className='text-[15px] font-normal text-center text-black opacity-60 leading-[30px]'>{data.brief}</div></div>

          <div className='flex items-center gap-[30px] mt-[50px]'>
              <a href={data.githubUrl}><div><Image src={github} alt='GitHub' className='w-[24px] h-[24px]'/></div></a>
              <a href={data.xUrl}><div><Image src={x} alt='X' className='w-[24px] h-[24px]'/></div></a>
              <a href={data.instagramUrl}><div><Image src={instagram} alt='Instagram' className='w-[24px] h-[24px]'/></div></a>
          </div>

        </div>

        <div className='w-[18px] h-[18px] border-[1px] border-[#DDD] absolute right-[24px] bottom-[24px]'></div>

    </div>
  )
}

export default MemberCard