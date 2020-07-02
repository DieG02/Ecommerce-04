import React, { useEffect } from 'react';
import Product from './Product.js';
import './Product.css';
import { connect } from 'react-redux';
import { getAll } from '../actions/actionsProductos.js';

function Products({ productos, getAll }) {
  
  useEffect(()=>{getAll()},[getAll])   

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
const mapStateToProps = (state) => {
  return {
      productos: state.productos
  };
};

export default connect(mapStateToProps, {getAll})(Products);