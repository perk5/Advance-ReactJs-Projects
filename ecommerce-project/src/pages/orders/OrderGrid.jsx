import { OrderHeader } from './OrderHeader'
import { OrderGridDetails } from './OrderGridDetails'

export function OrderGrid({ orders, loadCart }) {
    console.log(orders)
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return <div key={order.id} className="order-container">
                    <OrderHeader order={order}/>
                    {order.products.map((product) => {
                        return (
                            <OrderGridDetails loadCart={loadCart} order={order} key={product.productId} product={product}/>
                        )
                    })}
                </div>
            })}
        </div>
    )
}