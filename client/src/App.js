import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products.js';
import ProductAdd from './components/ProductAdd.js';
import ProductEdit from './components/ProductEdit.js';
import ProductDetail from './components/ProductDetail.js';
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
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    alert('Se ha agregado el producto!')
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
    }).then(res => res.json());
    alert('Se ha modificado el producto!')
  }

   //Añade Categoría
   const addCategory = function(data){
    console.log(JSON.stringify(data));
    fetch('http://localhost:1337/categorias', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => alert('Se ha agregado la categoría!', response));
  }

  return ( 
    <div className="App">
      <Nav onSearch={onSearch} addCategory={addCategory}/>
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
       <Route
        path='/producto/detail/:id'
        component={ProductDetail}      
      />

      </header>
    </div>
  );
}
export default App;


