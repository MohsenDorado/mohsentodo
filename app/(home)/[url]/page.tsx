import getFeatures from '@/app/actions/getFeatures'
import React from 'react'
import { IconType } from 'react-icons';
type Props = {
    params: {
     url:string
    };
  };
  type Feature = {
    name: string;
    url:string;
    description: string;
    icon: IconType; // Adjust the type according to your actual icon component type
  };
const featurePage = ({params}:Props) => {
    const {url}=params;
    const allFeatures=getFeatures();
    const feature:Feature|undefined=allFeatures.find(item=>
      
      item.url===url
      
    )
   

    

  return (
    <div>
    <h1 className='mt-[50px] text-7xl max-sm:text-5xl max-lrg:text-6xl font-dancing font-extrabold text-center'>{feature?.name}</h1>
    <h3 className='text-center sm:text-lg lg:text-2xl text-sm mt-10 max-sm:px-8 px-[200px]'>{feature?.description}</h3>
    </div>
  )
}

export default featurePage