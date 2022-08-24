import React from 'react'

const ItemListContainer = ({color, id, clText}) => {
    clText("Esto es un ItemListContainer");
    return (
        <>
        <h2 style={{color:color[0]}}>Este titulo es rojo y su id es {id[0]}</h2>
        <h2 style={{color:color[1]}}>Este titulo es azul y su id es {id[1]}</h2>
        <h2 style={{color:color[2]}}>Este titulo es verde y su id es {id[2]}</h2>
        </>
    )
}

export default ItemListContainer;

