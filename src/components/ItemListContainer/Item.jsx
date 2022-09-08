import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Item({product}) {

    const {id, img, nombre, descripcion, precio, stock}= product;
    const navegar = useNavigate();

    return (
    <>
    <div style={{width:'20rem', margin:'.5rem'}}>
        <img src={img} className="cardImg" alt={nombre}/>
        <div>
            <p><b>{nombre}</b></p>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <p>stock: {stock}</p>
        </div>
        <button className='btn' onClick={()=>navegar(`/product/${id}`)}>Ver más</button>
    </div>
    </>    
    );
}