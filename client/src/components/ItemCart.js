import React, { useState } from "react";
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions/actionsCart.js';
import './Cart.css';

export function ItemCart({ id, img, name, description, price, deleteFromCart }) {

  const [cant, setCant] = useState(0);

  return (
    <div className="flex-container">
      <div className="imagen-container">
        <img 
          className="imgExample"
          src={img || 'https://placehold.it/300x400&text=Portada'}
          alt="Demo Producto"
        />
      </div>

      <div className="datos-container">
        <h5>{name}</h5>
        <p>{description || 'Este producto no tiene descripción'}</p>
        <form className="form-group" className="form-container">
          <span>${price}</span>
          <input type="number" className="form-control" min="1" value={cant || 1} onChange={e => setCant(e.target.value)}/>
        </form>
      </div>

      <div className="boton-container">
        <button type="button" class="btn btn-danger" onClick={() => deleteFromCart(id)}>X</button>
      </div>

    </div>
  );
}


export default connect(null, { deleteFromCart })(ItemCart);

