import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {cartQuantity, cart} = useContext(CartContext)

    return(
        <div>
        <AddShoppingCartIcon />
        <span>{!cart.length ? '' : cartQuantity()}</span>
        </div>
    );
}

export default CartWidget;