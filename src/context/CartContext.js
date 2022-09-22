import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider ({children}) {

    const [cart, setCart] = useState([]);

    function clear () {
        setCart([]);
    }

    function isInCart (id) {
        return cart.same((prod) => prod.id === id)
    }

    function removeItem (id) {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    function addItem (item) {
        const existsInCart = cart.find((prod)=> prod.id === item.id)
        if(existsInCart){
            const carritoActualizado = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, qty:prod.qty + item.qty}
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado )
        }else{
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