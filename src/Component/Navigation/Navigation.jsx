import { useState } from "react"
import "./Navigation.css"
import CartPage from "../CartPage/CartPage"



const Navigation = () => {
    const [isClick, setIsClick] = useState(false)
    const productsDataFromL = JSON.parse(localStorage.getItem('products')) || []

    return(
        // navigation
        <>
        <nav>
            <ul className="navigation-container">
                <li className="nav-logo"><a href="#HOME">Nature’s<span className="red-color"> Light </span>Frames </a></li> {/*logo*/}
                <ul className="right-navigation">
                    <li><a href="#PRODUCTS">SHOP</a></li>
                    <li><a href="#FAQ">FAQ</a></li>
                    <li><a href="#CONTACT">CONTACT</a></li>
                    <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                    <li onClick={() => {setIsClick(!isClick)} }><i class="fa-solid fa-bag-shopping"><span className="cart-icon-number">{productsDataFromL.length}</span></i></li>
                </ul>
            </ul>
        </nav>
        {<CartPage isShow={isClick ? true : false} setIsClick={setIsClick}/>}
        </>
    )
}

export default Navigation