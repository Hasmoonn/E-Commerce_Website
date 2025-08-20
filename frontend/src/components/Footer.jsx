import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-100 pt-2 mt-16'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <Link to='/' onClick={() => scrollTo(0, 0)}>
            <img src={assets.logo_img} className='mb-3 w-32' alt="" />
          </Link>
          
          <p className='w-full md:w-2/3 text-gray-600'>Luxivo is your trusted destination for timeless style and quality. We're dedicated to secure shopping, fast delivery, and exceptional service—making every purchase effortless and inspiring.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-amber-700'>
            COMPANY
          </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5 text-amber-700'>
            GET IN TOUCH
          </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+94 (11) 234 5678</li>
            <li>contact@luxivous.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className='border border-gray-300' />

        <p className='py-5 text-sm text-center'>Copyright 2024 @luxivo.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer