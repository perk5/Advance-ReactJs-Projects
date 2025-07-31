import { formatMoney } from '../../utils/money.js'
import axios from 'axios'
import { useState } from 'react'

export function CartItemDetails({ cartItem, loadCart }) {
   
    const [updateQuantity, setUpdateQuantity] = useState(false)
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const updateCart = async () => {

        if (updateQuantity) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity
            })
           
            await loadCart()
            setUpdateQuantity(false)
        } else {
            setUpdateQuantity(true)
        }
    }

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)

        await loadCart()
    }

    const insertQuantity = (event) => {
        setQuantity(Number(event.target.value))
    }

    const enter = async (event) => {
        if(event.key === 'Enter'){
            updateCart()
        }else if (event.key === 'Escape'){
            setQuantity(cartItem.quantity)
            setUpdateQuantity(false)
        }
    }
    

    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    ${formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        {updateQuantity && <input onKeyDown={enter} onChange={insertQuantity} value={quantity} className='quantity-input' type="text" />}
                        Quantity{!updateQuantity && <span className="quantity-label">: {cartItem.quantity}</span>}
                    </span>
                    <span onClick={updateCart} className="update-quantity-link link-primary">
                        Update
                    </span>
                    <span onClick={deleteCartItem} className="delete-quantity-link link-primary">
                        Delete
                    </span>
                </div>
            </div>
        </>
    )
}