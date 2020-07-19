import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/actionsCart.js';
import edit from '../images/iconEdit.png';
import shop from '../images/iconShop.png';
import defecto from '../images/default.jpg';
import './Product.css';

export function Product ({ id, name, img, addToCart, logged }) {

  return (
    <div className="card-deck productCard">
      <div className="card">
        <div>  

          {logged.rol === 'Admin' ? 
            <a className="iconleft" href={`http://localhost:3000/producto/edit/${id}`}>
              <img src={edit} alt="Editar"/>
            </a>
          : null}
 
          {logged.rol === 'Usuario' || logged.isLogin === false ?
            <a className="iconright" onMouseOver={e => e.target.style.cursor = 'pointer'} onClick={() => addToCart(id)}>
              <img src={shop} alt="Agregar al Carrito"/>
            </a>          
          : null}
          
          <a href={`http://localhost:3000/producto/detail/${id}`}>
            <img className="card-img-top productView" src={img || defecto} alt="Product View"/>
          </a>    
        </div>
        <div className="card-body">
          <a title="Ver" href={`http://localhost:3000/producto/detail/${id}`}>
            <h6 className="card-title" style={{color: '#000'}}>{name.toUpperCase()}</h6>
          </a>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    logged: state.usuario.logged
  }
};


export default connect(mapStateToProps, { addToCart })(Product)