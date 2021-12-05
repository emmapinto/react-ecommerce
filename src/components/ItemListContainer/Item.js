import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from '../../components/ItemDetailContainer/ItemDetail.js';
import Button from 'react-bootstrap/Button';

export const Item = ({pelicula, showModal}) => {

    const [modalShow, setModalShow] = useState(showModal);

    return (
        <div className="item" id={pelicula.name}>
           <div>
               <img src={pelicula.pictureUrl} alt={pelicula.name} title={pelicula.name} />
               <div>
                    <div>
                        <h3>{pelicula.name}</h3>
                        <p><strong>Precio:</strong> ${pelicula.price}</p>

                        <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>Ver detalles</Button>
                        <ItemDetail
                        id={pelicula.id}
                        pictureUrl={pelicula.pictureUrl}
                        name={pelicula.name}
                        genre={pelicula.genre}
                        year={pelicula.year}
                        stock={pelicula.stock}
                        price={pelicula.price}
                        show={modalShow} onHide={() => setModalShow(false)} />
                        </>
                        
                    </div>
               </div>
           </div>
           </div>      
    )
};

export default Item;