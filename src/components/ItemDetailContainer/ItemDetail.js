import React, {useState} from 'react';
import ItemCount from '../../components/ItemCount.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ItemDetail = (props) => {

    const onAddCart = () => {
      // Esta función utilizará el valor almacenado en el estado de COUNTER para
      // almacenar el Item correspondiente en el carrito de compra

      return (
      <>
        ...
      </>
      )
    }

    //Defino estado para el componente ItemCount
    const [counter, setCounter] = useState(0)

    const add = () => {
        if (counter < props.stock){
        setCounter(counter + 1)
        } else {
        alert("LLego al máximo de stock de este producto")
        }
    }
    
    const remove = () => {
        if (counter > 0){
        setCounter(counter - 1)
        } else {
        alert("No se pueden remover mas elementos del carrito")
        }
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
          </Modal.Body>
          <Modal.Footer>
            <ItemCount value={counter} onAdd={add} onRemove={remove} />
            <Button onClick={onAddCart}>Agregar al carrito</Button>
            <Button onClick={props.onHide}>Volver al catalogo</Button>
          </Modal.Footer>
        </Modal>
    );

}

export default ItemDetail;