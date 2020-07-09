import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav.js';
import Products from './components/Products.js';
import ProductAdd from './components/ProductAdd.js';
import ProductEdit from './components/ProductEdit.js';
import ProductDetail from './components/ProductDetail.js';
import AddCategory from './components/AddCategory.js';
import ProductByCategory from './components/ProductByCategory.js';
import ListCart from './components/ListCart.js';
import Admin from './components/Admin.js';
import AddUser from './components/AddUser.js';

function App() {
  
  return ( 
    <div className="App">
    <Nav />
    <header className="App-header">

      <Route
        exact path='/'
        render={() => <Products/>}
      />
      <Route
        exact path='/catalogo'
        render={() => <Products/>}
      />
      
      <Route
        exact path='/producto/add'
        render={() => <ProductAdd/>}
      />  
      <Route
        exact path='/producto/edit/:id'
        component={({match}) => 
          <ProductEdit id={match.params.id}/>
        }
      />
      <Route
        exact path='/producto/detail/:id'
        component={({match}) => 
          <ProductDetail id={match.params.id}/>
        }                   
      />

      <Route 
        exact path='/categorias/add'
        render={() => <AddCategory/>}
      />
      <Route
        exact path='/categorias/:id'
        component={({match}) => 
          <ProductByCategory id={match.params.id}/>
        }
      />

      <Route
        exact
        path='/usuario/add'
        component={() => <AddUser/>}
      />

      <Route
        exact path='/cart'
        component={() => <ListCart/>}
      />

      <Route
        exact path='/admin'
        component={() => <Admin/>}
      />
    </header>
  </div>
  );
}
export default App;
