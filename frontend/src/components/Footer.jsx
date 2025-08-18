import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-red-100 pt-2 mt-16'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
        <div>
          <Link to='/' onClick={() => scrollTo(0, 0)}>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
          </Link>
          
          <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta, a hic ut error illo eligendi earum quaerat iusto aperiam.icing elit. Error ea saepe odio magnam cumque! Animi.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>
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
          <p className='text-xl font-medium mb-5'>
            GET IN TOUCH
          </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-7890</li>
            <li>contact@luxivous.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />

        <p className='py-5 text-sm text-center'>Copyright 2024 @luxivo.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer