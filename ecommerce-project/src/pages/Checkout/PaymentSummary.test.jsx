import { it, expect, describe, vi, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, useLocation } from 'react-router'
import axios from 'axios'
import { PaymentSummary } from './PaymentSummary'



vi.mock('axios')
describe('Testing Payment Summary', () => {


    let loadCart;
    let paymentSummary;
    let user;

    beforeEach(async () => {

        paymentSummary = {
            "totalItems": 0,
            "productCostCents": 0,
            "shippingCostCents": 0,
            "totalCostBeforeTaxCents": 0,
            "taxCents": 0,
            "totalCostCents": 0
        }

        loadCart = vi.fn()

        user = userEvent.setup()

    })

    it('Render Payment Summary', async () => {



        function Location() {
            const location = useLocation()
            return (
                <div data-testid="url-Path">{location.pathname}</div>
            )
        }

        render(
            <MemoryRouter>
                <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
                <Location />
            </MemoryRouter>
        )

        const paymentsummaryshippingCostCents = screen.getByTestId(`payment-summary-productCostCents`)

        expect(paymentsummaryshippingCostCents).toHaveTextContent('0')

        const orderPlaced = screen.getByTestId('place-order-button')

        await user.click(orderPlaced)

        expect(axios.post).toHaveBeenCalledWith('/api/orders')
        expect(loadCart).toHaveBeenCalled()
        expect(screen.getByTestId('url-Path')).toHaveTextContent('/orders')

    })
})