import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Item({product}) {

    const {id, img, nombre, descripcion, precio, stock}= product
    const navegar = useNavigate()

    return (
    <>

    <div className="" style={{width:'20rem', margin:'.5rem'}}>
        <img src={img} className="cardImg" alt={nombre}/>
        <div className="">
            <p className="">{nombre}</p>
            <p className="">{descripcion}</p>
            <p className="">${precio}</p>
            <p className="">stock: {stock}</p>
        </div>
        <button className='btn' onClick={()=>navegar(`/product/${id}`)}>Ver más</button>
    </div>


    </>


    
    );
}