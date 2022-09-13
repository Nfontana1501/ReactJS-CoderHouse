import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart({}) {

    const {cart} = useContext(CartContext)
    console.log('carrito', cart)

    return (
    <>
    <div style={{width:'20rem', margin:'.5rem'}}>
        <p>Cart</p>
    </div>
    </>    
    );
}