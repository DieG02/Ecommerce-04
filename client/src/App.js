import React, { useState }from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products.js';
import Nav from './components/Nav';

function App() {
  const [product, setProduct] = useState([]);
  const onSearch = function(productName){
    fetch(`http://localhost:1337/productos?search=${productName}`)
      .then(res => res.json())
      .then((data) => {
        if(data !== undefined){
          console.log(data);
          setProduct(data)
        } else {
          alert("No se encontraron productos con este nombre");
        }
      }
    )
  }

  return (    
    <div className="App">
      <Nav onSearch={onSearch}/>
      <header className="App-header">
     
      <Route
        path='/'
        component={() => <Products 
          items={product}
        />
        }
      />
      </header>
    </div>
  );
}
export default App;

