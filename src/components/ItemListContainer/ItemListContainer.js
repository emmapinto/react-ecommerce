import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import Peliculas from '../../data/Peliculas.json';

export const ItemListContainer = (props) => {

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
        <div>
            <ItemList info={peliculas} />
        </div>
    );
}

export default ItemListContainer