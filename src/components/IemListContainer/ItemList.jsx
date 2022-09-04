import React, { useState, useEffect } from 'react';
import Item from './Item';

export default function ItemList({productos, loading, error}) {
    
    return (
    <div>
        <p>Loading: {loading ? 'Loading...' : 'Render completed'}</p>
        <p>Error: {error ? error : 'No'}</p>
        {productos.map((producto) => (
            <Item id={producto.id} nombre={producto.nombre} valor={producto.valor} loading={loading} error={error}/>
            
        ))} 
    </div>
    );
}