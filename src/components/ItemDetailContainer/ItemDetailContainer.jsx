import React, { useState, useEffect } from 'react';
import ItemDetailList from './ItemDetailList';


export default function ItemDetailContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout (() => {
            fetch('https://fakestoreapi.com/products?limit=10')
            .then((res) => res.json())
            .then((json) => {
                setProductos(json);
            })
            .catch((e) => console.log(e))
            .finally(() => console.log('lo ultimo que hago'));
        }, []);  
        },2000)


    return (
    <ItemDetailList productos={productos} />
    )
}
