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

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data)
  } 

  useEffect(() => {
    loadCart()
  }, [])


  return (
    <Routes>
      <Route index element={<HomePage loadCart={loadCart} cart={cart} />} />
      <Route path="checkout" element={<Checkout loadCart={loadCart} cart={cart} />} />
      <Route path="orders" element={<Orders loadCart={loadCart} cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
      <Route path="*" element={<PageNotFound cart={cart} />} />
    </Routes>
  )
}

export default App
