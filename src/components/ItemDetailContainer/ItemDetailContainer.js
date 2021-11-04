import { useEffect, useState } from 'react';
import Peliculas from '../../data/Peliculas.json';
import { useParams } from "react-router-dom";
import Item from '../ItemListContainer/Item.js';
import { Link } from "react-router-dom";

export const ItemDetailContainer = (props) => {

    const { itemId } = useParams();

    console.log(itemId);

    const [peliculas, setPeliculas] = useState([]);
 
    const getData = (data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data){
                resolve(data);
            } else {
                reject("No se encontró nada!")
            }
        }, 2000)
      });
  
    useEffect(() => {
      getData(Peliculas)
          .then((res) => setPeliculas(res))
          .catch((err) => console.log(err));
    }, [])
 
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
