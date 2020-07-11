import React, { useEffect } from 'react';
import './ProductDetail.css'
import { connect } from 'react-redux';
import { detailProduct } from '../actions/actionsProductos.js';

function ProductDetail ({ id, detailProduct, producto }) {
  
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
          <p>Disponibilidad {producto.stock}</p>
        </div>
        <div className="info-container">
          <h5>Descripcion del producto</h5>
          <p> {producto.descripcion || 'Este producto no tiene descripción'} </p>  
          <div className="color-talle">
            <span> Color: {producto.color} </span>
            <span> Talle: {producto.talle} </span>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn btn-outline-success">Añadir al carrito</button> 
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

export default connect (mapStateToProps,{detailProduct})(ProductDetail)