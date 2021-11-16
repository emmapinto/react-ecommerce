import cart from '../assets/img/cart_icon.png';

const styles = {
    width: "50px",
  } 

export const CartWidget = () => {
    return (
        <>
        <img src={cart} alt="Cart" style={styles} /><span className="counter">10</span>
        </>
    )
}

export default CartWidget;
