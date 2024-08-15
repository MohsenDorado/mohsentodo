"use server"
import React from 'react'
import getFeatures from '../actions/getFeatures'
import { IconType } from 'react-icons';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';

type Feature = {
    name: string;
    url:string
    icon: IconType;
  };
 
const FeatureCard = ({
    icon:Icon,
    name,
    url
}:Feature) => {
  
      const upperName=name.toUpperCase();
  return (
    <Link href={`/${url}`} className='group rounded-lg hover:bg-Primary bg-LightPrimary m-1 flex items-center  justify-center flex-col h-[180px] w-full '>
        <div className='rounded-full border-[4px] -translate-y-[50px] bg-white border-black'>

        <Icon className='w-[60px] h-[60px] fill-current '/>
        </div>
        <div className=' text-2xl font-bold  -translate-y-10 flex items-center gap-[3px] justify-center text-center'>
            
            <h1 className='text-white'>

            {upperName}
            </h1>

            
            </div>
       
            <FaLocationArrow  className='text-white group-hover:-translate-y-6 group-hover:translate-x-3 -translate-y-3   transition-all duration-200 w-10 h-10 ' />
    </Link>
  )
}

export default FeatureCard