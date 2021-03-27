import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'
import fakeData from '../../fakeData'
import { useState, useEffect } from 'react'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
    // console.log(fakeData);
    // to get the first 10 data from the array of 81 data
    const first10Data = fakeData.slice(0,10);
    // console.log(first10Data);
    const [products, setProducts] = useState(first10Data);
    // creating an array products by using useState

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            // console.log(existingKey, savedCart[existingKey]);
            return product;
        })
        // console.log(previousCart);
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        // console.log('Product Added', product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key);
        // const count = sameProduct.length;

        addToDatabaseCart(product.key, count);
    }


    // to change document name
    document.title = "Shop";


    return (
        <div className="shop-container">
            <div className="product-container">
                
                {
                    products.length === 0 && <p>Loading . . .</p>
                }

                {
                    // here product is the props for the component Product 
                    // and pd is the variable to access the products array
                    products.map(pd => <Product 
                        key = {pd.key}
                        product={pd} handleAddProduct={handleAddProduct}
                        showAddToCart={true}
                        ></Product>)
                    
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className="main-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;