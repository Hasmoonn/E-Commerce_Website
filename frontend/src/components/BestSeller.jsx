import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

  const {products, loading, skeletonLoader} = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller))
    setBestSeller(bestProduct.slice(0,5))
  }, [products])

  return (
    
    <div className='my-5'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base'>Shop our best sellers collection, where top-rated designs meet unbeatable style. These customer favorites are in high demand, so grab yours before they’re gone!</p>
      </div>

      {
        loading ? (skeletonLoader()) : (<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))
        }
      </div>)
      }
      
    </div>
  )
}

export default BestSeller