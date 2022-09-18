import { Button } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';

export default function Cart({}) {

    const {cart, cartTotal, clear} = useContext(CartContext)
    const navegar = useNavigate();

    return (
    <div>
        {
            !cart.length 
            ?<div>
                <h2>Tu carrito esta vacio!</h2>
                <h4>Te invitamos a ver nuestros productos</h4>
                <Button 
                style={{
                    marginBottom: '.5rem',
                }}
                variant="contained" 
                color="success"
                onClick={() => navegar('/')}> 
                Ir a comprar
                </Button>
            </div>
            :<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h2>Tu carrito</h2>
                <div style={{width:'80%', display:'flex', justifyContent:'space-between', alignItems:'center' , margin:'.5rem'}}>
                    <span style={{width: '25%'}}></span>
                    <span><b>Nombre de producto</b></span>
                    <span><b>Cantidad</b></span>
                    <span><b>Precio</b></span>
                    <span></span>
                </div>
                {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
                <span><b>Total a pagar : ${cartTotal()}</b></span>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2rem'}}>
                <Button
                    style={{margin:'1rem'}}
                    variant="contained" 
                    color="error"
                    onClick={clear}> 
                Vaciar carrito
                </Button>
                <Button 
                    style={{margin:'1rem'}}
                    variant="contained" 
                    color="success"> 
                Terminar compra
                </Button>
                </div>
            </div>
        }
    </div>   
    );
}