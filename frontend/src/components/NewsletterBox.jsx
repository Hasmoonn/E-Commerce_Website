import React, { useState } from 'react'
import { toast } from "react-toastify";

const NewsletterBox = () => {

  const [email, setEmail] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault();

    toast.success("We will contact you soon")

    setEmail('')
  }
  
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off </p>

      <p className='text-gray-400 mt-3'>
        Subscribe today and unlock an exclusive 20% OFF your first purchase. Be the first to know about our latest collections, special offers, and members-only deals!
      </p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-amber-700 pl-3'>
        <input className='w-full sm:flex-1 outline-none border-none' type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit" className='bg-amber-700 font-medium text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox