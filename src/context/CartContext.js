import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = ( item ) => {
        if (cart.find(obj => obj.id === item.id)) {
            alert("Ya existe este producto en el carrito!") 
        } else {
            setCart([...cart, item]);
            alert("Se agregó este producto al carrito");
        }
    }

    const removeItem = ( item ) => {
        if (cart.find(obj => obj.id === item.id)) {
            setCart( cart.splice(cart.indexOf(item.id),1) )
            alert("Se removió el producto del carrito");
        } else {
            alert("No existe este producto en el carrito!");
        }
    }
    
    const clearCart = () => {
        setCart([]);
        alert("Se eliminaron los artículos del carrito");
        console.log(cart);    
    }

    return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartSize: cart.length }}>
        {children}
    </CartContext.Provider>
    )

}