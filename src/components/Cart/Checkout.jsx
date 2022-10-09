import * as React from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Watch } from  'react-loader-spinner';

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
        return  <div style={{display: "flex", justifyContent: "center", marginTop: "2%"}}>
            <Watch height="80" width="80" radius="48"
            color="#424242"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
            </div>
    }

    return (
    <div>
        {!orderId 
        ?<div>
            <div>
                <h2 style={{textAlign: "center"}}>Checkout</h2>
                <h4 style={{textAlign: "center"}}>Por favor complete todos los campos</h4>
            </div>
            <div className='mainContainer'>
                <form className='form' onSubmit={finalizarCompra}>
                    <fieldset className='formFieldset'>
                        <div className='formContainer'>
                            <label  className="formLabel">Nombre Completo</label>
                            <input className="formItem" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
                        </div>
                        <div className='formContainer'>
                            <label  className="formLabel">Numero de telefono</label>
                            <input className="formItem"  type="number" placeholder='1122222222' name="phone"  onChange={datosComprador} />
                        </div>
                        <div className='formContainer'>
                            <label  className="formLabel">E-mail</label>
                            <input className="formItem" type="email" placeholder='example@example.com' name="email"  onChange={datosComprador}/>
                        </div>
                        <Button 
                            style={{margin:'1rem'}}
                            variant="contained" 
                            color="secondary"
                            type = "submit"> 
                            Terminar compra
                        </Button>
                        {mensaje && <p style={{color:'red'}}> Por favor complete todos los campos</p>}
                    </fieldset>
                </form>
            </div>
        </div>
        :
        <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center"}}>
        <h2 style={{textAlign: "center"}}>Muchas gracias por su compra!</h2>
        <h4 style={{textAlign: "center"}}>Su orden es: {orderId}</h4>
        <Button 
            style={{margin:'1rem', width: "10%"}}
            variant="outlined" 
            color="secondary"
            onClick={()=> navigate('/')}> 
            Volver
        </Button>
        </div>}
    </div>
    );
}