import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import {data} from '../../mocks/MockData';
import { useParams } from 'react-router-dom';
import { collection, getDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase/firebase';


export default function ItemDetailContainer() {

    const [productDetail, setProductDetail]= useState({});
    const [loading, setLoading]= useState(true);
    const{id}=useParams();

    // ESTE ERA EL QUE USABA CON MOCK
    /*useEffect(()=>{
        data
        .then((res)=> setProductDetail(res.find((item)=> item.id === id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[id])*/

    // ESTE ES EL QUE USO CON FIREBASE
    useEffect(()=>{
        const coleccionProductos = collection(db, "products");
        const referenciaDoc = doc(coleccionProductos, id);
        getDoc(referenciaDoc)
        .then((result) => {
            setProductDetail({
                id: result.id,
                ...result.data()
            })
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    return (
    <div>
        {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
    )
}
