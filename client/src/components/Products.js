import React from 'react';
import Product from './Product.js';

export default function Products({ items }) {
  if(!items) return <div message="notFoundMessage">Su producto no ha sido encontrado</div>;

  return (
    <div className='products'>
      {items.map(p => 
        <Product
        //----- MODIFY -----
        
        //En base a lo que devuelve el BE
          name={p.name}
          price={p.price}
          // img={p.img}
          description={p.description}
        />
      )}
    </div>
  );
}

//products deberia traer un array para poder aplicarle .map.