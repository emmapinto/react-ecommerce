import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { NavBar } from './components/NavBar/NavBar.js';
import { Header } from './components/Header/Header.js';
import { SubHeader } from './components/SubHeader/SubHeader.js';
import { Title } from './components/Title/Title.js';
import { Text } from './components/Text/Text.js';
import { ItemCount } from './components/ItemCount/ItemCount.js';
import { Hello } from './components/hello.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';

// const [loading, setLoading] = useState(true);

const productos = [
  {
    id: "01",
    price: 200,
    name: "Bicicleta",
    stock: 5
  },
  {
    id: "02",
    price: 400,
    name: "Monopatin",
    stock: 8
  }
]

//haciendo uso de una PROMESA para llamar al ARRAY Productos
const task = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 3000);
});
task.then(
  (result) => {
    console.log(result);
    // setLoading(false);
  },
  (error) => {
    console.log(error);
  }
);

function App() {
  const styles = {
    backgroundColor: "#000080",
  }

  //Defino estado para el componente ItemCount
  const [counter, setCounter] = useState(1)

  const maxStock = 10;

  const add = () => {
    if (counter < maxStock){
      setCounter(counter + 1)
    } else {
      alert("LLego al máximo de stock de este producto")
    }
  }

  const remove = () => {
    if (counter > 0){
      setCounter(counter - 1)
    } else {
      alert("No se pueden remover mas elementos del carrito")
    }
  }
   
  return (
    <div className="App">
      <header style={styles} className="App-header">
        <NavBar />
        <Header text="Proyecto: Tienda virtual" />
        <SubHeader text="Alumno: Emmanuel Pinto" />
        <Title text="Esto es un título!" />
        <Text description="Bienvenidos al sitio!" />
        <ItemCount value={counter} onAdd={add} onRemove={remove} />
      </header>
      <body>
        <ItemListContainer greeting="Juan Carlos" />
        <ul>
          {/* //Idealmente debemos incluir en cada elemento la propiedad KEY,
          que marque la IDENTIDAD del ELEMENTO. Esto ayudará a react
          a OPTIMIZAR el rendering ante cambios en el array. */}
          {productos.map(u => <li key={u.id}><strong>Producto: </strong>{u.name} | <strong>Precio: </strong>{u.price}</li>)}

          {/* //Para crear el COMPONENTE lo usariamos asi:
          {productos.map((productos) => (
            <Producto name={productos.name} price={productos.price}>
          ))} */}

        </ul>
      </body>
    </div>
  );
}

export default App;
