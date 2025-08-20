import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div className='group cursor-pointer rounded-md border-amber-300 hover:border p-5'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 group-hover:scale-110 transition duration-300' alt="" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div className='group cursor-pointer rounded-md border-amber-300 hover:border p-5'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 group-hover:scale-110 transition duration-300' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div className='group cursor-pointer rounded-md border-amber-300 hover:border p-5'>
        <img src={assets.support_img} className='w-12 m-auto mb-5 group-hover:scale-110 transition duration-300' alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy