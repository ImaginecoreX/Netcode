"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import Netcode from '@/public/netcode.svg';
import { AllCaseStudies } from '@/utils/CaseStudies';
import DiagramCard from '@/components/DiagramCard';


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
        <div className='mt-[60px] flex gap-[24px] nsTsm:flex-col'>
          {/* sidebar */}
          <div className='w-1/6 min-h-[200px] h-auto nsTsm:hidden  box-border px-[12px] py-[20px] gap-[24px] flex flex-col '>
            {AllCaseStudies[0].bp.map((data , index)=>(
              <div className='' key={index}>
                  <div className=''>{data.title}</div>
              </div>
            ))}
          </div>

          {/* datablock */}
          <div className='w-5/6 nsTsm:w-full pb-[20px]'>
            <div className='w-full min-h-[400px]'>
              
            <div className='mb-[30px]'>
                <div className='text-[2rem] font-bold'>Overview</div>
                <div className='pt-[6px] leading-[26px]'>An University Project we have to do a industry visit at manufacturing company. With that we choose Tea industry, and we visited <strong>New Kandhagasthanna Tea Factory</strong>.</div>
              </div>

              <video src='' className='w-full h-full bg-black' />

              {/* Diagrams */}
              <div className='mt-[40px]'>
                <div className='text-[2rem] font-bold'>Business Process Diagrams</div>
                <div className='pt-[6px] leading-[26px]'>Now Let's see Hand-Drawed Business Process Diagrams (BPDs) and How they illustrate a Full Analysis of the  <strong>New Kandhagasthanna Tea Factory</strong> Production Process</div>
              </div>
              <div className='mt-[30px] flex flex-col gap-[20px]'>
              {AllCaseStudies[0].bp.map((data, index)=>(
                <DiagramCard key={index} diagram={data.diagram} id={data.id} title={data.title} description={data.description}/>
              ))}
              </div>


            </div>
          </div>

        </div>


      </div>
    </div>
  )

}

export default CaseStudy