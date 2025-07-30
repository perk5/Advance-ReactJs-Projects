import { OrderHeader } from './OrderHeader'
import { OrderGridDetails } from './OrderGridDetails'

export function OrderGrid({ orders }) {
    console.log(orders)
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return <div key={order.id} className="order-container">
                    <OrderHeader order={order}/>
                    {order.products.map((product) => {
                        return (
                            <OrderGridDetails order={order} key={product.productId} product={product}/>
                        )
                    })}
                </div>
            })}
        </div>
    )
}