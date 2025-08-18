import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products, loading, skeletonLoader } = useContext(ShopContext);
  const [latestproducts, setLatestProducts] = useState([]);
  
  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quod rem architecto amet voluptate sit?</p>
      </div>

      {/* rendering our products  */}
      {
        loading ? (skeletonLoader()) : (<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestproducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
        )
      }
      
    </div>
  )
}

export default LatestCollection