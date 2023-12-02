import React from 'react';
import WebDevelopIcon from '@/public/web.svg';
import MobileDevelopIcon from '@/public/mobile.svg';
import DesktopDevelopIcon from '@/public/web.svg';
import CustomDevelopIcon from '@/public/web.svg';
import DeploymentIcon from '@/public/deploy.svg';
import SEOIcon from '@/public/web.svg';
import Image from 'next/image';

interface ServiceCardProps {
  title: string,
  description: string,
  specialChar: string,
  icon: string
}

const ServiceCard:React.FC<ServiceCardProps> = ({title, description, specialChar, icon}) => {
  return (
    <div className='w-auto h-auto border-[1px] border-[#DDD] rounded-[12px] box-border px-[60px] pt-[60px] pb-[50px] flex gap-[40px]'>

        <div className='flex flex-col gap-[24px] items-center'>
          <div className='bg-black flex-shrink-0 w-[88px] h-[88px] rounded-[4px] flex items-center justify-center'><Image src={icon==='WebDevelopIcon'?WebDevelopIcon:icon==='MobileDevelopIcon'?MobileDevelopIcon:icon==='DesktopDevelopIcon'?DesktopDevelopIcon:icon==='CustomDevelopIcon'?CustomDevelopIcon:icon==='DeploymentIcon'?DeploymentIcon:SEOIcon} alt={title} className='w-[48px] h-[48px]'/></div>
          <div><div className='text-[64px] font-semibold text-[#0000000A]'>{specialChar}</div></div>
        </div>

        <div>
          <div><div className='text-[32px] font-semibold'>{title}</div></div>
          <div className='mt-[16px]'><div className='w-[412px] sm:w-[90%] h-auto md:h-auto md:w-[90%] text-[20px] max-h-[128px] overflow-hidden leading-[32px]'>{description}</div></div>
        </div>

    </div>
  )
}

export default ServiceCard