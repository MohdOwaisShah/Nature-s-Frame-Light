//display products using json data
import React, { createContext, useState } from 'react'
import './products.css'
import productData from '../../../../json-data/productData.json';
import Heading from '../../UI-elments/Heading'
//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// localStorage.setItem('products', JSON.stringify(pInfo))


const Products = () => {
  const [productInfo, setProductInfo] = useState()  

  //toasted notification function
  const notify = () => {
    toast.success("Product added to cart");
  };


  // Add product data into local storage and handle adding to cart
  const handleAddToCartBtn = (productId, productName, productImgPath, productRealPrice, productCutPrice, productQuantity) => {


    notify()

    // Check if product already exists in the cart
    const existingProduct = productInfo.find(product => product.id === productId)

    if (existingProduct) {
      // If product exists, update its quantity
      const updatedProducts = productInfo.map(product =>
        product.id === productId ? { ...product, pQuantity: product.pQuantity + 1 } // Increment quantity by 1
          : product
      )
      setProductInfo(updatedProducts)

      // Update local storage with the new product quantity
      localStorage.setItem('products', JSON.stringify(updatedProducts))

    } else {
      // If product doesn't exist, add it to the cart
      const newProduct = {
        'id': productId,
        'pName': productName,
        'pImage': productImgPath,
        'pRealPrice': productRealPrice,
        'pCutPrice': productCutPrice,
        'pQuantity': productQuantity
      }

      const updatedProductInfo = [...productInfo, newProduct]
      setProductInfo(updatedProductInfo)

      // Add new product to local storage
      localStorage.setItem('products', JSON.stringify(updatedProductInfo))
    }
  }


  return (
    <div className="sec-2-container">
      {/* toastify popup container */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />

      <Heading text={"Products"} />
      <div className="product-container">
        {
          productData.map((product) => {
            return <div className="product" key={product.id}>
              <img src={product.image} alt="" />
              <h3 className="product-title">{product.title}</h3>
              <div className="prices">
                <p className="real-price">₹{product.realPrice}</p>
                <p className="cut-price">₹{product.cutPrice}</p>
              </div>
              <div className="product-btn">
                <button className="add-to-cart-btn" onClick={() => handleAddToCartBtn(product.id, product.title, product.image, product.realPrice, product.cutPrice, product.quantity)}>Add To Cart</button>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>

          })
        }

      </div>

    </div>
  )
}

export default Products