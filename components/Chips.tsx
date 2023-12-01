'use client'
import React, { useState } from 'react';

interface ChipsProps {
  title: string,
  bg: boolean,
  colorCode: string
}

const Chips:React.FC<ChipsProps> = ({title, bg, colorCode}) => {
  
  const [borderColor, setBorderColor] = useState('border-['+colorCode+']');
  const [textColor, setTextColor] = useState('text-['+colorCode+']');
  const [bgColor, setBgColor] = useState('bg-['+colorCode+']');

  return (
    <div className={`${'py-[8px] px-[12px] rounded-full border-[1px] '} w-fit ${borderColor} ${bg?bgColor+'opacity-5':''}`}>
      <div className={`${'font-family-Roboto text-[12px]'} ${textColor}`}>{title}</div>
    </div>
  )
}

export default Chips