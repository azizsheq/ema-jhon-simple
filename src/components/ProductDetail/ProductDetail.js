import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    // using useParams to access url and to read from the url
    const {productKey} = useParams();

    // after getting the productKey from url then matching the data with the fakeData file
    // if matches then will be able to access it and get more details
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);

    return (
        <div>

            <h1>Your Product ({productKey}) Details -</h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;