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

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center overflow-hidden">
      <Navbar/>
      <SocialSnackBar/>

      {/* HERO =============================================================== */}
        <section className='w-full flex justify-center items-center min-h-screen'>
          <div className='frame-container flex flex-col items-center justify-center'>

              <div className='w-[80%]'><div className='text-center text-[64px] font-semibold leading-normal nsTsm:text-[48px] nsTsm:pt-[100px]'>Let’s Build Your Software Journey Right Now!</div></div>
              <div className='pt-[30px]'><div className='font-family-Lora text-center italic text-[32px]'>Crafting Digital Excellence.</div></div>
              <div className='mt-[48px]'><button className='bg-black text-white text-[24px] font-semibold text-center py-[20px] px-[70px]'>Contact us</button></div>
              <div className='mt-[21px] nsTsm:pb-[40px]'><div className='font-family-Lora italic font-normal text-center text-[14px]'>let’s innovate the world together</div></div>

          </div>
        </section>
      {/* HERO =============================================================== */}


      {/* ABOUT US =========================================================== */}
      <section className='flex flex-col items-center h-auto w-full bg-black text-white pt-[80px] pb-[100px]'>
      <div className='frame-container flex relative'>

            <div className=''>
              
             <div className='nsTsm:w-full nsTsm:flex nsTsm:justify-end nsTsm:pr-[16px]'> <Chips colorCode='#00B2FF' title='About us' bg={true} /></div>
              <div className='mt-[38px] w-[30%]  nsTsm:flex nsTsm:justify-end nsTsm:w-full nsTsm:pr-[16px]'><div className='font-family-Lora text-[32px] nsTsm:text-right nsTsm:w-[80%] italic font-medium'>At NetCode, we innovate, we create, we excel.</div></div>
              <div className='mt-[14px] w-[50%] nsTsm:w-full nsTsm:flex nsTsm:justify-end nsTsm:pr-[16px]'><div className='text-[14px] font-normal leading-[24px] nsTsm:text-right nsTsm:w-[80%]'>Welcome to the heart of our digital journey. We are NetCode, a passionate team of full-stack software engineers and IT enthusiasts who are dedicated to transforming ideas into extraordinary digital solutions. With a relentless pursuit of innovation and an unwavering commitment to excellence, we have established ourselves as a beacon of creativity and reliability in the world of technology.</div></div>

            </div>

            <div className='absolute right-0 top-[70px] sm:hidden nsTsm:hidden md:hidden lg:block xl:block 2xl:block'>
              <div className='w-[432px] h-[540px] flex-shrink-0  shadow-md bg-[#FCFDFF] relative'><Image src={futureKidImg} alt='Future Kids' className='w-full h-full object-cover'/></div>
            </div>

      </div>
      </section>
      {/* ABOUT US =========================================================== */}


      {/* WHY CHOOSE US =======================================================*/}
      <section className='w-full h-auto flex flex-col items-center pt-[200px] nsTsm:pt-0 nsTsm:mt-[-60px]'>
      <div className='frame-container flex items-center gap-[180px] nsTsm:gap-[120px] justify-center nsTsm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>

    {/* column 1 */}
        <div className='nsTsm:w-full'>
            <div className='nsTsm:w-full'>
              <div className='w-[432px] h-[540px] nsTsm:w-full flex-shrink-0 shadow-md bg-[#FCFDFF] relative'><Image src={kidPlayingImg} alt='Future Kids' className='w-full h-full object-cover'/></div>
            </div>
        </div>

    {/* column 2 */}
        <div>
        <div className='nsTsm:flex nsTsm:flex-col nsTsm:items-center'>
            
            <div><Chips bg={false} colorCode='#00B2FF' title='Why Choose Us'/></div>
            <div className='mt-[12px]'><div className='text-[32px] font-medium nsTsm:text-center'>Because we ensure every<br/> project we undertake is perfect</div></div>
            <div className='pt-[14px] nsTsm:w-[84%]'><div className='text-[14px] leading-[24px] nsTsm:text-center'>At NetCode, we uphold a commitment to perfection in every project we undertake. Our unwavering dedication ensures that each endeavor reflects the pinnacle of excellence, setting us apart in delivering unparalleled results. Choose confidence, choose distinction – choose NetCode.</div></div>

        </div>
        </div>

      </div>
      </section>
      {/* WHY CHOOSE US =======================================================*/}


      {/* SERVICES WE OFFER ================================================== */}
      <section className='w-full h-auto flex flex-col items-center pt-[180px] nsTsm:pt-[120px]'>
      <div className='frame-container flex flex-col items-center gap-[80px]'>

        <div className='flex flex-col items-center'>
          <div><Chips title='Services' colorCode='#00B2FF' bg={false}/></div>
          <div className='pt-[15px]'><div className='text-[48px] font-semibold text-center'>Services we offer</div></div>
        </div>

        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-[24px] w-full md:grid-cols-1 sm:grid-cols-1 nsTsm:grid-cols-1'>
          {ServiceData.map((data, index)=>(
            <ServiceCard key={index} title={data.title} description={data.description} icon={data.icon} specialChar={data.specialChar}/>
          ))}
        </div>

      </div>
      </section>
      {/* SERVICES WE OFFER ================================================== */}


      {/* OUR PROJECTS ======================================================= */}
      <section className='w-full h-auto flex flex-col items-center pt-[180px] nsTsm:pt-[120px]'>
        <div className='frame-container flex flex-col items-center gap-[80px]'>

        <div className='flex flex-col items-center'>
          <div><Chips title='Portfolio' colorCode='#00B2FF' bg={false}/></div>
          <div className='pt-[15px]'><div className='text-[48px] font-semibold text-center'>Explore Our Projects</div></div>
        </div>

        <div className='w-full flex flex-col items-center'>
  
        {ProjectCardData.slice(0,1).map((project, index)=>(
          <>
           <ProjectCard discription={project.discription} img={project.img} title={project.title} web={project.web} key={index}/>
          </>
        ))}
  
          <div className='flex items-center gap-[10px] mt-[50px]'>
            <div className='w-[10px] h-[10px] rounded-full bg-black'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
            <div className='w-[10px] h-[10px] rounded-full bg-black opacity-[0.12]'></div>
          </div>
        </div>

        </div>
      </section>
      {/* OUR PROJECTS ======================================================= */}

      {/* OUR TEAM =========================================================== */}
      <section className='w-full h-auto flex flex-col items-center pt-[180px]'>
      <div className='frame-container flex flex-col items-center '>

      <div className='flex flex-col items-center'>
          <div><Chips title='Our Team' colorCode='#00B2FF' bg={false}/></div>
          <div className='pt-[15px]'><div className='text-[48px] font-semibold text-center'>Our Team</div></div>
        </div>

        <div className='w-full grid  pt-[80px] gap-[24px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 '>

            {MembersData.map((data, index)=>(
              <MemberCard key={index} data={data}/>
            ))}

        </div>

        </div>
      </section>
      {/* OUR TEAM =========================================================== */}


      {/* CONTACT ============================================================ */}
      <section className='w-full h-auto flex flex-col items-center pt-[220px] pb-[140px] nsTsm:pt-[120px] nsTsm:pb-[60px]'>
      <div className='frame-container flex flex-col items-center '>

              <ContactContainer/>

        </div>
      </section>
      {/* CONTACT ============================================================ */}
    
     <Footer/>

    </main>
  )
}
