import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const shopContextProvider = (props) => {

  const currency = 'Lkr';
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({})
  const [loading, setLoading] = useState(false) 
  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [token, setToken] = useState('')

  const addToCart = async (itemId, size) => {

    if (!size) {
      toast.error('Select Product size')
      return
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData)

    if (token) {
      try {

        const response = await axios.post(backendUrl + '/api/cart/add', {itemId, size}, {headers: {token}})

        if (response.data.success) {
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
          console.log(error);
          toast.error(error.message)
      }
    }
  }


  const getCartCount = () =>{
    let totalCount = 0;

    for (const items in cartItems) {
      for(const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
            console.log(error);
        }
      }
    }

    return totalCount;
  }


  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData)

    if (token) {
      try {

        const response = await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers: {token}})

        if (!response.data.success) {
          toast.error(response.data.message)
        }

      } catch (error) {
          console.log(error);
          toast.error(error.message)
      }
    }
  }


  const getCartAmount = () => {
    let totalAmount = 0;

    for(const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      if (!itemInfo) continue;

      for(const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
      }
    }

    return totalAmount;
  }


  const getProductsData = async () => {

    try {

      setLoading(true)

      const response = await axios.get(backendUrl + '/api/product/list')

      if (response.data.success) {
        setProducts(response.data.products)
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


  const getUserCart = async ( token ) => {

    try {
      const response = await axios.post(backendUrl + '/api/cart/get', {}, {headers: {token}})

      if (response.data.success) {
        setCartItems(response.data.cartData)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  useEffect(() =>{
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'))
    }
  }, [])


  // Skeleton Loader Component
  const skeletonLoader = () => (
    <div className="inset-0 flex justify-center items-center bg-white/70 z-50 min-h-[320px]">
      <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 border-4 border-amber-600 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute w-12 h-12 border-4 border-amber-300 rounded-full border-b-transparent animate-spin [animation-duration:1.5s] left-2 top-2"></div>
      </div>
    </div>
  );

  const value = {
    products, currency,
    backendUrl, delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems, setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate, 
    token, setToken,
    loading, setLoading, skeletonLoader
  }

  
  return(
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default shopContextProvider;