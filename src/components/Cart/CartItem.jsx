import { Button } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItem({compra}) {

    const {removeItem} = useContext(CartContext)

    return (
    <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center' , margin:'.5rem'}}>
        <img src={compra.img} alt={compra.name} style={{width: '25%'}} />
        <span>{compra.nombre}</span>
        <span>{compra.qty}</span>
        <span>{compra.precio}</span>
        <Button
            variant="contained" 
            color="error"
            onClick={() => {
                removeItem(compra.id)
            }}> 
            X
        </Button>
    </div> 
    );
}