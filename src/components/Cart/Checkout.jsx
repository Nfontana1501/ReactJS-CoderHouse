import * as React from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Checkout () {

    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const [mensaje, setMensaje]=useState(false)
    const [loader, setLoader] = useState(false)
    const {cart, cartTotal, clear}= useContext(CartContext)
    const navigate = useNavigate()

    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
            [e.target.name]:e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
            setMensaje(true)
        }else{
            setMensaje(false)
            setLoader(true)
            const ventas = collection(db,"orders")
        addDoc(ventas, {
            comprador,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
        }
        
    }

    if(loader){
        return <p>Loading...</p>
    }

    return (
    <div>
        {!orderId 
        ?<div>
        <h2>Checkout</h2>
        <h4>Por favor complete todos los campos</h4>
        <form style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}} onSubmit={finalizarCompra}>
            <div>
                <label  className="form-label">Nombre Completo</label>
                <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
            </div>
            <div>
                <label  className="form-label">Numero de telefono</label>
                <input className="form-control"  type="number" placeholder='1122222222' name="phone"  onChange={datosComprador} />
            </div>
            <div>
                <label  className="form-label">E-mail</label>
                <input className="form-control" type="email" placeholder='example@example.com' name="email"  onChange={datosComprador}/>
            </div>
            <Button 
                style={{margin:'1rem'}}
                variant="contained" 
                color="success"
                type = "submit"> 
                Terminar compra
            </Button>
            {mensaje && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
        </form>
        </div>
        :
        <div>
        <h2>Muchas gracias por su compra!</h2>
        <h4>Su orden es: {orderId}</h4>
        <Button 
            style={{margin:'1rem'}}
            variant="outlined" 
            color="success"
            onClick={()=> navigate('/')}> 
            Volver
        </Button>
        </div>}
    </div>
    );
}