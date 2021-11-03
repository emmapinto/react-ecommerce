import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Logo } from './components/Logo.js';
import { Header } from './components/Header.js';
import { SubHeader } from './components/SubHeader.js';
import { Title } from './components/Title.js';
import { Text } from './components/Text.js';
import { Hello } from './components/hello.js';
import { NavBar } from './components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { Category } from './components/Category.js';


function App() {
  const styles = {
    backgroundColor: "#1F4489",
  } 
 
  return (
    <BrowserRouter>
     <NavBar />
       <Switch>
         <Route exact path="/">
         <div className="App">
            <header style={styles} className="App-header">
              <Header text="VIDEOCLUB ONLINE" />
              <Logo />
              <SubHeader text="Tienda de clásicos" />
            </header>
            <section> 
              <Title text="Estas en la Home" />
              <ItemListContainer />
            </section>
          </div>
        </Route>

        <Route exact path="/category/:categoryId">
         <div className="App">
            <header style={styles} className="App-header">
              <Header text="VIDEOCLUB ONLINE" />
              <Logo />
              <SubHeader text="Tienda de clásicos" />
            </header>
            <section> 
              <Category />
              <ItemListContainer />
            </section>
          </div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
