import cartIcon from '../assets/img/cart_icon.png';
import { useCart, CartProvider } from "../context/CartContext.js";

const styles = {
    width: "50px",
  } 

export const CartWidget = () => {

    const {cart} = useCart();

    return (

        <>
        <img src={cartIcon} alt="Cart" style={styles} />
        {
        cart.length ? (<span className="counter" >{cart.length}</span>) : ("")
        }
        </>
    )
}

export default CartWidget;
