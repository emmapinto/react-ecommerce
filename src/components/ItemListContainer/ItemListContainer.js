import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import Peliculas from '../../data/Peliculas.json';
import { getFirestore } from '../../firebase';
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";


export const ItemListContainer = (props) => {

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

    console.log(peliculas);    

    return (
       <ItemList info={peliculas} />
    );
}

export default ItemListContainer