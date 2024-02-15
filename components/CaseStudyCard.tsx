import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const CaseStudyCard = ({data}:CaseStudyCardProps) => {

  const route = useRouter();

  const navigateToReadArticale = () => {
    route.push(`/case-study/${encodeURIComponent(data.title)}`, {scroll:true});
  };

  return (
    <div className='w-[500px] nsTsm:w-full h-auto pb-[30px] bg-white shadow-sm rounded-md border hover:bg-black hover:text-white hover:cursor-pointer transform transition-transform duration-300 hover:scale-95' onClick={navigateToReadArticale}>
      <div className='box-border p-[12px]'>
        <div className='w-full h-[200px] relative rounded-md'>
          <Image src={data.img} alt='cover' fill className='object-cover rounded-md' />
        </div>
      </div>
      <div className='box-border px-[12px] mt-[8px]'>
        <div className='text-[1.4rem] font-semibold'>{data.title}</div>
        <div className='pt-[4px]'>{data.description}</div>
      </div>
    </div>
  )
}

export default CaseStudyCard