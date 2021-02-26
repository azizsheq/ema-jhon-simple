import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import { useState } from 'react'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    // console.log(fakeData);
    // to get the first 10 data from the array of 81 data
    const first10Data = fakeData.slice(0,10);
    // console.log(first10Data);
    const [products, setProducts] = useState(first10Data);
    // creating an array products by using useState

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('Product Added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    // here product is the props for the component Product 
                    // and pd is the variable to access the products array
                    products.map(pd => <Product 
                        product={pd} handleAddProduct={handleAddProduct}
                        ></Product>)
                    
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;