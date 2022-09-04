import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';


export default function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        let promesaProductos = new Promise((res, rej) => {
        setTimeout(() => {
        res([
                {id: 1, nombre: "Pase ski un día", valor : 1000},
                {id: 2, nombre: "Pase ski dos días", valor : 1900},
                {id: 3, nombre: "Pase ski cuatro días", valor : 3700},
                {id: 4, nombre: "Pase ski siete días", valor : 6000}
            ]      
        );
        }, 2000);
    });

    promesaProductos
        .then((res) => {
        setProductos(res);
        })
        .catch((err) => {
        setError(err);
        })
        .finally(() => {
        setLoading(false);
        });
    }, []);

    return (
    <div>
        <ItemList productos={productos} loading={loading} error={error}/>
    </div>
    );
}