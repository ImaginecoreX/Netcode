"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import Netcode from '@/public/netcode.svg';
import { AllCaseStudies } from '@/utils/CaseStudies';


const CaseStudy = ({ params }: { params: { slug: string } }) => {

  const id = params;
  const route = useRouter();
  const back = () => route.back();

  const [study, setStudy] = useState<CaseStudyCardProps | any>();
  useEffect(() => {
    const foundStudy = AllCaseStudies.find(data => data.title === decodeURIComponent(id.slug));
    if (foundStudy) {
      setStudy(foundStudy);
      console.log(foundStudy);
    }
  }, [params]);

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className='frame-container '>

        <div className='w-full flex items-center justify-between bg-white mt-[28px]'>
          {/* column 1 */}
          <div className='flex items-center gap-[12px]'>
            <div><Image src={Netcode} alt='Netcode' className='' /></div>
            <div className='text-[20px] font-medium text-black text-center'>Netcode</div>
          </div>
          {/* column 2 */}
          <div className='hover:text-blue-500 cursor-pointer'>
            <div onClick={back} >Go Back</div>
          </div>
        </div>
      </div>
      <div className='bg-black w-full mt-[30px] min-h-[100px] flex justify-center items-center nsTsm:h-auto'>
        <div className='text-white text-center text-[1.4rem] font-medium nsTsm:w-[80%]'>{study?.title}</div>
      </div>
      <div className='frame-container '>

        {/* details */}
        <div className='mt-[60px] flex gap-[24px]'>
          {/* sidebar */}
          <div className='w-1/6 h-[200px] border '>

          </div>

          {/* datablock */}
          <div className='w-5/6'>
            <div className='w-full h-[400px]'>
              <video src='' className='w-full h-full bg-red-300' />
            </div>
          </div>

        </div>


      </div>
    </div>
  )

}

export default CaseStudy