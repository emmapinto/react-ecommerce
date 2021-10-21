import './App.css';
import {React} from 'react';
import { useEffect, useState } from 'react';

import { render } from 'react-dom';

import { NavBar } from './components/NavBar/NavBar.js';
import { Header } from './components/Header/Header.js';
import { SubHeader } from './components/SubHeader/SubHeader.js';
import { Title } from './components/Title/Title.js';
import { Text } from './components/Text/Text.js';
import { ItemCount } from './components/ItemCount/ItemCount.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { Hello } from './components/hello.js';

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
      </body>
    </div>
  );
}

export default App;
