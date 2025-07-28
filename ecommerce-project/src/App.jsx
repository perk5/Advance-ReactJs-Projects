import { Routes, Route } from 'react-router'
import { Checkout } from './pages/Checkout/CheckoutPage'
import { HomePage } from './pages/HomePage'
import { Orders } from './pages/OrdersPage'
import { Tracking } from './pages/TrackingPage'
import { PageNotFound } from './pages/PageNotFound'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
    .then((respose) => {
      setCart(respose.data)
    })
  }, [])
  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<Checkout cart={cart} />} />
      <Route path="orders" element={<Orders />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
