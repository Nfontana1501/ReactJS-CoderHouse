import React from "react";
import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

export function CartProvider ({children}) {

    const [cart, setCart] = useState([]);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
        popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true
    })

    useEffect(()=>{
        const data = localStorage.getItem("cart")
        if (data !== null) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    function clear () {
        setCart([]);
        Toast.fire({
            icon: 'warning',
            title: 'Carrito vaciado'
        })
    }

    function isInCart (id) {
        return cart.same((prod) => prod.id === id)
    }

    function removeItem (id) {
        setCart(cart.filter((prod) => prod.id !== id))
        Toast.fire({
            icon: 'warning',
            title: 'Producto eliminado'
        })
    }

    function addItem (item) {
        const existsInCart = cart.find((prod)=> prod.id === item.id)
        if((existsInCart)){
            const carritoActualizado = cart.map((prod)=>{
                if(item.qty+prod.qty<item.stock){
                    Toast.fire({
                        icon: 'success',
                        title: 'Producto añadido'
                    })
                    if(prod.id === item.id){
                        return {...prod, qty:prod.qty + item.qty}
                    }else{
                        return prod
                    }
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: 'No hay stock suficiente'
                    })
                    return prod
                }
            })
            setCart(carritoActualizado)
        }else{
            Toast.fire({
                icon: 'success',
                title: 'Producto añadido'
            })
            setCart([...cart, item])
        }
    }

    function cartQuantity (){
        return cart.reduce((acc, prod) => acc += prod.qty, 0)
    }

    function cartTotal (){
        return cart.reduce((acc, prod) => acc += prod.precio * prod.qty, 0)
    }

    return(
        <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    );
}