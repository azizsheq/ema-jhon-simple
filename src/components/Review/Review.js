import React, {useEffect, useState} from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart]= useState([]);

    const [orderPlaced, setOrderPlaced] = useState(false);

    const history = useHistory();

    const handleProceedCheckout = () => {
        history.push('/shipment');
    }

    const removeProduct = (productKey) => {
        // console.log("Remove Clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // console.log(productKeys);
        // const counts = productKeys.map(key => savedCart[key]);
        // console.log(counts);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd  => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        key={pd.key}
                        removeProduct = {removeProduct}
                        product={pd}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
        <div className="cart-container">
            <Cart cart={cart}>
                <button 
                className="main-button"
                onClick={handleProceedCheckout}
                >Proceed Checkout</button>
            </Cart>
        </div>
    </div>
    );
};

export default Review;