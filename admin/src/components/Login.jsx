import React from "react";
import { useState } from "react";
import {backendUrl, skeletonLoader} from '../App'
import axios from "axios";
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {

    try {
      setLoading(true)

      e.preventDefault()

      const response = await axios.post(backendUrl + '/api/user/admin', {email, password})

      if (response.data.success) {
        setToken(response.data.token)
      } else{
          toast.error(response.data.message)
      }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    loading ? (skeletonLoader()) : (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md border-2 border-amber-700">
        <h1 className="text-2xl font-bold mb-4 text-amber-800">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@gmail.com"
              required
              className="rounded-md w-full px-3 outline-amber-700 py-2 border border-gray-300"
            />
          </div>

          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-md w-full px-3 outline-amber-700 py-2 border border-gray-300"
            />
          </div>

          <button type="submit" className="mt-2 w-full bg-gray-800 text-white py-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  ))
};

export default Login;
