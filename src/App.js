import logo from './logo.svg';
import './App.css';

import { Title } from './components/Title/Title.js';
import { NavBar } from './components/NavBar/NavBar.js';


function App() {
  const styles = {
    backgroundColor: "#000080",
  }

  const alertName = () => alert("Hola! Bienvenido!");

  return (
    <div className="App">
      <header style={styles} className="App-header">
        <NavBar />
        <Title />
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
    </div>
  );
}

export default App;
