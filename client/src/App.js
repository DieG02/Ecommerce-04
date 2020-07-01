import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products.js';
import ProductAdd from './components/ProductAdd.js';
import ProductEdit from './components/ProductEdit.js';
import ProductDetail from './components/ProductDetail.js';
import AddCategory from './components/AddCategory.js';
import Nav from './components/Nav.js';

function App() {
  
  const [product, setProduct] = useState([]);

  //Buscar todo
  const [all, setAll] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1337/productos`)
    .then(res => res.json())
    .then((data) => {
      if(data !== undefined){
        setAll(data);
      }
    });
  }, []);

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
        console.log(JSON.stringify(data));
      } else {
        alert('No se agrego el producto!');
      }
    })
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
        component={() => <Products items={product}/>}
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
      </header>
    </div>
  );
}
<<<<<<< HEAD
export default App;


// accion: "agregar"
// categoria: "Deportes"
// color: "#5e5e5e"
// createdAt: null
// descripcion: "Buzo de futbol"
// id: "20"
// imagen: "https://dexter.vteximg.com.br/arquivos/ids/560743-1000-1000/PU581486-03_1.jpg?v=637274812307230000"
// nombre: "Buzo"
// precio: "5000"
// stock: "30"
// talle: "20"
=======
export default App;
>>>>>>> master
