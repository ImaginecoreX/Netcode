"use client"
import Chips from '@/components/Chips';
import ServiceCard from '@/components/ServiceCard';
import SocialSnackBar from '@/components/SocialSnackBar';
import Image from 'next/image';
import ServiceData from '@/data/ServiceData.json';
import ProjectCard from '@/components/ProjectCard';
import MemberCard from '@/components/MemberCard';
import MembersData from '@/data/MembersData.json';
import ContactContainer from '@/components/ContactContainer';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import VerticleSlide from '@/components/VerticleSlide';
import ProjectCardData from '@/data/ProjectData.json';
import futureKidImg from '@/public/explore_img1.jpg';
import kidPlayingImg from '@/public/explore_img2.jpg';
import { useEffect, useRef, useState } from 'react';

// swipper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/app/css/slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CaseStudyCard from '@/components/CaseStudyCard';
import { AllCaseStudies } from '@/utils/CaseStudies';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scaleIn, slideInFromBottom } from '@/utils/motion';
import useScreenSize from '@/utils/useScreenSize';
import { ArrowUpward } from '@mui/icons-material';
import WhatsAppCard from '@/components/social/WhatsAppCard';

export default function Home() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define positions of each section
      const sectionPositions = {
        home: document.getElementById("home")?.offsetTop || 0,
        about: document.getElementById("about")?.offsetTop || 0,
        services: document.getElementById("services")?.offsetTop || 0,
        portfolio: document.getElementById("portfolio")?.offsetTop || 0,
        casestudy: document.getElementById("casestudy")?.offsetTop || 0,
        team: document.getElementById("team")?.offsetTop || 0,
        contact: document.getElementById("contact")?.offsetTop || 0,
      };

      // determine the active section based on scroll position
      let newActiveSection = '';
      Object.entries(sectionPositions).forEach(([section, position]) => {
        if (scrollPosition >= position) {
          newActiveSection = section
        }
      });

      // update activesection state
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, 0]
  );


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: 'start',
      });
    }
  }

  const screenSize = useScreenSize();
  const [upButton, setUpButton] = useState(false);
  useEffect(()=>{
    if(activeSection === "about"){
      setUpButton(true);
    }else if(activeSection === "services"){
      setUpButton(true);
    }else if(activeSection === "portfolio"){
      setUpButton(true);
    }else if(activeSection === "casestudy"){
      setUpButton(true);
    }else if(activeSection === "team"){
      setUpButton(true);
    }else if(activeSection === "contact"){
      setUpButton(true);
    }else{
      setUpButton(false);
    }
  },[activeSection]);

  const [isSocialCard, setIsSocialCard] = useState(false);


  return (
    <main className={`${isSocialCard ? 'max-h-screen overflow-hidden' : ''} min-h-screen w-full flex flex-col items-center overflow-hidden scroll-smooth`}>
      <Navbar currentSection={activeSection} />
      {screenSize === 'nsTsm' ? '' :isSocialCard?'': <SocialSnackBar setWA={setIsSocialCard}/>}
      {/* go up */}
      {upButton && <motion.div initial="hidden" animate="visible" variants={slideInFromBottom(0.6)} onClick={()=>scrollToSection('home')} className='w-[40px] h-[40px] flex hover:scale-90 transform transition-transform duration-300 cursor-pointer text-white justify-center items-center bg-black bottom-[30px] right-[30px] nsTsm:right-[16px] nsTsm:bottom-[24px] z-[1000] rounded-full fixed'>
        <ArrowUpward/>
      </motion.div>}

      {isSocialCard && <WhatsAppCard setVisible={setIsSocialCard}/>}

      {/* HERO =============================================================== */}
      <motion.section initial="hidden" animate="visible" variants={scaleIn(0.3)} className='w-full flex justify-center items-center min-h-screen' id='home'>
        <div className='frame-container flex flex-col items-center justify-center nsTsm:pb-[50px]'>

          <div className='w-[80%]'><div className='text-center text-[64px] font-semibold leading-normal nsTsm:text-[32px] nsTsm:pt-[100px]'>Let’s Build Your Software Journey Right Now!</div></div>
          <div className='pt-[30px]'><div className='font-family-Lora text-center italic text-[32px] nsTsm:text-[18px]'>Crafting Digital Excellence.</div></div>
          <div className='mt-[48px] nsTsm:mt-[30px]'><button onClick={() => scrollToSection('contact')} className='bg-black text-white text-[24px] font-semibold text-center py-[20px] px-[70px] nsTsm:text-[1.2rem] nsTsm:py-[16px] nsTsm:px-[50px]'>Contact us</button></div>
          <div className='mt-[21px] nsTsm:pb-[40px]'><div className='font-family-Lora italic font-normal text-center text-[14px] nsTsm:text-[10px]'>let’s innovate the world together</div></div>

        </div>
      </motion.section>
      {/* HERO =============================================================== */}


      {/* ABOUT US =========================================================== */}
      <motion.section id='about' className='flex flex-col items-center h-auto w-full bg-black text-white pt-[80px] pb-[100px]'>
        <div className='frame-container flex relative'>

          <div className=''>

            <div className='nsTsm:w-full nsTsm:flex nsTsm:justify-end nsTsm:pr-[16px]'> <Chips colorCode='#00B2FF' title='About us' bg={true} /></div>
            <div className='mt-[38px] w-[30%]  nsTsm:flex nsTsm:justify-end nsTsm:w-full nsTsm:pr-[16px]'><div className='font-family-Lora text-[32px] nsTsm:text-right nsTsm:w-[80%] italic font-medium'>At NetCode, we innovate, we create, we excel.</div></div>
            <div className='mt-[14px] w-[50%] nsTsm:w-full nsTsm:flex nsTsm:justify-end nsTsm:pr-[16px]'><div className='text-[14px] font-normal leading-[24px] nsTsm:text-right nsTsm:w-[80%]'>Welcome to the heart of our digital journey. We are NetCode, a passionate team of full-stack software engineers and IT enthusiasts who are dedicated to transforming ideas into extraordinary digital solutions. With a relentless pursuit of innovation and an unwavering commitment to excellence, we have established ourselves as a beacon of creativity and reliability in the world of technology.</div></div>

          </div>

          <div className='absolute right-0 top-[70px] sm:hidden nsTsm:hidden md:hidden lg:block xl:block 2xl:block'>
            <div className='w-[432px] h-[540px] flex-shrink-0  shadow-md bg-[#FCFDFF] relative'><Image src={futureKidImg} alt='Future Kids' className='w-full h-full object-cover' /></div>
          </div>

        </div>
      </motion.section>
      {/* ABOUT US =========================================================== */}


      {/* WHY CHOOSE US =======================================================*/}
      <section id='whyChooseUs' className='w-full h-auto flex flex-col items-center pt-[200px] nsTsm:pt-0 nsTsm:mt-[-60px]'>
        <div className='frame-container flex items-center gap-[180px] nsTsm:gap-[120px] justify-center nsTsm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>

          {/* column 1 */}
          <div className='nsTsm:w-full'>
            <div className='nsTsm:w-full'>
              <div className='w-[432px] h-[540px] nsTsm:w-full flex-shrink-0 shadow-md bg-[#FCFDFF] relative'><Image src={kidPlayingImg} alt='Future Kids' className='w-full h-full object-cover' /></div>
            </div>
          </div>

          {/* column 2 */}
          <div>
            <div className='nsTsm:flex nsTsm:flex-col nsTsm:items-center'>

              <div><Chips bg={false} colorCode='#00B2FF' title='Why Choose Us' /></div>
              <div className='mt-[12px]'><div className='text-[32px] font-medium nsTsm:text-center nsTsm:text-[26px]'>Because we ensure every project we undertake is perfect</div></div>
              <div className='pt-[14px] nsTsm:w-[84%]'><div className='text-[14px] leading-[24px] nsTsm:text-center'>At NetCode, we uphold a commitment to perfection in every project we undertake. Our unwavering dedication ensures that each endeavor reflects the pinnacle of excellence, setting us apart in delivering unparalleled results. Choose confidence, choose distinction – choose NetCode.</div></div>

            </div>
          </div>

        </div>
      </section>
      {/* WHY CHOOSE US =======================================================*/}


      {/* SERVICES WE OFFER ================================================== */}
      <section id='services' className='w-full h-auto flex flex-col items-center pt-[180px] nsTsm:pt-[120px]'>
        <div className='frame-container flex flex-col items-center gap-[80px] nsTsm:gap-[50px]'>

          <div className='flex flex-col items-center'>
            <div><Chips title='Services' colorCode='#00B2FF' bg={false} /></div>
            <div className='pt-[15px]'><div className='text-[48px] font-semibold text-center nsTsm:text-[32px]'>Services we offer</div></div>
          </div>

          <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-[24px] w-full md:grid-cols-1 sm:grid-cols-1 nsTsm:grid-cols-1'>
            {ServiceData.map((data, index) => (
              <ServiceCard key={index} title={data.title} description={data.description} icon={data.icon} specialChar={data.specialChar} />
            ))}
          </div>

        </div>
      </section>
      {/* SERVICES WE OFFER ================================================== */}


      {/* OUR PROJECTS ======================================================= */}
      <section id='portfolio' className='w-full h-auto flex flex-col items-center pt-[180px] nsTsm:pt-[100px]'>
        <div className='frame-container flex flex-col items-center gap-[80px] nsTsm:gap-[50px]'>

          <div className='flex flex-col items-center'>
            <div><Chips title='Portfolio' colorCode='#00B2FF' bg={false} /></div>
            <div className='pt-[15px]'><div className='text-[48px] font-semibold text-center nsTsm:text-[32px]'>Explore Our Projects</div></div>
          </div>

          <div className='w-full flex flex-col items-center'>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}

            >
              {ProjectCardData.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard discription={project.discription} img={project.img} title={project.title} web={project.web} key={index} />
                </SwiperSlide>
              ))}

            </Swiper>



          </div>

        </div>
      </section>
      {/* OUR PROJECTS ======================================================= */}


      {/* OUR CASESTUDIES ======================================================= */}
      <section id='casestudy' className='w-full h-auto flex flex-col items-center pt-[180px] nsTsm:pt-[100px]'>
        <div className='frame-container flex flex-col items-center gap-[80px] nsTsm:gap-[50px]'>

          <div className='flex flex-col items-center'>
            <div><Chips title='Case Study' colorCode='#00B2FF' bg={false} /></div>
            <div className='pt-[15px]'><div className='text-[48px] font-semibold text-center nsTsm:text-[32px]'>Case Studies</div></div>
          </div>

          <div className='w-full flex flex-col items-center'>

            {AllCaseStudies.map((data, index) => (
              <CaseStudyCard key={index} data={data} />
            ))}

          </div>

        </div>
      </section>
      {/* OUR CASESTUDIES ======================================================= */}


      {/* OUR TEAM =========================================================== */}
      <section id='team' className='w-full h-auto flex flex-col items-center pt-[180px] nsTsm:pt-[100px]'>
        <div className='frame-container flex flex-col items-center '>

          <div className='flex flex-col items-center'>
            <div><Chips title='Our Team' colorCode='#00B2FF' bg={false} /></div>
            <div className='pt-[15px]'><div className='text-[48px] font-semibold text-center nsTsm:text-[32px]'>Our Team</div></div>
          </div>

          <div className='w-full grid  pt-[80px] nsTsm:pt-[50px] gap-[24px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 '>

            {MembersData.map((data, index) => (
              <MemberCard key={index} data={data} />
            ))}

          </div>

        </div>
      </section>
      {/* OUR TEAM =========================================================== */}


      {/* CONTACT ============================================================ */}
      <section id='contact' className='w-full h-auto flex flex-col items-center pt-[220px] pb-[140px] nsTsm:pt-[100px] nsTsm:pb-[60px]'>
        <div className='frame-container flex flex-col items-center '>

          <ContactContainer />

        </div>
      </section>
      {/* CONTACT ============================================================ */}

      <Footer />

    </main>
  )
}
