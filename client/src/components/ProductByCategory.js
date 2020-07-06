import React, { useState, useEffect } from 'react';
import Product from './Product.js';
import './Product.css'
import { connect } from 'react-redux';
import { productByCategory } from '../actions/actionsProductos.js';

function ProductXCategory({ id, productos, productByCategory}) {
  
    useEffect(()=>{
      productByCategory(id)},
      [id, productByCategory])

  return (
    <div className='products'>
      {productos.map(p => 
        <Product
          id={p.id}
          name={p.nombre}
          img={p.imagen}
        />
      )}
    </div>
  );
}

function mapStateToProps(state){
  return {
      productos: state.producto.productos
  }
}

export default connect (mapStateToProps,{productByCategory})(ProductXCategory)
