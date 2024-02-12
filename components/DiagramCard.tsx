import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DiagramCard = ({diagram,id,title, description}:DiagramCardProps) => {

  const { ref, inView } = useInView({ triggerOnce: true }); // Hook to detect when the card is in view

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initial animation state (hidden, slightly below)
    visible: { opacity: 1, y: 0 }, // Animation when component is visible
  };

  return (
    <motion.div
    ref={ref} // Ref to detect when the card is in view
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'} // Apply animation when card is in view
      variants={variants}
      transition={{ duration: 0.5 }}
      id={`#${id.toString()}`}
    className='w-full min-h-[400px] bg-white border '>
     <div className='w-full h-[400px] relative'>
     <Image src={diagram} alt={id.toString()} fill className='hover:cursor-zoom-in hover:object-cover '/>
     </div>
     <div className='w-full bg-black box-border py-[16px] px-[16px]'>
        <div className='text-white'>{title}</div>
        {description?<div className='text-white opacity-80 py-[6px]'>{description}</div>:''}
        <div>
          <div className='text-white opacity-60'>BPD {id}</div>
        </div>
     </div>
    </motion.div>
  )
}

export default DiagramCard