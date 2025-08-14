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
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto ex quaerat eaque laborum aliquid velit iure animi doloribus quae fugit quis cupiditate alias, at accusantium esse officia ut? Eius, deserunt.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex mollitia impedit sint dolore explicabo facilis vel aliquid temporibus, officiis molestias recusandae optio aspernatur consequuntur illum quae nostrum possimus eveniet quibusdam reprehenderit quos fugiat, veniam nulla neque omnis? Eius dolorum fugit doloribus ullam iste quisquam inventore.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aperiam voluptas eligendi labore. Aspernatur animi dignissimos facilis velit voluptas optio ab ex ullam. A, reiciendis?
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta ipsam iste iure voluptas earum?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta ipsam iste iure voluptas earum?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta ipsam iste iure voluptas earum?</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About