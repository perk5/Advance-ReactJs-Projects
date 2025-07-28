import { Routes, Route } from 'react-router'
import { Checkout } from './pages/Checkout/CheckoutPage'
import { HomePage } from './pages/home/HomePage'
import { Orders } from './pages/orders/OrdersPage'
import { Tracking } from './pages/TrackingPage'
import { PageNotFound } from './pages/PageNotFound'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [cart, setCart] = useState([])

  useEffect(() => {

    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }
    fetchAppData()
  }, [])
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<Checkout cart={cart} />} />
      <Route path="orders" element={<Orders cart={cart} />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
