import {Routes, Route} from 'react-router'
import { Checkout } from './pages/CheckoutPage'
import { HomePage } from './pages/HomePage'
import { Orders } from './pages/OrdersPage'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<Orders />} />
    </Routes>
  )
}

export default App
