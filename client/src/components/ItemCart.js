import React, { useState } from "react";
import './Cart.css';
import close from '../images/iconCloseH.png';

export default function ItemCart({ id, img, name, description, price}) {

  const [cant, setCant] = useState(0);

  return (
    <div className="flex-container">
      <div className="items">
        <img 
          className="imgExample"
          src={img || 'https://placehold.it/300x400&text=Portada'}
          alt="Demo Producto"
        />
      </div>
      <div className="items texto">
        <h5>{name}</h5>
        <span>{description}</span>
        <p>$ {price}</p>
      </div>
      <div className="form-group" className=" items input">
        <input type="number" className="form-control" min="1" value={cant || 1} onChange={e => setCant(e.target.value)}/>
      </div>
      <a onMouseOver={e => e.target.style.cursor = 'pointer'}>
        <img src={close} alt="Borrar del carrito"></img>
      </a>
    </div>
  );
}
