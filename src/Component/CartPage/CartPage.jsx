import React from 'react'
import './CartPage.css'

const CartPage = ({ isShow, setIsClick }) => {

    //handle close button
    const handleCloseCart = () => {
        setIsClick(!isShow)
        document.body.style.overflow = 'auto'
    }

    //cart navbar
    const CartNavbar = () => {
        return (
            <div className="cart-navbar">
                <li><i class="fa-solid fa-bag-shopping cart-icon"></i> CART</li>
                <i onClick={handleCloseCart} class="fa-solid fa-xmark cart-close-icon"></i>
            </div>
        )
    }

    //empty cart
    const EmptyCart = () => {
        return (
            <div className="empty-cart-container">
                <h2>Your cart is empty</h2>
                <a href="#PRODUCTS" onClick={handleCloseCart}><button>SHOP NOW</button></a>
            </div>
        )
    }

    //component of product cart (cart process container)
    const CartProcessContainer = () => {

        return (
            <div className="cart-process-container">

                <div className="gift-wrap-and-shipping-title--container">
                    <div className="gift-wrap-container">
                        <input type="checkbox" />
                        <h3 className='gift-wrap'>Gift Wrap: ₹50</h3>
                    </div>
                    <h3 className='free-shipping'>Shipping Is Free</h3>
                </div>

                <h3 className='cart-process-total-price'>Total: ₹2400</h3>
                <div className="cart-process-btn-container">
                    <button className='cart-process-btn'>PROCESS TO BUY</button>
                </div>

            </div>
        )
    }

    //product cart
    const productsDataFromLS = JSON.parse(localStorage.getItem('products')) || []
    const ProductCart = () => {

        // const handleIncrementBtn = (e, pId) => {
        //     let parent = e.target.parentNode
        //     let selectedId = Number(parent.parentNode.parentNode.id)
        //     console.log(pId, selectedId)
        //     if(pId === selectedId){
        //         productsDataFromLS.map((p) => {
        //             let newQuantity = p.pQuantity + 1
        //             return p.pQuantity = newQuantity
        //         })
        //     }
        // }


        return (
            <div className="cart-product-and-process-container">

                <div className="cart-product-container">

                    {
                        productsDataFromLS.map((product) => {
                            return <div className="cart-products" key={product.id}  id={product.id}>
                                <img src={product.pImage} alt="" />
                                <div className="cart-product-details">
                                    <h3>{product.pName}</h3>
                                    <div className="cart-product-prices">
                                        <h4>₹{product.pRealPrice} <span className='cart-product-cut-price'>₹{product.pCutPrice}</span></h4>
                                    </div>
                                    <div className="cart-product-increment-decrement">
                                        <i className='fa-solid fa-minus decrement' />
                                        <span className='cart-product-quantity'>{product.pQuantity}</span>
                                        <i className='fa-solid fa-plus increment' onClick={(e) => handleIncrementBtn(e, product.id)} />
                                    </div>
                                    <span className='cart-product-remove-btn'>remove</span>
                                </div>
                            </div>
                        })
                    }

                </div>

                <CartProcessContainer />
            </div>
        )
    }

    // hide scrollbar
    if (isShow) {
        document.body.style.overflow = 'hidden'
    }

    return (
        // <div className="color-background">
        <div className='cart-body'>
            <div className={`cart-container ${isShow ? 'show-container' : 'hide-container'}`}>
                <CartNavbar />
                {
                    //show product and empty component on cart 
                    productsDataFromLS.length === 0 ? <EmptyCart /> : <ProductCart />
                }
            </div>
            <div onClick={handleCloseCart} className={`color-background ${isShow ? 'show-background' : 'hide-background'}`}></div>
        </div>
        /* </div> */
    )
}

export default CartPage