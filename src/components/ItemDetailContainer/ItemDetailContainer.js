import { useEffect, useState } from 'react';
import Peliculas from '../../data/Peliculas.json';
import { useParams } from "react-router-dom";
import Item from '../ItemListContainer/Item.js';
import { Link } from "react-router-dom";
import { getFirestore } from '../../firebase';
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemDetailContainer = (props) => {

    const { itemId } = useParams();

    console.log(itemId);

    const [peliculas, setPeliculas] = useState([]);

    // *** PARA APLICAR FIREBASE ***

    useEffect(() => {

      // ESTO ES PARA TRAER TODOS LOS ELEMENTOS DE LA COLECCION
      const db = getFirestore();
            
      // ESTO ES PARA HACER UNA CONSULTA
      // const q = query(collection(db, "items"), where("genre", "==", "Terror"));
      // const q = query(collection(db, "items"), where("price", ">", 100));

      getDocs(collection(db, "items"))
        .then((snapshot) => {
           setPeliculas(snapshot.docs.map( (doc) => doc.data() ) );
           
        });
    }, []);
 
    // *** PARA USAR PROMISE Y LLAMAR A DB DESDE JSON ***

    // const getData = (data) =>
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         if(data){
    //             resolve(data);
    //         } else {
    //             reject("No se encontró nada!")
    //         }
    //     }, 2000)
    //   });
  
    // useEffect(() => {
    //   getData(Peliculas)
    //       .then((res) => setPeliculas(res))
    //       .catch((err) => console.log(err));
    // }, [])
 
    return (
        <>
          {
          peliculas.length ?
          peliculas.map((peli) => {
              if (itemId === peli.id){
                return(<Link to={`../item/${peli.id}`}><Item pelicula={peli} key={peli.id} /></Link>)
              }
            })
          : "Loading..."
          }
        </>
      )
}

export default ItemDetailContainer;
