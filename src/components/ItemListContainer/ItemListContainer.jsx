import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Watch } from  'react-loader-spinner';

export default function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [productList, setProductList]=useState([]);
    const{categoryId}= useParams();

    useEffect(()=>{
        setLoading(true);
        const productos = categoryId ?query(collection(db, "products"), where("categoria", "==", categoryId)) : collection(db, "products")
        getDocs(productos)
        .then((result)=>{
            const lista = result.docs.map((producto) => {
                return {
                    id: producto.id,
                    ... producto.data()
                }
            })
            setProductList(lista);
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [categoryId])

    return (
        <div style={{padding:'3rem'}}>
            {loading 
            ? <div style={{display: "flex", justifyContent: "center", marginTop: "2%"}}>
            <Watch height="80" width="80" radius="48"
            color="#424242"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
            </div>
            :<ItemList productList={productList}/>}
        </div>
    );
}