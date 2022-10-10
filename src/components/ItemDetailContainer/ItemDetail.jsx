import React from 'react';
import ItemCount from '../Counter/ItemCount';
import { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail ({productDetail}) {

    const [contador, setContador] = useState(1);
    const [compra, setCompra] = useState(false);
    const {nombre, descripcion, precio, stock, img, id}= productDetail;
    const navegar = useNavigate();
    const {addItem} = useContext(CartContext);

    function onAdd (){
        let purchase = {
            id,
            nombre,
            precio,
            stock,
            stockActualizado: stock - contador,
            img,
            qty: contador,
        }
        setCompra(true);
        addItem(purchase);
    }

    return (
        <div className="productContainer">
            <h2>Detalle de: {nombre}</h2>
            <img src={img} alt={nombre} style={{width:"20rem"}}/>
            <p>{descripcion}</p>
            <p>${precio}</p>
            {!compra ?
            <ItemCount stock={stock} initial={1} onAdd={onAdd} contador={contador} setContador={setContador}/> :
            <div>
                <Button 
                style={{
                    marginBottom: '.5rem',
                    marginRight: '.5rem',
                }}
                variant="contained" 
                color="secondary"
                onClick={()=>{navegar("/")}}> 
                Seguir comprando
                </Button>
                <Button 
                style={{
                    marginBottom: '.5rem',
                    marginRight: '.5rem',
                }}
                variant="contained" 
                color="secondary"
                onClick={()=>{navegar("/cart")}}> 
                Ir al carrito
                </Button>
            </div>
            }
        </div>
    );
}
