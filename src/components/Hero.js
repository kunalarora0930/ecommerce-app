import React from 'react';
//import bg img
import WomanImg from '../img/woman_hero.png'

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className=' h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
       {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pre-title */}

          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div><div>New Trend
            </div>
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br />
          <span className='font-semibold'>WOMENS</span>
          </h1>
          <Link to={'/'} className='self-start font-semibold border-b-2 border-primary group-hover:scale-110 transition duration-300'>
            Discover More
          </Link>
        </div>
        {/* img */}
         <div className='hidden lg:block'>
          <img src={WomanImg} alt=''/>
         </div>
     </div>
    </section>
  )
};

export default Hero;
