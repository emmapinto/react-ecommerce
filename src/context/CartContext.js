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

    const removeItem = ( id ) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        alert("Se removió este item del carrito");
    }
    
    const clearCart = () => {
        setCart([]);
        alert("Se eliminaron los artículos del carrito");
    }

    return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartSize: cart.length }}>
        {children}
    </CartContext.Provider>
    )

}