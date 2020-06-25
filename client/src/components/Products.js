import React from 'react';
import Product from './Product.js';

export default function Products({ items }) {
  if(!items) return <div message="notFoundMessage">Su producto no ha sido encontrado</div>;

  return (
    <div className='products'>
      {items.map(p => 
        <Product
          name={p.nombre + " " + p.color}
          price={p.precio}
          // img={p.img}
          description={"Talle: " + p.talle}
        />
      )}
    </div>
  );
}

//products deberia traer un array para poder aplicarle .map.