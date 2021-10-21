import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import Item from './Item.js';
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
  
    //se usan [] al final para que NO loopee eternamente.
    useEffect(() => {
      getData(Peliculas)
          .then((res) => setPeliculas(res))
          .catch((err) => console.log(err));
    }, [])
    
    return (
        <div>
            <p>Hola {props.greeting}! Este es un título provisional que luego reemplazaremos por nuestro catálogo</p>
            
            {peliculas.length ? peliculas.map((peli) => {return(
                <div className="item" id={peli.name}>
                    <div>
                    <h3>{peli.name}</h3>
                    <img src={peli.pictureUrl} alt={peli.name} title={peli.name} />
                        <div>
                            <div>
                                <p><strong>Género:</strong> {peli.genre}</p>
                                <p><strong>Precio:</strong> {peli.price}</p>
                                <p><strong>Unidades disponibles:</strong> {peli.stock}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <a href="#">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </div>   
           )}) : "Loading..."}

        </div>
    );
}

export default ItemListContainer