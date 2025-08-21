import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  const {token, setToken, backendUrl, navigate, loading, setLoading, skeletonLoader} = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      // sign up api 
      if (currentState === 'Sign Up') {
        
        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})

        console.log(response.data);
        

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
        
      } else {
        // login api 
        const response = await axios.post(backendUrl + '/api/user/login', {email, password})

        console.log(response.data);

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
      loading ? (skeletonLoader()) : (<form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 to-gray-800 border-2 border-amber-700 rounded-md p-6'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <hr className='border-none h-[1.5px] w-8 bg-amber-700' />
        <p className='prata-regular text-3xl'>{currentState}</p>
      </div>

      {
        currentState === "Sign Up" ?
        <input type="text" className='w-full px-3 outline-amber-700 py-2 border border-gray-800' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/> : ""
      }

      <input type="email" className='w-full px-3 outline-amber-700 py-2 border border-gray-800' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>

      <input type="password" className='w-full px-3 outline-amber-700 py-2 border border-gray-800' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === "Login" ?
            <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>
              Create account
            </p> :
            <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>
              Login here
            </p>
        }
      </div>

      <button className='bg-gray-800 w-full text-white font-light px-8 py-2 mt-4'>
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form> )
  )
}

export default Login