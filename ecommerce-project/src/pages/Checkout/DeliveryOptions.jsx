import dayjs from 'dayjs'
import { formatMoney } from '../../utils/money.js'

export function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((options) => {
                return (
                    <div key={options.id} className="delivery-option">
                        <input type="radio" checked={options.id === cartItem.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(options.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                                {options.priceCents === 0 ? "Free Shipping" : `$${formatMoney(options.priceCents)} - Shipping`}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}