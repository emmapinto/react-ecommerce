import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCart, CartProvider } from "../../context/CartContext.js"
import { Link } from "react-router-dom";

export const Cart = (props) => {

    const {cart, addItem, removeItem, clearCart} = useCart();

    const [item, setItem] = useState(null);

    const removeFromCart = () => {
      setItem(props);
      removeItem({item});
      console.log(cart);
    }

    let total = 0;

    return (

      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
               Carrito
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <>
              <p>Los siguiente productos estan pendientes de compra:</p>
              {
              cart.length ?
              cart.map((peli) => {
                  total = total + peli.priceInCart;
                  return(
                    // <img scr={peli.pictureUrl} title={peli.name} alt={peli.name} />
                    <p><strong>Nombre:</strong> {peli.name} | <strong>Unidades:</strong> {peli.stockInCart} | <strong>Precio total:</strong> {peli.priceInCart}</p>
                  )
              })
              : <p>El carrito esta vacío.</p>
              }
              <p className="total"><strong>COSTO TOTAL: </strong>{total}</p>
              </>
              
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={clearCart}>Vaciar carrito</Button>
            <Button >Terminar compra</Button>
            <Link to="/"><Button>Volver al Catálogo/Seguir comprando</Button></Link>
          </Modal.Footer>
        </Modal>
    );

}

export default Cart;