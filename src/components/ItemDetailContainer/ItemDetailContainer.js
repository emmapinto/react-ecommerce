import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Item from '../ItemListContainer/Item.js';
import { Link } from "react-router-dom";
import { getFirestore } from '../../firebase';
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const ItemDetailContainer = (props) => {

    const { itemId } = useParams();

    const [peliculas, setPeliculas] = useState([]);

    // *** PARA APLICAR FIREBASE ***

    useEffect(() => {

      // ESTO ES PARA TRAER TODOS LOS ELEMENTOS DE LA COLECCION
      const db = getFirestore();
            
      getDocs(collection(db, "items"))
        .then((snapshot) => {
           setPeliculas(snapshot.docs.map( (doc) => doc.data() ) );
           
        });
    }, []);
  
    return (
        <>
          {
          peliculas.length ?
          peliculas.map((peli) => {
              if (itemId === peli.id){
                return(<Link to={`../item/${peli.id}`}><Item showModal={true} pelicula={peli} key={peli.id} /></Link>)
              }
            })
          : "Loading..."
          }
        </>
      )
}

export default ItemDetailContainer;
