import React, { useState }from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products.js';
import ProductAdd from './components/ProductAdd.js';
import Nav from './components/Nav.js';

function App() {
  
  const [product, setProduct] = useState([]);

  const onSearch = function(productName){
    fetch(`http://localhost:1337/productos?search=${productName}`)
      .then(res => res.json())
      .then((data) => {
        if(data !== undefined){
          setProduct(data)
        } else {
          alert("No se encontraron productos con este nombre");
        }
      }
    )
  }

  const addProduct = function(data){
    console.log(data);
    var url = 'http://localhost:1337/productos';
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
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
        path='/producto/add'
        render={() => <ProductAdd addProduct={addProduct}/>}
      />
      </header>
    </div>
  );
}
export default App;

