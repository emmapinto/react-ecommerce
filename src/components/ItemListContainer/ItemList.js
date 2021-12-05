import Item from './Item.js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ItemList = ({info}) => {

    const { categoryId } = useParams();

    console.log(categoryId);

    return (
      <>
        {
        info.length ?
          info.map((peli) => {
            if (categoryId === peli.genre){
              return(<Link to={`../item/${peli.id}`}><Item showModal={false} pelicula={peli} key={peli.id} /></Link>)
            }
            else if (categoryId === undefined) {
              return(<Link to={`../item/${peli.id}`}><Item showModal={false} pelicula={peli} key={peli.id} /></Link>)
            }
          })
        : "Loading..."
        }
      </>
    )

}

export default ItemList;