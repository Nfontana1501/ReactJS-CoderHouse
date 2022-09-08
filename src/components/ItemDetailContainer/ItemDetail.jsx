import React from 'react';
import ItemCount from '../Counter/ItemCount';

export default function ItemDetail ({productDetail}) {

    const {nombre, descripcion, precio, stock, img}= productDetail;

    function onAdd (text){
        alert(text)
    }
    
    return (
        <div className="productContainer">
            <h2>Detalle de: {nombre}</h2>
            <img src={img} alt={nombre} style={{width:"25rem"}}/>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}
