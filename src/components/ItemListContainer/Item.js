export const Item = ({pelicula}) => {
   
    return (
        <div className="item" id={pelicula.name}>
           <div>
               <img src={pelicula.pictureUrl} alt={pelicula.name} title={pelicula.name} />
               <div>
                    <div>
                        <h3>{pelicula.name}</h3>
                        <p><strong>Género:</strong> {pelicula.genre}</p>
                        <p><strong>Precio:</strong> {pelicula.price}</p>
                        <p><strong>Unidades disponibles:</strong> {pelicula.stock}</p>
                    </div>
               </div>
               <div>
                    <div>
                        <a href="#">Ver detalles</a>
                    </div>
               </div>
           </div>
           </div>      
    )
};

export default Item;