import getFeatures from '@/app/actions/getFeatures'
import React from 'react'
import { IconType } from 'react-icons';
type Props = {
    params: {
     url:string
    };
  };
  
const featurePage = ({params}:Props) => {
    const {url}=params;
  return (
    <div>featurePage of
    <span>{url}</span>
    </div>
  )
}

export default featurePage