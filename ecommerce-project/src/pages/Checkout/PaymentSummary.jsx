import { formatMoney } from '../../utils/money.js'
import { useNavigate } from 'react-router'
import axios from 'axios'

export function PaymentSummary({ paymentSummary, loadCart }) {
    const navigate = useNavigate()

    const createOrder = async () => {
        await axios.post(`/api/orders`)

        await loadCart()

        navigate('/orders')
    }

    return (
        <div className="payment-summary">
            <div className="payment-summary-title">
                Payment Summary
            </div>
            {paymentSummary &&
                (<>
                    <div  className="payment-summary-row">
                        <div>Items ({paymentSummary.totalItems}):</div>
                        <div data-testid="payment-summary-productCostCents" className="payment-summary-money">${formatMoney(paymentSummary.productCostCents)}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div data-testid="payment-summary-shippingCostCents" className="payment-summary-money">${formatMoney(paymentSummary.shippingCostCents)}</div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div data-testid="payment-summary-totalCostBeforeTaxCents" className="payment-summary-money">${formatMoney(paymentSummary.taxCents)}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div  data-testid="payment-summary-taxCents" className="payment-summary-money">${formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
                    </div>

                    <div className="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div data-testid="payment-summary-totalCostCents" className="payment-summary-money">${formatMoney(paymentSummary.totalCostCents)}</div>
                    </div>

                    <button data-testid="place-order-button" onClick={createOrder} className="place-order-button button-primary">
                        Place your order
                    </button>
                </>)
            }
        </div>
    )
}