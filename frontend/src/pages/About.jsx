import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets.js'
import NewsletterBox from '../components/NewsletterBox.jsx'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] animate-fadeInLeft shadow-lg' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 animate-fadeInRight'>
          <p>
            At Luxivo, we believe shopping should be more than just a transaction—it should be an experience that inspires and excites. That's why we bring together a carefully curated collection of quality products designed to match your lifestyle, from the latest trends to timeless essentials. Every item in our store is chosen with care, ensuring that you always get the perfect balance of style, quality, and affordability.
          </p>

          <p>
            We are passionate about creating a space where you can shop with confidence and convenience. From browsing our collections to unboxing your order, we are committed to delivering a seamless experience backed by exceptional customer service. At Luxivo, it's not just about what you buy—it's about feeling inspired, confident, and part of a community that values trust and style.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to make fashion and lifestyle accessible to everyone by offering quality, value, and style in every purchase. We aim to build a community where customers feel confident, inspired, and satisfied with their choices.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 text-center'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 transition-all duration-300 hover:bg-amber-50 group'>
          <b className='group-hover:scale-110 duration-300 transition-all ease-in-out'>Quality Assurance</b>
          <p className='text-gray-600 group-hover:scale-110 duration-300 transition-all ease-in-out'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta ipsam iste iure voluptas earum?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 transition-all duration-300 hover:bg-amber-50 group'>
          <b className='group-hover:scale-110 duration-300 transition-all ease-in-out'>Convinience</b>
          <p className='text-gray-600 group-hover:scale-110 duration-300 transition-all ease-in-out'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta ipsam iste iure voluptas earum?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 transition-all duration-300 hover:bg-amber-50 group'>
          <b className='group-hover:scale-110 duration-300 transition-all ease-in-out'>Exceptional Customer Service</b>
          <p className='text-gray-600 group-hover:scale-110 duration-300 transition-all ease-in-out'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta ipsam iste iure voluptas earum?</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About