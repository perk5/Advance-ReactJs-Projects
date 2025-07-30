

import {DeliveryDate} from './DeliveryDate'

export function DeliveryOptions({ deliveryOptions, cartItem }) {
    return (
        <div className="delivery-options">
            <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem}/>
        </div>
    )
}