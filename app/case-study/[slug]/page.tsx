"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Netcode from '@/public/netcode.svg';
import { AllCaseStudies } from '@/utils/CaseStudies';
import DiagramCard from '@/components/DiagramCard';
import FullScreenImgView from '@/components/FullScreenImgView';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { scaleIn, slideInFromBottom, slideInFromRight, slideInFromTop } from '@/utils/motion';

const CaseStudy = ({ params }: { params: { slug: string } }) => {

  const id = params;
  const route = useRouter();
  const back = () => route.back();
  const navigateToHome = ()=>route.push('/',{scroll:true});

  const [study, setStudy] = useState<CaseStudyCardProps | any>();
  useEffect(() => {
    const foundStudy = AllCaseStudies.find(data => data.title === decodeURIComponent(id.slug));
    if (foundStudy) {
      setStudy(foundStudy);
      console.log(foundStudy);
    }
  }, [params]);

  const [isFullImage, setIsFullImage] = useState(false);
  const [img, setImg] = useState<imgObjProps>();
  useEffect(()=>{
    if(img){
      setIsFullImage(true);
    }
  },[img]);


  const [activeSection, setActiveSection] = useState('');
  const sidebarRefs = useRef<Record<string, HTMLDivElement | null>>({});
    // Scroll event listener to determine the active section
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sectionIds = AllCaseStudies[0].bp.map(data => data.id.toString());
  
        for (const id of sectionIds) {
          const element = sidebarRefs.current[id];
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.clientHeight;
            if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
              setActiveSection(id);
              break;
            }
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string)=>{
      const section = document.getElementById(sectionId);
      if(section){
        section.scrollIntoView({
          behavior:"smooth",
          block: 'start',
        });
      }
    }

  return (
    <>
    <div className={`flex flex-col items-center scroll-smooth min-h-screen relative ${isFullImage?'max-h-screen overflow-hidden':''} `} style={{scrollBehavior:'smooth'}}>
    {isFullImage && <FullScreenImgView data={img?.dataObj} setVisible={setIsFullImage} />}
      <motion.div initial="hidden" animate="visible" variants={slideInFromTop(0.3)} className='frame-container '>

        <div className='w-full flex items-center justify-between bg-white mt-[28px]'>
          {/* column 1 */}
          <div className='flex items-center gap-[12px] hover:cursor-pointer' onClick={navigateToHome}>
            <div><Image src={Netcode} alt='Netcode' className='' /></div>
            <div className='text-[20px] font-medium text-black text-center'>Netcode</div>
          </div>
          {/* column 2 */}
          <div className='hover:text-blue-500 cursor-pointer'>
            <div onClick={back} >Go Back</div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={slideInFromTop(0.2)} className='bg-black w-full mt-[30px] min-h-[100px] flex justify-center items-center nsTsm:h-auto nsTsm:py-[20px]'>
        <div className='text-white text-center text-[1.4rem] font-medium nsTsm:w-[80%]'>{study?.title}</div>
      </motion.div>
      
      <motion.div initial="hidden" animate="visible" variants={slideInFromBottom(0.3)} className='frame-container '>

        {/* details */}
        <div className='mt-[60px] nsTsm:mt-[30px] flex gap-[24px] nsTsm:flex-col'>
          {/* sidebar */}
          <div className='w-1/6 min-h-[200px] h-auto nsTsm:hidden  box-border px-[12px] py-[20px] gap-[24px] flex flex-col max-h-screen overflow-hidden overflow-y-auto hide-scrollbar'>
            {AllCaseStudies[0].bp.map((data, index) => (
              <div className={`${activeSection==data.id.toString()?'border-blue-500 box-border px-[6px] text-blue-500 py-[6px] border-l-[2px]':''}`} onClick={()=>scrollToSection(data.id.toString())} key={index} id={data.id.toString() } ref={ref => sidebarRefs.current[data.id.toString()] = ref}>
                <div className=''><strong>{data.id}:</strong> {data.title}</div>
              </div>
            ))}
          </div>

          {/* datablock */}
          <div className='w-5/6 nsTsm:w-full pb-[20px] max-h-screen overflow-hidden nsTsm:max-h-none mdup:overflow-y-auto lg:overflow-y-auto xl:overflow-y-auto 2xl:overflow-y-auto   hide-scrollbar'>
            <div className='w-full min-h-[400px]' >

              <div className='mb-[30px]'>
                <div className='text-[2rem] font-bold'>Overview</div>
                <div className='pt-[6px] leading-[26px]'>An University Project we have to do a industry visit at manufacturing company. With that we choose Tea industry, and we visited <strong>New Kandhagasthanna Tea Factory</strong>.</div>
              </div>

              <motion.video initial="hidden" animate="visible" variants={scaleIn(0.25)} src='' className='w-full h-full bg-black' />

              {/* Diagrams */}
              <div className='mt-[40px]'>
                <div className='text-[2rem] font-bold'>Business Process Diagrams</div>
                <div className='pt-[6px] leading-[26px]'>Now Let's see Hand-Drawed Business Process Diagrams (BPDs) and How they illustrate a Full Analysis of the  <strong>New Kandhagasthanna Tea Factory</strong> Production Process</div>
              </div>
              <div className='mt-[30px] flex flex-col gap-[20px]'>
                {AllCaseStudies[0].bp.map((data, index) => (
                  <div onClick={()=>setImg({id:data.id,dataObj:data})}>
                    <DiagramCard key={index} diagram={data.diagram} id={data.id} title={data.title} description={data.description} />
                  </div>
                ))}
              </div>


            </div>
          </div>

        </div>


      </motion.div>
    </div>
    {!isFullImage && <Footer />}
    </>
  )

}

export default CaseStudy