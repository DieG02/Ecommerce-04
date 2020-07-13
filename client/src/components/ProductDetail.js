import React, { useEffect } from 'react';
import './ProductDetail.css'
import { connect } from 'react-redux';
import { detailProduct } from '../actions/actionsProductos.js';
import { addToCart } from '../actions/actionsCart.js';

function ProductDetail ({ id, detailProduct, addToCart, producto }) {
  
  useEffect(()=>{
    detailProduct(id)},
    [id, detailProduct])

  return (
    <div className="mi-contenedor">
      <div className="img-container">
        <img src={producto.imagen} alt="Imagen en detalle"/>
      </div>
      <div className="data-container">
        <div className="nombre-container">
          <h2>{producto.nombre}</h2>
          <p>Vale por una review *****</p>
        </div>
        <div className="precio-container">
          <h4>$ {producto.precio}</h4>
          <p>Stock disponible {producto.stock}</p>
        </div>
        <div className="info-container">
          <h5>Descripcion del producto</h5>
          <p> {producto.descripcion || 'Este producto no tiene descripción'} </p>  
          <div className="color-talle">
            <span> Colores <div style={{backgroundColor: producto.color, width: '20px', height: '20px'}}></div> </span>
            <span> Talle {producto.talle} </span>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn btn-outline-success" onClick={() => addToCart(id)}>Añadir al carrito</button> 
        </div>         
      </div>           
    </div>
  )
};

function mapStateToProps(state){
  return {
      producto : state.producto.producto
  }
}

export default connect (mapStateToProps,{ detailProduct, addToCart })(ProductDetail)