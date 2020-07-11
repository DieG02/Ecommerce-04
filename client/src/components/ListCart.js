import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getProductsCart} from '../actions/actionsCart.js';
import ItemCart from './ItemCart.js';
import './Cart.css';

function ListCart({ carrito, getProductsCart}) {

  useEffect(() => {getProductsCart()},[getProductsCart])  

  return (
    <div className="principal-container">
      <div className="products-container">
        <h2>Mi Carrito</h2>
        <div className="border-top border-bottom border-secondary">
          {carrito.map(p => 
            <ItemCart
              id={p.id}
              img={p.imagen}  
              name={p.nombre}
              description={p.descripcion} 
              price={p.precio}              
            />
          )}
        </div>
      </div>
      <div className="total-container">
        <h3>Summary</h3>
        <div className="border-top border-bottom border-secondary" >
          <div className="subcontainer">
            <div>
              <span>SUBTOTAL</span>
              <span>$ sub</span>
            </div>
            <div>
              <span>ENVIO</span>
              <span>FREE</span>
            </div>
            <div>
              <span>IMPUESTOS</span>
              <span>$%5</span>
            </div>
          </div>
        </div>
        <div className="total">
          <span>TOTAL</span>
          <span className="precio-final">$suma</span>
        </div>      
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      carrito: state.carrito.carrito
  };
};

export default connect(mapStateToProps, { getProductsCart })(ListCart);
