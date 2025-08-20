import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex flex-wrap gap-2 items-center mb-4'>

      <p className='hidden sm:flex w-8 sm:w-12 h-[1px] sm:h-[2px] bg-amber-700'></p>

      <p className='text-gray-500'>
        {text1} <span className='text-amber-700 font-medium'>{text2}</span>
      </p>
      
    </div>
  )
}

export default Title