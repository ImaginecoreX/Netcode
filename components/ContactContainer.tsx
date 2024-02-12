"use client"
import React, { useState } from 'react';
import github from '@/public/github-white.svg';
import x from '@/public/x.svg';
import instagram from '@/public/instagram.svg';
import facebook from '@/public/facebook.svg';
import linkedind from '@/public/linkedin.svg';
import Image from 'next/image';
import axios from 'axios';
import Chips from './Chips';

const ContactContainer = () => {

  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [msg, setMsg] = useState<string>('');

  const [responseData, setResponseData] = useState<any>('');

  const formData = {
    fname: fname,
    lname: lname,
    email: email,
    subject: subject,
    msg: msg,
    html:`<div>Hello I am ${fname}, ${msg}</div>`
  }

  const submitForm = async () => {

    await axios
      .post("http://localhost:3000/api/send-email", formData)
      .then((res) => {
        setResponseData(res.data);
        if (res.data.msg === "success") {
          setFname('');
          setLname('');
          setEmail('');
          setSubject('');
          setMsg('');
          window.location.reload();
        }
      
      })
      .catch((err) => {
        console.log(err);
      });
     
  };

  




return (
  <div className='w-full flex items-center sm:flex-col nsTsm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
    {/* Column 1 */}
    <div className='w-[60%] nsTsm:w-full  nsTsm:flex nsTsm:flex-col nsTsm:items-center sm:flex sm:flex-col sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start'>

      
      <div className='nsTsm:pb-[80px]  md:pb-[80px] w-full'>
        <div className='nsTsm:hidden'><div className='text-[38px] font-normal nsTsm:text-center nsTsm:text-[24px] mdup:text-center'>Contact</div></div>
        <div className='nsTsm:hidden'><div className='text-[64px] font-medium nsTsm:text-center mdup:text-center nsTsm:w-full nsTsm:text-[36px]'>Let’s Connect</div></div>
        <div className='hidden nsTsm:flex flex-col items-center'>
            <div><Chips title='Contact' colorCode='#00B2FF' bg={false} /></div>
            <div className='pt-[15px]'><div className='text-[48px] nsTsm:text-[32px] font-semibold text-center'>Let’s Connect</div></div>
          </div>
        <div className='nsTsm:w-full nsTsm:flex nsTsm:flex-col nsTsm:items-center mdup:flex-col mdup:flex mdup:items-center'><div className='text-[26px] font-normal leading-[38px] w-[80%] nsTsm:w-[100%] nsTsm:text-[1.3rem] nsTsm:leading-[26px] nsTsm:text-center mdup:w-[80%] mdup:text-center'>Drop your queries and we will get back
          to you as soon possible...</div></div>
      </div>

      <div className='mt-[60px] nsTsm:hidden mdup:hidden'>
        <div><div className='text-[30px] font-medium'>Send us an email:</div></div>
        <div><div className='text-[20px] font-medium text-[#0780FF]'>teams.netcode@gmail.com</div></div>
      </div>

      <div className='mt-[48px] nsTsm:hidden mdup:hidden'>
        <div><div className='text-[30px] font-medium'>Contact us:</div></div>
        <div><div className='text-[20px] font-medium text-[#0780FF]'>+94 74 3837 327</div></div>
      </div>

      <div className='flex items-center gap-[30px] mt-[60px] nsTsm:hidden mdup:hidden'>
        <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={github} alt='GitHub' className='w-[26px] h-[26px] flex-shrink-0' /></div>
        <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={x} alt='X' className='w-[26px] h-[26px] flex-shrink-0' /></div>
        <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={instagram} alt='Instagram' className='w-[26px] h-[26px] flex-shrink-0' /></div>
        <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={facebook} alt='Facebook' className='w-[26px] h-[26px] flex-shrink-0' /></div>
        <div className='p-[17px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={linkedind} alt='LinkedIn' className='w-[26px] h-[26px] flex-shrink-0' /></div>
      </div>
    </div>

    {/* column 2 */}
    <div className='flex flex-col gap-[40px] flex-1'>
      {/* first, last names */}
      <div className='items-center grid grid-cols-2 gap-[24px]'>
        {/* first name */}
        <div className='flex-1'>
          <div className='text-[21px] font-medium pb-[14px]'>First Name</div>
          <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg:Alex' onChange={(event) => { event.preventDefault, setFname(event.target.value) }} value={fname} />
        </div>
        {/* last name */}
        <div className='flex-1'>
          <div className='text-[21px] font-medium pb-[14px]'>Last Name</div>
          <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg: Cray' onChange={(event) => { event.preventDefault, setLname(event.target.value) }} value={lname} />
        </div>

      </div>


      {/* email */}
      <div className='w-full'>
        <div className='text-[21px] font-medium pb-[14px]'>Email</div>
        <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg: example@domain.com' onChange={(event) => { event.preventDefault, setEmail(event.target.value) }} value={email} />
      </div>


      {/* subject */}
      <div className='w-full'>
        <div className='text-[21px] font-medium pb-[14px]'>Subject</div>
        <input type="text" className='border-[1px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='eg: Just saying hi' onChange={(event) => { event.preventDefault, setSubject(event.target.value) }} value={subject} />
      </div>


      {/* message */}
      <div className='w-full'>
        <div className='text-[21px] font-medium pb-[14px]'>Your Message</div>
        <textarea className='border-[1px] min-h-[180px] py-[24px] border-[#A4A4A4] bg-[#FAFAFA] w-full rounded-[12px] h-[60px] text-[21px] placeholder:font-light box-border px-[24px]' placeholder='Let’s talk about...' onChange={(event) => { event.preventDefault, setMsg(event.target.value) }} value={msg} />
      </div>

      <button className='w-full bg-black h-[60px] rounded-[12px] text-white text-[24px] font-semibold hover:scale-95 transform transition-transform duration-300 cursor-pointer' onClick={submitForm}>Send</button>
    </div>
    <div className='mt-[60px] 2xl:hidden xl:hidden lg:hidden'>
      <div><div className='text-[30px] font-medium'>Send us an email</div></div>
      <div><div className='text-[20px] font-medium text-[#0780FF]'>teams.netcode@gmail.com</div></div>
    </div>

    <div className='mt-[48px] 2xl:hidden xl:hidden lg:hidden nsTsm:flex nsTsm:flex-col nsTsm:items-center'>
      <div><div className='text-[30px] font-medium'>Contact us</div></div>
      <div><div className='text-[20px] font-medium text-[#0780FF]'>+94 74 3837 327</div></div>
    </div>

    <div className='flex items-center gap-[30px] nsTsm:gap-[26px] mt-[60px] 2xl:hidden xl:hidden lg:hidden'>
      <div className='p-[17px] nsTsm:p-[12px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={github} alt='GitHub' className='w-[26px] h-[26px] nsTsm:w-[18px] nsTsm:h-[18px]' /></div>
      <div className='p-[17px] nsTsm:p-[12px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={x} alt='X' className='w-[26px] h-[26px] nsTsm:w-[18px] nsTsm:h-[18px]' /></div>
      <div className='p-[17px] nsTsm:p-[12px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={instagram} alt='Instagram' className='w-[26px] h-[26px] nsTsm:w-[18px] nsTsm:h-[18px]' /></div>
      <div className='p-[17px] nsTsm:p-[12px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={facebook} alt='Facebook' className='w-[26px] h-[26px] nsTsm:w-[18px] nsTsm:h-[18px]' /></div>
      <div className='p-[17px] nsTsm:p-[12px] bg-black rounded-full BTNShadow w-fit flex items-center justify-center flex-shrink-0'><Image src={linkedind} alt='LinkedIn' className='w-[26px] h-[26px] nsTsm:w-[18px] nsTsm:h-[18px]' /></div>
    </div>
  </div>
)
}

export default ContactContainer