import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrderDetail } from '../actions/actionsAdmin.js';

export function OrderDetail({ id, order, getOrderDetail }){

    console.log(JSON.stringify(order))

    useEffect(() => { getOrderDetail(id) },[getOrderDetail, id])


    return(
        <div className="contenedor">
          <h2>ADMINISTRADOR</h2>
          <h5>Detalles de la orden</h5>
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr className="titulos">
                <th scope="col" className="item1">ID USUARIO</th>
                <th scope="col" className="item2">ID ORDEN</th>
                <th scope="col" className="item2">ESTADO</th>
                <th scope="col" className="item2">CANTIDAD DEL PRODUCTO</th>
                <th scope="col" className="item3">MONTO</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{order.usuarioId}</th>
                <td>{order.id}</td>
                <td> {order.estado}</td>
                <td> {order.cantidad_producto}</td>
                <td> $ {order.total}</td>
                <td className="botones">  
                    {/* <NavLink to="/admin/ordenes/detail">
                    <button type="button" className="btn btn-success btn-sm" onClick={() => 'prueba'}>Ver en detalle</button>
                    </NavLink> */}
                </td>
                </tr>        
            </tbody>
          </table>
        </div>
      )
}

const mapStateToProps = (state) => {
    return {
        order: state.administrador.order,
    };
  };

export default connect(mapStateToProps, { getOrderDetail })(OrderDetail);