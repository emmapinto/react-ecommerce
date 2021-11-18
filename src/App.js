import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";

import { getFirestore } from './firebase';
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

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
  
  // const [product, setProduct] = useState(null);
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   // ESTO ES PARA TRAER UN SOLO ELEMENTO DE LA COLECCION 👀
  //   const db = getFirestore();

  //   const biciRef = doc(db, "items", "Uyho0HTTsC40A0IVxXyA");
  //   getDoc(biciRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProduct(snapshot.data());
  //     }
  //   });
  // }, []);

   // DESCOMENTAR DESDE ACA PARA APLICAR FIREBASE!!!

  //  const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   // ESTO ES PARA TRAER TODOS LOS ELEMENTOS DE LA COLECCION
  //   const db = getFirestore();

  //   // const q = query(collection(db, "items"), where("genre", "==", "Terror"));
  //   const q = query(collection(db, "items"), where("price", ">", 100));

   // DESCOMENTAR DESDE ACA PARA APLICAR FIREBASE!!!

  //   getDocs(q)
  //     .then((snapshot) => {
  //       setProducts(snapshot.docs.map( (doc) => doc.data() ) );
  //     });
  // }, []);

  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Switch>
          {/* <ul>
            <li>Bueeeenas</li>
              { product && ( <li>
                            Name: {product.name} - Price: {product.price}
                            </li>
                            )
              }
              { products && products.map((product) => (
                            <li key={product.name}>Name: {product.name} - Price: {product.price}</li>
                            ))
              }
          </ul> */}
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
                <ItemDetailContainer />
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
