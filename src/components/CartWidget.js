import cart from '../assets/img/cart_icon.png';

const styles = {
    width: "50px",
  } 

export const CartWidget = () => {
    return (
        <img src={cart} alt="Cart" style={styles} />
    )
}

export default CartWidget;
