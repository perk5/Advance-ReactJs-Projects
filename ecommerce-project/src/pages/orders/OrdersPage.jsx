import axios from 'axios'
import { useState, useEffect } from 'react'
import './OrdersPage.css'
import { Header } from '../../components/Header.jsx'
import {OrderGrid} from './OrderGrid'



export function Orders({ cart, loadCart }) {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrdersData = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data)
        }
        fetchOrdersData()
    }, [])
    
    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
            <Header cart={cart} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrderGrid loadCart={loadCart} orders={orders}/>
            </div>
        </>
    )
}