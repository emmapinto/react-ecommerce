import Item from './Item.js';
import { useParams } from "react-router-dom";

export const ItemList = ({info}) => {

    const { categoryId } = useParams();

    console.log(categoryId);

    return (
      <>
        {
        info.length ?
          info.map((peli) => {
            if (categoryId === peli.genre){
              return(<Item pelicula={peli} key={peli.id} />)
            }
            else if (categoryId === undefined) {
              return(<Item pelicula={peli} key={peli.id} />)
            }
          })
        : "Loading..."
        }
      </>
    )

}

export default ItemList;