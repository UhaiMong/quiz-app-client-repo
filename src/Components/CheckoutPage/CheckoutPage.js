import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutPage = ({props}) => {
    const tutorials = useLoaderData();
    console.log(props);
    return (
        <div>
            <h2>Checkout your choice.</h2>
        </div>
    );
};

export default CheckoutPage;