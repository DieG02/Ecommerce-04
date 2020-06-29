import React from 'react';
import Product from './Product.js';
import './Product.css'

export default function Products({ items }) {
  if(!items) return <div message="notFoundMessage">Su producto no ha sido encontrado</div>;

  return (
    <div className='products'>
      {items.map(p => 
        <Product
          id={p.id}
          name={p.nombre}
          img={p.imagen}
        />
      )}
    </div>
  );
}
