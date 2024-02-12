import Image from 'next/image'
import React from 'react'

const DiagramCard = ({diagram,id,title, description}:DiagramCardProps) => {
  return (
    <div className='w-full min-h-[400px] bg-white border '>
     <div className='w-full h-[400px] relative'>
     <Image src={diagram} alt={id.toString()} fill className=''/>
     </div>
    </div>
  )
}

export default DiagramCard