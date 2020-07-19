import React, { useEffect, useState } from 'react';
import './ProductDetail.css'
import { connect } from 'react-redux';
import { detailProduct, addReview } from '../actions/actionsProductos.js';
import { addToCart } from '../actions/actionsCart.js';
import ReactStars from "react-rating-stars-component";

function ProductDetail ({ id, detailProduct, addToCart, producto, addReview }) {
  
  const [review, setReview] = useState({});
  useEffect(() => { detailProduct(id) }, [id, detailProduct]);
  
  return (
    <div>
      <div className="mi-contenedor">
        <div className="img-container">
          <img src={producto.imagen} alt="Imagen en detalle"/>
        </div>
        <div className="data-container">
          <div className="nombre-container">
            <h2>{producto.nombre}</h2>
              <ReactStars
                count={5}
                onChange={ rating => 
                  setReview({ ...review, puntuacion: rating}) 
                }
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />            
          </div>
          <div className="input-group input-group-sm mb-3 review">
            <input 
              className="form-control" 
              placeholder="Dejá tu comentario" //comentario de la review
              onChange={ e => 
                setReview({ ...review, comentario: e.target.value}) 
              }
            />
            <div className="input-group-append">
              <button className="btn btn-info" onClick={() => addReview(id, review)}>Añadir</button>
            </div>
          </div>
          <div className="precio-container">
            <h4>$ {producto.precio}</h4>
            <p>Stock disponible {producto.stock}</p>
          </div>
          <div className="info-container">
            <h5>Descripcion del producto</h5>
            <p> {producto.descripcion || 'Este producto no tiene descripción'} </p>  
            <div className="color-talle">
              <span> Colores <div style={{backgroundColor: producto.color, width: '20px', height: '20px'}}></div> </span>
              <span> Talle {producto.talle} </span>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn btn-outline-success" onClick={() => addToCart(id)}>Añadir al carrito</button> 
          </div>         
        </div>           
      </div>
    </div>
  )
};


function mapStateToProps(state){
  return {
      producto: state.producto.producto,
      reviews: state.producto.reviews
  }
}

export default connect (mapStateToProps,{ detailProduct, addToCart, addReview })(ProductDetail)