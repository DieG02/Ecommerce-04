import React, { useState, useEffect } from 'react';
import './ProductDetail.css'

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
    <div className="container" >
      <div class="row">
        <div class="col-8">
          <div className="card-deck">  
            <div className="card">
              <img className="card-img-top productView" src={product.imagen} alt=""/>
            </div>
          </div>
        </div>
          <div className="propiedades" class="col-4">
              <h3 className="text">{product.nombre}</h3>
              <h2 className="text">$ {product.precio}</h2>
              <br/>
                <p className="text"> {product.descripcion}</p>  
              <h6 className="text">Color: {product.color} </h6>
              <h6 className="text">Talle: {product.talle} </h6>
            <button className="btn btn-outline-dark my-2 my-sm-0">Comprar</button>
          </div>
      </div>
    </div>
  )
};