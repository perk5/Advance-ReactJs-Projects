import axios from 'axios'
import { useState, useEffect } from 'react'
import './CheckoutPage.css'
import { CheckoutHeader } from './CheckoutHeader'
import { PaymentSummary } from './PaymentSummary'

import { OrderSummary } from './OrderSummary'

export function Checkout({ cart, loadCart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)

    useEffect(() => {

        const fetchCheckOutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)

            response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data)
        }

        fetchCheckOutData()

    }, [cart])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
            <CheckoutHeader cart={cart} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary loadCart={loadCart} deliveryOptions={deliveryOptions} cart={cart} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}