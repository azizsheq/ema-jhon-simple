import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    // using same props name product as declared in Shop.js
    // props sending objects named products 
    // then accessing their property by 
    // console.log(props.product.name)
    // destructuring the props.product and getting the values inside the img and name variables
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>
                    <small>${price}</small>
                </p>
                <p>
                    <small>Only {stock} left in stock - Order Soon</small>
                </p>
                <button 
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;