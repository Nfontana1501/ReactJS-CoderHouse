import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, getDoc, doc} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Watch } from  'react-loader-spinner';


export default function ItemDetailContainer() {

    const [productDetail, setProductDetail]= useState({});
    const [loading, setLoading]= useState(true);
    const{id}=useParams();

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
        {loading 
        ?<div style={{display: "flex", justifyContent: "center", marginTop: "2%"}}>
        <Watch height="80" width="80" radius="48"
        color="#424242"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
        </div>
        : <ItemDetail productDetail={productDetail}/>}
    </div>
    )
}
