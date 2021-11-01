import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


import { NavBar } from './components/NavBar/NavBar.js';
import { Header } from './components/Header/Header.js';
import { SubHeader } from './components/SubHeader/SubHeader.js';
import { Title } from './components/Title/Title.js';
import { Text } from './components/Text/Text.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { Hello } from './components/hello.js';


function App() {
  const styles = {
    backgroundColor: "#1F4489",
  } 
  const bgStyles = {
    backgroundColor: "#fcc139"
  } 
 
  return (
    <BrowserRouter>
     <NavBar />
       <Switch>
         <Route exact path="/">

         <div className="App">
            <header style={styles} className="App-header">
              <Header text="Proyecto: Tienda virtual" />
              <SubHeader text="Alumno: Emmanuel Pinto" />
              <Title text="Esto es un título!" />
              <Text description="Bienvenidos al sitio!" />
            </header>
            <section> 
              <ItemListContainer greeting="Juan Carlos" />
            </section>
          </div>
    
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
