import React from 'react';
import './App.css';
import Products from './components/Products.js';
import data from './data.js';
import Nav from './components/Nav';

function App() {
  
  const onSearch = function(productName){
    //----- ADD -----
    // fetch(`http://localhost:3000/products?name=${productName}`)
    fetch(`https://randomuser.me/api/`) //----- DELETE
      .then(res => res.json())
      .then((data) => {
        if(data !== undefined){
          //---- ADD -----
          //<Products items={data}/>
          console.log(data.results[0]); //----- DELETE ------
          console.log(productName)      //----- MODIFY ------
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
      {/*----- DELETE -----*/}
        <Products items={data}/>
      </header>
    </div>
  );
}
export default App;

