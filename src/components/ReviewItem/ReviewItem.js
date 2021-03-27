import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom : '1px solid lightGray',
        marginBottom: '5px',
        paddingBottom: '4px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4 className="product-name">Product Name : {name}</h4>
            <p>Quantity: {quantity}</p>
            <small>Price: {price}</small>
            <br/>
            <button 
            className="main-button"
            onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;