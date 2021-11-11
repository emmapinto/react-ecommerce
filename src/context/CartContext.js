import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useTheme = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const getFromCart = (id) => {
        return cart.find(item => item.id === id)
    } 

    const isInCart = (id) => {
        return id === undefined ? undefined : getFromCart !== undefined
    } 

    const addItem = ({ item }) => {
        if (isInCart(item && item.id)) {
            console.log("Ya existe este producto en el carrito!");
            return;
        }
        setCart([...cart, item]); 
        console.log(cart);
    }

    const removeItem = ({ item }) => {
        if (isInCart(item && item.id)) {
            setCart([ cart.splice(cart.indexOf(item.id),1) ]);
            return;
        }
        console.log("No existe este producto en el carrito!"); 
        console.log(cart);
    }
    
        // remover el Item del array y setear el cart
        // *En la app no hace falta que lo llame porque solo se va a aplicar a los hijos. Solo lo llamo en los componenetes necesarios.
        // import { useTheme } from "..context/CartContext"
        // const {cart, addItem, removeItem} = useTheme();
        // return <Container cart={cart} addItem={addItem} removeItem={removeItem}>

    const clearCart = () => {
        setCart([]);
        console.log(cart);    
    }

    return (
    <CartContext.Provider value={cart, addItem, removeItem, clearCart}>
        {children}
    </CartContext.Provider>
    )

}