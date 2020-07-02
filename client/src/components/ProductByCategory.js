import React, { useState, useEffect } from 'react';
import Product from './Product.js';
import './Product.css'

export default function ProductByCategory({ match }) {

    const { id } = match.params;
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:1337/categorias/${id}`)
      .then(res => res.json())
      .then((data) => {
        if(data !== undefined){
          setProducts(data);
        }
      });
    }, []);

  return (
    <div className='products'>
      {products.map(p => 
        <Product
          id={p.id}
          name={p.nombre}
          img={p.imagen}
        />
      )}
    </div>
  );
}
