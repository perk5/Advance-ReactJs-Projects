import dayjs from 'dayjs'
import axios from 'axios'
import { formatMoney } from '../../utils/money.js'

export function DeliveryDate({ deliveryOptions, cartItem, loadCart }) {


    return (
        <>
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((options) => {

                const updateDeliveryOptions = async() => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: options.id
                    })

                    await loadCart()
                }
                return (
                    <div key={options.id} className="delivery-option" 
                    onClick={updateDeliveryOptions}>
                        <input type="radio" checked={options.id === cartItem.deliveryOptionId}
                            className="delivery-option-input" onChange={ () => {} }
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(options.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {options.priceCents === 0 ? 
                                "Free Shipping" : 
                                `$${formatMoney(options.priceCents)} - Shipping`}
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    )
}