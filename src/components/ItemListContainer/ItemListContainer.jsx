import React, { useState, useEffect } from 'react';
import {data} from '../Mocks/MockData'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [loading, setLoading] = useState(false);
    const [productList, setProductList]=useState([]);
    const{categoryId}= useParams();

    useEffect(()=>{
        setLoading(true)
            data
            .then((res)=>{
                if(categoryId){
                setProductList(res.filter((item)=> item.categoria === categoryId))
                }else{
                setProductList(res)
                }
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
        }, [categoryId])

    return (
        <div style={{padding:'3rem'}}>
            {loading ? <p>Cargando...</p>:<ItemList productList={productList}/>}
        </div>
    )
}