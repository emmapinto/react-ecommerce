import React, {useState} from 'react';
import ItemDetail from '../../components/ItemDetailContainer/ItemDetail.js';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Item = ({pelicula}) => {

    const [modalShow, setModalShow] = useState(false);
    
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
                        show={modalShow} onHide={() => setModalShow(false)} />
                        </>
                        
                    </div>
               </div>
           </div>
           </div>      
    )
};

export default Item;