import {Routes, Route} from 'react-router'
import { Checkout } from './pages/Checkout/CheckoutPage'
import { HomePage } from './pages/HomePage'
import { Orders } from './pages/OrdersPage'
import { Tracking } from './pages/TrackingPage'
import { PageNotFound } from './pages/PageNotFound'  
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<Orders />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
