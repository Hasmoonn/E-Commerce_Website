import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {backendUrl, currency, skeletonLoader} from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/admin_assets/assets'

const Orders = ({token}) => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchAllOrders = async () =>{

    try {
      if (!token) {
        return null
      }

      setLoading(true)

      const response = await axios.post(backendUrl + '/api/order/list', {}, {headers: {token}})

      // console.log(response.data);
      
      if (response.data.success) {
        setOrders(response.data.orders)
      } else{
        toast.error(response.data.message)
      }

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }


  const statusHandler = async (e, orderId) => {

    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:e.target.value}, {headers: {token}})

      if (response.data.success) {
        await fetchAllOrders()
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
        console.log(error);
        toast.error(error.message)   
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      <div className='mb-2 inline-flex gap-3 items-center'>
        <h3 className='font-semibold text-amber-700'>Order Page</h3>
        <hr className='w-8 h-1 rounded-md bg-amber-700'/>
      </div>

      <div>
        {
          loading ? (skeletonLoader()) : (orders.map((order, index) => (
            <div className={'grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 rounded-sm border-gray-200 p-5 md:p-8 shadow-inner my-3 md:my-4 text-xs sm:text-sm text-gray-700'} key={index}>
              <img className='w-12 border-amber-400 border rounded-sm' src={assets.parcel_icon} alt="" />
              <div>
                <div>
                {
                  order.items.map((item, index) => {
                    if (index === order.items.length - 1 ) {
                      return (
                        <p className='p-0.5' key={index}>
                          {item.name} x {item.quantity} <span> {item.size} </span>
                        </p>
                      )
                  } 
                    else {
                      return (
                        <p className='p-0.5' key={index}>
                          {item.name} x {item.quantity} <span> {item.size}, </span>
                        </p>
                      )
                    }
                  })
                }
              </div>

              <p className='mt-3 mb-2 font-medium'>
                {order.address.firstName + " " + order.address.lastName}
              </p>

              <div>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.province + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>

              <p>{order.address.phone}</p>
            </div>

            <div>
              <p className='tetx-sm sm:text-[15px]'>Items : {order.items.length}</p>
              <p className='mt-3'>Method : {order.paymentMethod}</p>
              <p>Payment : { order.payment ? 'Done' : "Pending" }</p>
              <p>Date : {new Date(order.date).toDateString()}</p>
            </div>

            <p className='text-sm sm:text-[15px] text-amber-600 font-semibold'>{currency}{order.amount}</p>

            <select onChange={(e) => statusHandler(e, order._id)} value={order.status} className='p-2 font-semibold'>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>            
          )))
          
        }
      </div>
    </div>
  )
}

export default Orders