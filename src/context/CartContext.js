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
        setCart([...cart, item])
    }

    return(
        <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem}}>
            {children}
        </CartContext.Provider>
    );
}