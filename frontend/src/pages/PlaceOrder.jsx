import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from "../components/CartTotal";
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {

  const { products, backendUrl, delivery_fee, cartItems, setCartItems, getCartAmount, navigate, token, loading, setLoading, skeletonLoader } = useContext(ShopContext);

  const [method, setMethod] = useState('cod');

  const [ formData, setFormData ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    province: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(data => ({...data,[name]:value }))
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true)
      
      let orderItems = []

      for(const items in cartItems){
        for(const item in cartItems[items]) {

          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))

            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]

              orderItems.push(itemInfo)
            }
          }
        }
      }

      console.log(orderItems);
      

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {

        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers: {token}})

          // console.log(response);
          
          if (response.data.success) {
            toast.success(response.data.message)
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {headers: {token}})

          // console.log(response);
          
          if (responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }

          break;

        default: 
          break;
      }
      

    } catch (error) {
        console.log(error);
        toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }

  return ( loading ? (skeletonLoader()) : (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} /> 
        </div>

        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
          <input onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
        </div>

        <input onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />

        <input onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />

        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
          <input onChange={onChangeHandler} name='province' value={formData.province} type="text" placeholder='Province' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
        </div>

        <div className='flex gap-3'>
          <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="number" placeholder='Postal code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
          <input onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
        </div>

        <input onChange={onChangeHandler} name='phone' value={formData.phone} type="number" placeholder='Phone No' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required />
      </div>

      {/* right side  */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* -------- Payment method selection --------------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={() => setMethod('stripe')}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400': ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer' onClick={() => setMethod('cod')}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400': ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form> )
  )
}

export default PlaceOrder