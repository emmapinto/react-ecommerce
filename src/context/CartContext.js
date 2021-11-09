import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useTheme = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);    
    }

    const removeItem = (item) => {
        // remover el Item del array y setear el cart

        // *En la app no hace falta que lo llame porque solo se va a aplicar a los hijos. Solo lo llamo en los componenetes necesarios!!!

        // import { useTheme } from "..context/CartContext"
        // const {cart, addItem, removeItem} = useTheme();

        // return <Container cart={cart} addItem={addItem} removeItem={removeItem}>

    }

    return (
    <CartContext.Provider value={cart, addItem, removeItem}>
        {children}
    </CartContext.Provider>
    )

}