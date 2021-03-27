import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

// const Product = ({product, handleAddProduct}) => { // destructuring the props
const Product = (props) => {
    // console.log(props)
    // using same props name product as declared in Shop.js
    // props sending objects named products 
    // then accessing their property by 
    // console.log(props.product.name)
    // destructuring the props.product and getting the values inside the img and name variables
    // const { img, name, seller, price, stock, key } = props.product;

    const {product, handleAddProduct} = props;  // destructuring the props
    const { img, name, seller, price, stock, key } = product; 
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>
                    <small>${price}</small>
                </p>
                <p>
                    <small>Only {stock} left in stock - Order Soon</small>
                </p>

                {props.showAddToCart === true && <button 
                    className="main-button"
                    onClick={() => handleAddProduct(product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;