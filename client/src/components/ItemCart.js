import React, { useState } from "react";
import './Cart.css';

export default function ItemCart({ id, img, name, description, price}) {

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

      <div className="data-container">
        <h5>{name}</h5>
        <p>{description}</p>
        <form className="form-group" className="form-container">
          <span>${price}</span>
          <input type="number" className="form-control" min="1" value={cant || 1} onChange={e => setCant(e.target.value)}/>
        </form>
      </div>

      <div className="boton-container">
      <button type="button" class="btn btn-danger">X</button>
      </div>

    </div>
  );
}
