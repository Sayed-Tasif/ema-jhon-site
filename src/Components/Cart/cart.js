import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    console.log(cart)

    // const totalPrice = cart.reduce((total, pd) => total + pd.price, 0);
    let totalPrice = 0;
    for (let i =0; i < cart.length; i++){
        const product = cart[i];
        totalPrice = (totalPrice + product.price);
    }

    let shipping = 12.99;
    if(totalPrice > 35 || totalPrice == 0){
        shipping = 0;
    }

    else if (totalPrice > 15){
        shipping = 4.99;
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p>totalPrice: ${totalPrice + shipping}</p>

        </div>
    );
};

export default cart;