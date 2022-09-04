import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailList ({productos}) {
    
    return (
        <>
            {productos.map((prod) => (
                <ItemDetail prod={prod} />
            ))}
        </>
    );
}