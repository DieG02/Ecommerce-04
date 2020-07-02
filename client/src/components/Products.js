import React from 'react';
import Product from './Product.js';
import './Product.css';
import {connect } from 'react-redux';

function Products({ props }) {
  if(!props) return <div message="notFoundMessage">Su producto no ha sido encontrado</div>;

  return (
    <div className='products'>
      {props.productos.map(p => 
        <Product
          id={p.id}
          name={p.nombre}
          img={p.imagen}
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
      productos: state.productos
  };
};

export default connect(mapStateToProps)(Products);