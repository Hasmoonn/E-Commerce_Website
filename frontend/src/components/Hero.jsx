import React from 'react'
import {assets} from '../assets/frontend_assets/assets.js'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 animate-fadeInDown'>

      {/* hero left side */}
      <div className="w-full lg:h-[450px] sm:w-1/2">
        <img src={assets.hero_image} className='w-full h-full object-cover object-left' alt="" />
      </div>
      

      {/* hero right side  */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-[#f9f7f4]'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#2c2c2c]'></p>
            <p className='tracking-widest font-medium text-sm md:text-base text-gray-600'>OUR BESTSELLERS</p>
          </div>

          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest <span className="prata-regular text-[#8b5e3c]">Arrivals</span></h1>

          <div className="flex items-center gap-3 cursor-pointer group">
            <p className="font-semibold text-sm md:text-base tracking-wide group-hover:text-[#8b5e3c] transition">
              SHOP NOW
            </p>
            <p className="w-10 h-[1.5px] bg-[#2c2c2c] group-hover:bg-[#8b5e3c] transition group-hover:translate-x-2 duration-300"></p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Hero