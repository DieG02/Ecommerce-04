import React, { useState, useEffect } from 'react';
import Color from './Color'
import Talle from './Talle'
// import image from '../images/zapatillas.jpg';

export default function ProductDetail ({ match }) {
  const { id } = match.params;

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:1337/productos/${id}`)
    .then(res => res.json())
    .then((data) => {
      if(data !== undefined){
        setProduct(data);
      }
    });
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div className="card-deck">  
            <div className="card">
              <h2 style={{color:`black`, alignSelf:`right`}}> {product.nombre}</h2>
              <img className="card-img-top productView" src={product.imagen} alt="Product View"/>
              <p style={{color:`black`}}> $ {product.precio} </p>
            </div>
          </div>
        </div>
        <div class="col-4">        
          <Color />
          <br/>
          <Talle />
        </div>
      </div>
    </div>
  )
};