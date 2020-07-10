import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getProductsCart, cart } from '../actions/actionsCart.js';
import ItemCart from './ItemCart.js';
import './Cart.css';

function ListCart({ carrito, productosCarrito, getProductsCart, cart }) {

  useEffect(() => {getProductsCart()},[getProductsCart])  
  useEffect(() => {cart(carrito)},[cart]);

  return (
    <div style={{display: 'flex'}}>
      <div className="contenedor">
        <h2>Shopping Cart</h2>
        <div className="border-top border-bottom border-secondary">
          {productosCarrito.map(p => 
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
      <div className="contenedor subcontenedor">
        <h3>Summary</h3>
        <div className="border-top border-bottom border-secondary">
          <div className="subtotal">
            <div>
              <p>SUBTOTAL</p>
              <p>ENVIO</p>
              <p>IMPUESTOS</p>        
            </div>
            <div className="p">
              <p>$ sub</p>
              <p>FREE</p>
              <p>$ %5</p>
            </div>
          </div>
        </div>
        <div className="subtotal total">
          <p>TOTAL</p>
          <p>$suma</p>
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

export default connect(mapStateToProps, { getProductsCart, cart })(ListCart);
