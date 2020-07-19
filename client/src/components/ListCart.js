import React, { useEffect} from "react";
import { connect } from 'react-redux';
import { getProductsCart, setOrder } from '../actions/actionsCart.js';
import ItemCart from './ItemCart.js';
import { Button } from 'reactstrap';
import './ListCart.css';
import './Cart.css';

function ListCart({ carrito, getProductsCart, setOrder }) {

  useEffect(() => {getProductsCart()},[getProductsCart])
  useEffect(() => {setOrder()},[setOrder])

  // console.log(carrito)
   var ordenId = carrito.map(p => p.ordenproducto.ordenId)
  console.log(ordenId)

  // carrito.map(p => console.log(p.ordenproducto.ordenId))

  let subtotal = 0;
  carrito.map(p => {
    return subtotal += p.precio;
  })
  let impuestos = subtotal * 0.05;  //Impuesto del %5 como ejemplo

 

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
              stock={p.stock}     
            />
          )}
        </div>
        <div className="comprar">
        <Button className="comprar" color="success" size="lg" onClick={() => setOrder(ordenId)} >Comprar</Button>{}
        </div>
      </div>
      <div className="total-container">
        <h3>Summary</h3>
        <div className="border-top border-bottom border-secondary" >
          <div className="subcontainer">
            <div>
              <span>SUBTOTAL</span>
              <span>$ {subtotal}</span>
            </div>
            <div>
              <span>ENVIO</span>
              <span>FREE</span>
            </div>
            <div>
              <span>IMPUESTOS</span>
              <span>$ {impuestos}</span>
            </div>
          </div>
        </div>
        <div className="total">
          <span>TOTAL</span>
          <span className="precio-final">$ {subtotal + impuestos}</span>
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

export default connect(mapStateToProps, { getProductsCart, setOrder })(ListCart);