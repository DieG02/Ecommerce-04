import React, { useState } from "react";
import { connect } from 'react-redux';
import { deleteFromCart, setCount } from '../actions/actionsCart.js';
import './Cart.css';

export function ItemCart({ cantidad, id, img, name, description, price, stock, deleteFromCart, setCount }) {

  const [cant, addCant] = useState(0);

  function getCount(id){
    if(!cantidad || cantidad === 0) cantidad = 1;
      return fetch(`http://localhost:1337/changuito/productos/${id}`)
      .then(res => {
          console.log(res)
          return res
      })
  }

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
        <form className="form-container form-group ">
          <span>${price}</span>
          <div className="editar input-group input-group-sm mb-3">
            <input type="number" min="1" max={stock} title="Cantidad" className="form-control" id="cantidad" placeholder="1"
              onChange={e => addCant(e.target.value)}/>
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="button" 
                onClick={() => {
                  setCount(id, cant);         
                  document.getElementById('cantidad').placeholder = getCount(id);
                  document.getElementById('cantidad').value = '';
              }}>Fijar</button>
            </div>
            <small>Disponible {stock}</small>
          </div>  
        </form>
      </div>

      <div className="boton-container">
        <button type="button" className="btn btn-danger" onClick={() => deleteFromCart(id)}>X</button>
      </div>

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
      cantidad: state.carrito.cantidad
  };
};

export default connect(mapStateToProps, { deleteFromCart, setCount })(ItemCart);

