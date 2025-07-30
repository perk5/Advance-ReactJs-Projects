

import {DeliveryDate} from './DeliveryDate'

export function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
    return (
        <div className="delivery-options">
            <DeliveryDate loadCart={loadCart} deliveryOptions={deliveryOptions} cartItem={cartItem}/>
        </div>
    )
}