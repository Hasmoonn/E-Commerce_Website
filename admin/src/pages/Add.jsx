import React, { useState } from 'react'
import {assets} from '../assets/admin_assets/assets.js'
import { backendUrl, skeletonLoader } from '../App.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'


const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {

    try {

      e.preventDefault();

      const formData = new FormData()
      
      formData.append('name', name)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('category', category)
      formData.append('subCategory', subCategory)
      formData.append('bestseller', bestseller)
      formData.append('sizes', JSON.stringify(sizes))

      image1 && formData.append('image1', image1)
      image2 && formData.append('image2', image2)
      image3 && formData.append('image3', image3)
      image4 && formData.append('image4', image4)

      setLoading(true)

      const response = await axios.post(backendUrl + '/api/product/add', formData, {headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
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

  return (
    loading ? (skeletonLoader()) : (
    <form onSubmit={onSubmitHandler} className='flex w-full flex-col gap-3 items-start'>
      <div>

        <div className='mb-4 inline-flex gap-3 items-center'>
          <h3 className='font-semibold text-amber-700'>Add Product</h3>
          <hr className='w-8 h-1 rounded-md bg-amber-700'/>
        </div>

        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])}  type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])}  type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])}  type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>

        <input className='w-full max-w-[500px] py-2 px-3' type="text" placeholder='Type here..' onChange={(e) => setName(e.target.value)} value={name} required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>

        <textarea className='w-full max-w-[500px] py-2 px-3' type="text" placeholder='Write content here..' onChange={(e) => setDescription(e.target.value)} value={description} required />
      </div>

      <div className='flex flex-col sm:flex-row w-full gap-2 sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>

          <select className='w-full py-2 px-3' onChange={(e) => setCategory(e.target.value)} >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product subcategory</p>

          <select className='w-full py-2 px-3' onChange={(e) => setSubCategory(e.target.value)} >
            <option value="Topwear">Top Wear</option>
            <option value="Bottomwear">Bottom Wear</option>
            <option value="Winterwear">Winter Wear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>

          <input className='w-full px-3 py-2 sm:w-[140px]' type="Number" placeholder='25' onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>

        <div className='flex gap-3 text-xs sm:text-base'>
          <div onClick={() => setSizes(prev => prev.includes('S') ? prev.filter(item => item !== "S") : [...prev, 'S'])}>
            <p className={`${ sizes.includes('S') ? 'bg-amber-400' : 'bg-slate-200' } px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes('M') ? prev.filter(item => item !== "M") : [...prev, 'M'])}>
            <p className={`${ sizes.includes('M') ? 'bg-amber-400' : 'bg-slate-200' } px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes('L') ? prev.filter(item => item !== "L") : [...prev, 'L'])}>
            <p className={`${ sizes.includes('L') ? 'bg-amber-400' : 'bg-slate-200' } px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== "XL") : [...prev, 'XL'])}>
            <p className={`${ sizes.includes('XL') ? 'bg-amber-400' : 'bg-slate-200' } px-3 py-1 cursor-pointer`}>XL</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes('XXL') ? prev.filter(item => item !== "XXL") : [...prev, 'XXL'])}>
            <p className={`${ sizes.includes('XXL') ? 'bg-amber-400' : 'bg-slate-200' } px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input type="checkbox" id="bestseller" onChange={() => setBestseller(prev => !prev)} checked={bestseller} />

        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-gray-700 hover:bg-gray-600 duration-300 transition text-white'>ADD</button>
    </form> )
  )
}

export default Add