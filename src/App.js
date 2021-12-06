import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Logo } from './components/Logo.js';
import { Header } from './components/Header.js';
import { SubHeader } from './components/SubHeader.js';
import { Title } from './components/Title.js';
import { NavBar } from './components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import { Category } from './components/Category.js';
import { CartProvider } from './context/CartContext.js';
import { Cart } from './components/ItemDetailContainer/Cart.js';

function App() {
  const styles = {
    backgroundColor: "#1F4489",
  } 

  const [modalShow, setModalShow] = useState(true);

  return (
    <CartProvider>
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

          <Route exact path="/item/:itemId">
          <div className="App">
              <header style={styles} className="App-header">
                <Header text="VIDEOCLUB ONLINE" />
                <Logo />
                <SubHeader text="Tienda de clásicos" />
              </header>
              <section> 
                <ItemDetailContainer/>
              </section>
            </div>
          </Route>

          <Route exact path="/Cart" >
          <div className="App">
              <header style={styles} className="App-header">
                <Header text="VIDEOCLUB ONLINE" />
                <Logo />
                <SubHeader text="Tienda de clásicos" />
              </header>
              <section> 
                <Cart show={modalShow}  />
              </section>
            </div>
          </Route>

        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
