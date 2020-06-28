import React from 'react';
import Product from './Product.js';

export default function Products({ items }) {
  if(!items) return <div message="notFoundMessage">Su producto no ha sido encontrado</div>;

  return (
    <div className='products'>
      {items.map(p => 
        <Product
          name={p.nombre}
          id={p.id}
        />
      )}
    </div>
  );
}
