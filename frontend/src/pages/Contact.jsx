import React from 'react'
import Title from '../components/Title'
import {assets} from'../assets/frontend_assets/assets.js'
import NewsLetterBox from '../components/NewsletterBox.jsx'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 animate-fadeInDown'>
        <img className='w-full md:max-w-[480px] object-cover object-center shadow-lg' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>
            Our Store
          </p>
          <p className='text-gray-500'>No. 25, Galle Road <br />Suite 3B, Colombo 04, Sri Lanka</p>
          <p className='text-gray-500'>Tel: +94 (11) 234 5678 <br />Email: luxivo@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Luxivo</p>
          <p className='text-gray-500'>Learn more about our teams and job opening.</p>
          <button className='border border-amber-500 px-8 py-4 text-sm transition-all duration-500 hover:bg-amber-500'>Explore Jobs</button>
        </div>
        
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact