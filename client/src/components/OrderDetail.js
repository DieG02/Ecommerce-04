import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrderDetail } from '../actions/actionsAdmin.js';
import ItemCart2 from './ItemCartForOrderDetail.js';

export function OrderDetail({ id, order, getOrderDetail }){

    useEffect(() => { getOrderDetail(id) }, [])

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
                <th scope="col" className="item2">PRODUCTOS</th>
                <th scope="col" className="item2">CANTIDAD DEL PRODUCTO</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{order.usuarioId}</th>
                <td>{id}</td>
                <td> {order.estado}</td>
                <td> {order.product && order.product.map(p =>            
             <ItemCart2
              id={p.id}
              img={p.imagen}  
              name={p.nombre}
              description={p.descripcion} 
              price={p.precio}    
               />
              )}
                </td>
                <td> {order.cantidad_producto}</td>
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