// "use client"
// // components/CardSlider.tsx
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { Navigation, Pagination } from 'swiper/modules';
// import React from 'react';
// import Link from 'next/link';
// import { IconType } from 'react-icons';
// import { FaLocationArrow } from 'react-icons/fa';
// import getFeatures from '../actions/getFeatures';

// const SliderTest = () => {
//     const features=getFeatures();


//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       modules={[Navigation, Pagination]}
//     >
//       {features.map((feature) => (
//         <SwiperSlide key={feature.url} >
          
//     <Link href={`/${feature.url}`} className='group rounded-lg hover:bg-Primary bg-LightPrimary m-1 flex items-center  justify-center flex-col h-[180px] w-full '>
//         <div className='rounded-full border-[4px] -translate-y-[50px] bg-white border-black'>

//         <feature.icon className='w-[60px] h-[60px] fill-current '/>
//         </div>
//         <div className=' text-2xl font-bold  -translate-y-10 flex items-center gap-[3px] justify-center text-center'>
            
//             <h1 className='text-white'>
 
//             {feature.name}
//             </h1>

            
//             </div>
       
//             <FaLocationArrow  className='text-white group-hover:-translate-y-6 group-hover:translate-x-3 -translate-y-3   transition-all duration-200 w-10 h-10 ' />
//     </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SliderTest;
