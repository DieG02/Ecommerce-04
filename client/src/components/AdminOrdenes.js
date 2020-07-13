import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllOrders, deleteUser } from '../actions/actionsAdmin.js';
import './Admin.css';

export function AdminOrdenes({ orders, getAllOrders, usuarios }){

  useEffect(() => { getAllOrders() },[getAllOrders])  

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
                <td>{order.total}</td>
                <td className="botones">  
                  <button type="button" className="btn btn-success btn-sm">Ver en detalle</button>
                  {/* <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteUser(order.id)}>Eliminar</button> */}
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
      usuarios: state
  };
};

export default connect(mapStateToProps, { getAllOrders })(AdminOrdenes);
