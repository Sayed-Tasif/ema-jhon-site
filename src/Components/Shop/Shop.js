import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Products/Product';
import Cart from '../Cart/cart';
import './Shop.css';
const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) =>{

        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shopContainer">
            <div className="productContainer">
                    {
                        products.map(product => <Product
                            handleAddProduct = {handleAddProduct}
                            product = {product}></Product>)
                    }
            </div>
            <div className="cartContainer">
                <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;