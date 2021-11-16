import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = ( item ) => {
        cart.find(obj => obj.id === item.id) ? console.log("Ya existe este producto en el carrito!") : setCart([...cart, item]);
        // cart.includes( item.id ) ? console.log("Ya existe este producto en el carrito!") : setCart([...cart, item]);
        console.log( item.id );
        console.log(cart);
    }

    const removeItem = ( item ) => {
        cart.find(obj => obj.id === item.id) ? setCart( cart.splice(cart.indexOf(item.id),1) ) : console.log("No existe este producto en el carrito!");
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
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartSize: cart.length }}>
        {children}
    </CartContext.Provider>
    )

}