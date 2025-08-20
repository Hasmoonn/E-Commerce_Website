import React, { useEffect, useState } from 'react'
import {backendUrl, currency, skeletonLoader} from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchList = async () => {

    try { 
      setLoading(true)  

      const response = await axios.get(backendUrl + '/api/product/list')

      // console.log(response);
      
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }

  const removeProduct = async (id) => {

    try {
      setLoading(true)

      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers: {token}})

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <div className='mb-4 inline-flex gap-3 items-center'>
        <h3 className='font-semibold text-amber-700'>All Products List</h3>
        <hr className='w-8 h-1 rounded-md bg-amber-700'/>
      </div>

      <div className='flex flex-col gap-2'>
        {/* List table title  */}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-amber-500 bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* product list  */}

        {
          loading ? (skeletonLoader()) : (list.map((item, index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
              <img className='w-12' src={item.image[0]} alt="" />
              <p className='text-amber-800'>{item.name}</p>
              <p>{item.category}</p>
              <p className='font-medium text-amber-600'>{currency}{item.price}</p>
              <p onClick={() => removeProduct(item._id)} title='Remove' className='text-right md:text-center text-red-500 text-lg cursor-pointer'>X</p>
            </div>
          )))
        }
      </div>
    </>
  )
}

export default List