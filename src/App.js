import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { NavBar } from './components/NavBar/NavBar.js';
import { Title } from './components/Title/Title.js';
import { Text } from './components/Text/Text.js';
import { Counter } from './components/Counter/Counter.js';
import { Hello } from './components/hello.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';

function App() {
  const styles = {
    backgroundColor: "#000080",
  }

  const [name, setName] = useState("Roberto");
  const handleClick = () => { setName("Carla") };

  const [title, setTitle] = useState("Clase 04")
  const [counter, setCounter] = useState(0)
  //title es el nombre y SETnombre se usa para el estado.
  //const handleTitle = () => setTitle("Clase 05")

  const alertName = () => alert("Hola! Bienvenido!");
  const handleTitle = () => setTitle("Clase 05")
  const [lastClickDate, setLastClickDate] = useState(new Date());

  // const handleTitle = () => alert("Hiciste click en el titulo!");
  
  const add = () => { 
    setCounter (counter + 1);
    setLastClickDate(new Date());
  }

  const remove = () => {
    if (counter > 0){
      setCounter(counter - 1)
    } else {
      alert("No se pueden remover mas elementos del carrito")
    }
    setLastClickDate(new Date());
  }

  return (
    <div className="App">
      <header style={styles} className="App-header">
        <NavBar />
        <Title onTitle={handleTitle} text="Haz click aqui!" />
        <Title text={title} onTitle={handleTitle}/>
        <Title text="Proyecto Emmanuel Pinto" />
        <div onClick={handleClick} className="App">
            <Hello name={name} />
        </div>
        {/* con este metodo usamos el componente texto */}
        <button onClick={add}>+</button>
        <Title text={counter} />
        <button onClick={remove}>-</button>
        
        {/* con este metodo usamos el componente Counter */}
        <Counter value={counter} onAdd={add} onRemove={remove} lastClickDate={lastClickDate} />

        <Text description="Hola bienvenidos a React JS" >
          <p>Hola soy children</p>
          <h3>Hola soy un segundo hijo</h3>
        </Text>
        <button onClick={alertName} >Click me!</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
      <body>
        <ItemListContainer greeting="Juan Carlos" />
      </body>
    </div>
  );
}

export default App;
