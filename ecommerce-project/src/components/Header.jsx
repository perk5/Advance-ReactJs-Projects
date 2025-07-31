import { NavLink, useNavigate, useSearchParams } from 'react-router'
import logoWhite from '../assets/images/logo-white.png'
import mobileLogoWhite from '../assets/images/mobile-logo-white.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import CartIcon from '../assets/images/icons/cart-icon.png'
import './Header.css'
import { useState } from 'react'


export function Header({ cart }) {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams();

    const searchText = searchParams.get('search');

    const [search, setSearch] = useState(searchText || '')



    const updateSearchInput = (event) => {
        setSearch(event.target.value);
    };

    const searchProducts = () => {
        navigate(`/?search=${search}`)
    };



    let totalQuantity = 0
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity
    })


    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src={logoWhite} />
                        <img className="mobile-logo"
                            src={mobileLogoWhite} />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input onChange={updateSearchInput} value={search} className="search-bar" type="text" placeholder="Search" />

                    <button onClick={searchProducts} className="search-button">
                        <img className="search-icon" src={SearchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={CartIcon} />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}