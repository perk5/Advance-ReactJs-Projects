import { Header } from "../components/Header";
import '../components/Header.css'
import './TrackingPage.css'
import { NavLink } from "react-router";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import dayjs from 'dayjs'



export function Tracking({ cart }) {

    const params = useParams()
    const { orderId, productId } = params

    const [order, setOrder] = useState(null)

    useEffect(() => {
        const GetSpecificProduct = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data)
        }

        GetSpecificProduct()
    }, [orderId])


    if (!order) {
        return null
    } else {
        return (
            <>
                <title>Tracking</title>
                <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
                <Header cart={cart} />

                <div className="tracking-page">
                    <div className="order-tracking">
                        <NavLink className="back-to-orders-link link-primary" to="/orders">
                            View all orders
                        </NavLink>

                        {order.products.map((productArray) => {

                            
                            if (productArray.productId === productId) {

                             let totalDeliveryTimeMs = productArray.estimatedDeliveryTimeMs - order.orderTimeMs

                             let timePassedMs = dayjs().valueOf() - order.orderTimeMs

                            let deliveryPercentage = (timePassedMs / totalDeliveryTimeMs) * 100
                            

                            if(deliveryPercentage > 100){
                                deliveryPercentage = 100
                            }

                                const isPreparing = deliveryPercentage < 33
                                const isShipping = deliveryPercentage >=33 && deliveryPercentage < 100
                                const isDeivered = deliveryPercentage === 100

                                return (
                                    <Fragment key={productArray.productId}>
                                        <div className="delivery-date">

                                            { deliveryPercentage >= 100 ? `Delivered on ` : `Arriving on `}
                                            {dayjs(productArray.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                        </div>

                                        <div className="product-info">
                                            {productArray.product.name}
                                        </div>

                                        <div className="product-info">
                                            Quantity: {productArray.quantity}
                                        </div>

                                        <img className="product-image" src={productArray.product.image} />

                                        
                                        <div className="progress-labels-container">
                                            <div className={`progress-label ${isPreparing && `current-status`}  `} >
                                                Preparing
                                            </div>
                                            <div className={`progress-label ${isShipping && `current-status`}  `}>
                                                Shipped
                                            </div>
                                            <div className={`progress-label ${isDeivered && `current-status`}  `}>
                                                Delivered
                                            </div>
                                        </div>

                                        <div className="progress-bar-container">
                                            <div style={{width:`${deliveryPercentage}%`}} className="progress-bar"></div>
                                        </div>
                                    </Fragment>
                                )
                            }
                        })}


                    </div>
                </div>
            </>
        )
    }
}