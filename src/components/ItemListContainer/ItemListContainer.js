import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import { getFirestore } from '../../firebase';
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";


export const ItemListContainer = (props) => {

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
       <ItemList info={peliculas} />
    );
}

export default ItemListContainer