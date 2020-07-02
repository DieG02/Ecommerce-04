import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products.js';
import ProductAdd from './components/ProductAdd.js';
import ProductEdit from './components/ProductEdit.js';
import ProductDetail from './components/ProductDetail.js';
import AddCategory from './components/AddCategory.js';
import ProductByCategory from './components/ProductByCategory.js';
import Nav from './components/Nav.js';

function App() {
  
const [product, setProduct] = useState([]);

  //Buscar todo
  const [all, setAll] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:1337/productos`)
  //   .then(res => res.json())
  //   .then((data) => {
  //     if(data !== undefined){
  //       setAll(data);
  //     }
  //   });
  // }, []);

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
    fetch('http://localhost:1337/productos', {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      if(res.status === 200){      
        return window.location.replace('http://localhost:3000')
      } else {
        alert('No se agrego el producto!');
      }
    })
  }

  //Edita un producto
  const editProduct = function(data, accion, categoria){
    console.log(JSON.stringify(data));
    fetch(`http://localhost:1337/productos/${data.id}/${accion}/${categoria}`, {
      method: 'PUT',
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      },
    }).then((res)=>{
      if(res.status === 200){
        return window.location.replace('http://localhost:3000')
      } else {
        alert('No se agrego el producto!');
      }
    })
  }

  //Añade Nueva Categoría
  const addCategory = function(data){
    console.log(JSON.stringify(data));
    fetch('http://localhost:1337/categorias', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      if(res.status === 200){
        return window.location.replace('http://localhost:3000')
      } else {
        alert('No se agrego el producto!');
      }
    })
  }

  
  return ( 
    <div className="App">
      <Nav onSearch={onSearch}/>
      <header className="App-header">

      <Route
        exact
        path='/'
        component={() => <Products/>}
      />

      <Route
        exact
        path='/catalogo'
        component={() => <Products items={all}/>}
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
        exact
        path='/producto/detail/:id'
        component={ProductDetail}      
      />

      <Route 
        exact
        path='/categorias/add'
        component={() => <AddCategory addCategory={addCategory}/>}
      />

      <Route
        exact
        path='/categorias/:id'
        component={ProductByCategory}
      />
      </header>
    </div>
  );
}
export default App;
