import Item from './Item.js';

export const ItemList = (info => {
    return (
        <>
          {info.length ? info.map((peli) => {return(<Item pelicula={peli} key={peli.id} />)}) : "Loading..."}
        </>
    )
});

export default ItemList;