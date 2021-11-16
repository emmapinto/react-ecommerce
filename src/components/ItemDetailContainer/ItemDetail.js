import React, {useState} from 'react';
import ItemCount from '../../components/ItemCount.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCart, CartProvider } from "../../context/CartContext.js"

export const ItemDetail = (props) => {

    const {cart, addItem, removeItem, clearCart} = useCart();

    //Defino estado para el componente ItemCount
    const [counter, setCounter] = useState(0);

    const addCounter = () => {
        if (counter < props.stock){
        setCounter(counter + 1)
        } else {
        alert("LLego al máximo de stock de este producto")
        }
    }
    
    const removeCounter = () => {
        if (counter > 0){
        setCounter(counter - 1)
        } else {
        alert("No se pueden remover mas elementos del carrito")
        }
    }

    // const [item, setItem] = useState(null);

    const addToCart = () => {
      if (counter != 0){

        console.log(`Agregar al carrito el item N° ${props.id} "${props.name}", con la cantidad: ${counter} y el precio ${props.price}`);
        let item = props;
        // item.stock = counter;
        // item.price = item.price * counter;
        console.log(item);
        addItem( item );

      } else {
        alert("No se pueden agregar 0 unidades al carrito!");
      }
    }

    const removeFromCart = () => {
      let item = props;
      removeItem( item );
      console.log(cart);
    }

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={props.pictureUrl} alt={props.name} title={props.name} />
              <p><strong>Género:</strong> {props.genre}</p>
              <p><strong>Año de estreno:</strong> {props.year}</p>
              <p><strong>Unidades disponibles:</strong> {props.stock}</p>
              <p><strong>Precio por unidad:</strong> {props.price}</p>
          </Modal.Body>
          <Modal.Footer>
            <ItemCount value={counter} onAddCounter={addCounter} onRemoveCounter={removeCounter} />
            <Button onClick={addToCart}>Agregar al carrito</Button>
            <Button onClick={removeFromCart}>Remover del carrito</Button>
          </Modal.Footer>
        </Modal>
    );

}

export default ItemDetail;