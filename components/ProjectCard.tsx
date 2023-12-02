import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='w-full h-auto border-[1px] border-[#DDDDDD] rounded-[12px] box-border p-[24px] flex items-center gap-[74px] md:flex-col md:pb-[40px] sm:flex-col sm:pb-[40px] nsTsm:flex-col nsTsm:pb-[40px] lg:flex-row xl:flex-row 2xl:flex-row lg:pb-[24px] xl:pb-[24px] 2xl:pb-[24px]'>

        <div className='w-[400px] md:w-full lg:w-[400px] xl:w-[400px] 2xl:w-[400px]  nsTsm:w-full h-[400px] border-[1px] border-[#DDDDDD] relative rounded-[8px] flex-shrink-0'>
            <Image src={'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTcxMDV8MHwxfHNlYXJjaHwxfHxwcm9qZWN0fGVufDB8fHx8MTcwMTM2ODE3Mnww&ixlib=rb-4.0.3&q=85'} alt='project image' className='w-[400px] h-[400px] rounded-[8px] object-cover' loading='lazy' fill/>
        </div>

        <div>

          <div className='flex gap-[30px] 2xl:items-center xl:items-center'>
            <div className='w-[88px] h-[88px] flex-shrink-0 rounded-[4px] bg-black flex justify-center items-center'><div className='text-[48px] font-semibold text-white text-center'>W</div></div>
            <div>
              <div><div className='text-[32px] font-semibold'>School Management System</div></div>
              <div className='pt-[6px]'><div className='text-[20px] font-medium'>www.adyapana.com</div></div>
            </div>
          </div>

          <div className='w-[90%] mt-[24px]'><div className='text-[20px] font-normal leading-[32px]'>Empower your business online with our top-tier web development services. Precision in every line of code, excellence in every design element. Project still pending....</div></div>
          
          <div className='mt-[40px]'>
            <button className='text-[24px] font-semibold text-white px-[90px] py-[14px] bg-black rounded-full BTNShadow'>View</button>
          </div>

        </div>

    </div>
  )
}

export default ProjectCard