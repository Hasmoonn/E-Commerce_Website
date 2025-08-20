import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from "react-router-dom";

const ProductItem = ({id, image, name, price}) => {

  const {currency} = useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`} onClick={() => scrollTo(0,0)}>
      <div className='overflow-hidden max-h-[18rem]'>
        <img src={image[0]} className='hover:scale-110 transition-all duration-300 ease-in-out object-center object-cover' alt="" />
      </div>
      <div>
        <p className='pt-3 pb-1 text-sm'>
          {name}
        </p>
        <p className='text-sm font-medium'>
          {currency} {price}
        </p>
      </div>
      
    </Link>
  )
}

export default ProductItem