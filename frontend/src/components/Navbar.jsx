import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets.js' 
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'


const Navbar = () => {

  const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext)

  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-28 sm:w-36' alt="" />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-4 sm:w-5 cursor-pointer' onClick={() => setShowSearch(!showSearch)} alt="" />

        <div className='group relative'>
          <Link to='/login'>
            <img src={assets.profile_icon} className='w-4 sm:w-5 cursor-pointer' alt="" />
          </Link>
          
          <div className='absolute hidden group-hover:block right-0 dropdown-menu pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md'>
              <p className='cursor-pointer hover:text-black'>My profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative' >
          <img src={assets.cart_icon} className='w-4 sm:w-5 min-w-4' alt="" />
          <p className='absolute right-[-5px] top-[-5px] w-4 text-center bg-black text-white leading-4 rounded-full aspect-square text-[8px]'>{getCartCount()}</p>
        </Link>

        <img src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" onClick={() => setVisible(true) } />
      </div>

      {/* side bar menu for small screen  */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={() => setVisible(false)}>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>Back</p>
          </div>

          <NavLink to='/' className='py-2 pl-6 border' onClick={()=> setVisible(false)}>
            HOME
          </NavLink>
          <NavLink className='py-2 pl-6 border' to='/collection' onClick={()=> setVisible(false)}>
            COLLECTION
          </NavLink>
          <NavLink to='/about' className='py-2 pl-6 border' onClick={()=> setVisible(false)}>
            ABOUT
          </NavLink>
          <NavLink to='/contact' className='py-2 pl-6 border' onClick={()=> setVisible(false)}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar