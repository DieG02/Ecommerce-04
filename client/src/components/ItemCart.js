import React, { useState } from "react";
import './Cart.css';
import { connect } from 'react-redux';


function ItemCart() {

  const [cant, setCant] = useState(0);

  return (
    <div className="flex-container">
      <div className="items">
        <img 
          className="imgExample"
          src="https://placehold.it/300x400&text=Portada" 
          alt="Demo Producto"
        />
      </div>
      <div className="items texto">
        <h5>PRODUCT NAME</h5>
        <span>Descripción del producto</span>
        <p>PRECIO</p>
      </div>
      <div className="form-group" className=" items input">
        <input type="number" className="form-control" min="1" value={cant || 1} onChange={e => setCant(e.target.value)}/>
      </div>
    </div>
  );
}

export default connect(null)(ItemCart);