import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllOrders } from '../actions/actionsAdmin.js';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './Admin.css';


export function AdminOrders({ orders, getAllOrders }){

  useEffect(() => { getAllOrders() },[getAllOrders])  
console.log(orders)
  return(
    <div className="contenedor">
      <h2>ADMINISTRADOR</h2>
      <h5>Lista de todas las ordenes</h5>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr className="titulos">
            <th scope="col" className="item1">ID USUARIO</th>
            <th scope="col" className="item2">ID ORDEN</th>
            <th scope="col" className="item3">MONTO</th>
            <th scope="col" className="item3">ACCION</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => 
            { return (
              <tr>
                <th scope="row">{order.usuarioId}</th>
                <td>{order.id}</td>
                <td> $ {order.total}</td>
                <td className="botones">  
                  <NavLink to={`/admin/ordenes/detail/${order.id}`}>
                    <button type="button" className="btn btn-success btn-sm" onClick={() => 'prueba'}>Ver en detalle</button>
                  </NavLink>
                </td>
              </tr>        
            )}
          )}
      
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      orders: state.administrador.orders,
  };
};

export default connect(mapStateToProps, { getAllOrders })(AdminOrders);
