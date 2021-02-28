import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "productName">
                <h3>{name}</h3>
                <br/>
                <p><small>by: {seller} </small></p>
                <br/>
                <p>${price}</p>
                <p><small>Only <span className = "stockNumber">{stock}</span> Left In The Stock</small></p>

                <button
                className = "cartBtn"
                onClick={() => 
                props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                
            </div>
        </div>
    );
};

export default product;