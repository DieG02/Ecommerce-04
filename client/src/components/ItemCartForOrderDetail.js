import React, { useState } from "react";
import { connect } from 'react-redux';
import { setCount } from '../actions/actionsCart.js';
import './Cart.css';

export function ItemCartForOrderDetail({ id, img, name, description, price }) {

  return (
    <div className="flex-container">
      <div className="imagen-container-sm">
        <img 
          className="imgExample"
          src={img || 'https://placehold.it/300x400&text=Portada'}
          alt="Demo Producto"
        />
      </div>

      <div className="datos-container">
        <h5>{name}</h5>
        <p>{description || 'Este producto no tiene descripción'}</p>
        <form className="form-container form-group ">
          <span>${price}</span> 
        </form>
      </div>
    </div>
  );
}


export default connect(null, { setCount })(ItemCartForOrderDetail);

