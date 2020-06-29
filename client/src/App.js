import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products.js';
import ProductAdd from './components/ProductAdd.js';
import ProductEdit from './components/ProductEdit.js';
import Nav from './components/Nav.js';

function App() {
  
  const [product, setProduct] = useState([]);

  //Busca por nombre
  const onSearch = function(productName){
    fetch(`http://localhost:1337/productos?search=${productName}`)
      .then(res => res.json())
      .then((data) => {
        setProduct(data)
      }
    )
  }

  //Añade un producto
  const addProduct = function(data){
    console.log(JSON.stringify(data));
    fetch('http://localhost:1337/productos', {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }
  
  //Edita un producto
  const editProduct = function(data){
    console.log(JSON.stringify(data));
    fetch(`http://localhost:1337/productos/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
  }


  return ( 
    <div className="App">
      <Nav onSearch={onSearch}/>
      <header className="App-header">

      <Route
        path='/'
        component={() => <Products 
          items={product}
        />}
      />
      <Route
        exact
        path='/producto/add'
        render={() => <ProductAdd addProduct={addProduct}/>}
      />  

      <Route
        exact
        path='/producto/edit/:id'
        component={({match}) => 
          <ProductEdit
            id={match.params.id}
            editProduct={editProduct}
          />
        }
      />

      </header>
    </div>
  );
}
export default App;


