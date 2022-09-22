import React, { useState, useEffect } from 'react';
//import {data} from '../../mocks/MockData';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

export default function ItemListContainer() {

    const [loading, setLoading] = useState(false);
    const [productList, setProductList]=useState([]);
    const{categoryId}= useParams();

    // ESTE ERA EL QUE USABA CON MOCK
    /*useEffect(()=>{
        setLoading(true)
            data
            .then((res)=>{
                if(categoryId){
                setProductList(res.filter((item)=> item.categoria === categoryId));
                }else{
                setProductList(res);
                }
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
        }, [categoryId])*/

    // ESTE ES EL QUE USO CON FIREBASE
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
            {loading ? <p>Cargando...</p>:<ItemList productList={productList}/>}
        </div>
    );
}