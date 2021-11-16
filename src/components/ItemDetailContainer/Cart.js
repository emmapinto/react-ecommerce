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
              {
              cart.length ?
              cart.map((peli) => {
                  return(
                    // <img scr={peli.pictureUrl} title={peli.name} alt={peli.name} />
                    <p>Id: {peli.id} - Nombre: {peli.name}</p>
                  )
              })
              : "El carrito esta vacío."
              }
              </>
              
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={clearCart}>Vaciar carrito</Button>
            <Link to="/"><Button>Volver al Catálogo</Button></Link>
          </Modal.Footer>
        </Modal>
    );

}

export default Cart;