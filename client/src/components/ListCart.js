import React, { useState } from "react";
import { connect } from 'react-redux';
import { onSearch } from '../actions/actionsProductos.js';
import ItemCart from './ItemCart.js';
import './Cart.css';

function ListCart({onSearch}) {

  return (
    <div style={{display: 'flex'}}>
      <div className="contenedor">
        <h2>Shopping Cart</h2>
        <div className="border-top border-bottom border-secondary">
          <ItemCart/>
          <ItemCart/>
          <ItemCart/>
        </div>
      </div>
      <div className="contenedor subcontenedor">
        <h3>Summary</h3>
        <div className="border-top border-bottom border-secondary">
          <div className="subtotal">
            <div>
              <p>SUBTOTAL</p>
              <p>SHIPPING</p>
              <p>TAXES</p>        
            </div>
            <div className="p">
              <p>$ sub</p>
              <p>FREE</p>
              <p>$ transp.</p>
            </div>
          </div>
        </div>
        <div className="subtotal total">
          <p>TOTAL</p>
          <p>$sub+transp</p>
        </div>
      </div>
    </div>
  );
}

export default connect(null,{onSearch})(ListCart)