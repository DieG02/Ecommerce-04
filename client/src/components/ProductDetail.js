import React, { useState, useEffect } from 'react';
import './ProductDetail.css'
import { connect } from 'react-redux';
import { detailProduct } from '../actions/actionsProductos.js';

function ProductDetail ({ match }, producto, detailProduct) {
  const { id } = match.params;
  console.log(producto)

  useEffect(()=>{detailProduct(id)},[detailProduct, id])  

  return (
    <div className="container" >
      <div class="row">
        <div class="col-8">
          <div className="card-deck">  
            <div className="card">
              <img className="card-img-top productView" src={producto.imagen} alt=""/>
            </div>
          </div>
        </div>
          <div className="propiedades" class="col-4">
              <h3 className="text">{producto.nombre}</h3>
              <h2 className="text">$ {producto.precio}</h2>
              <br/>
                <p className="text"> {producto.descripcion}</p>  
              <h6 className="text">Color: {producto.color} </h6>
              <h6 className="text">Talle: {producto.talle} </h6>
            <button className="btn btn-outline-dark my-2 my-sm-0">Comprar</button>
          </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
      producto: state.producto.producto
  };
};

export default connect(mapStateToProps,{detailProduct})(ProductDetail)