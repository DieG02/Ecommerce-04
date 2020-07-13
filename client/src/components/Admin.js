import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, viewUser, deleteUser } from '../actions/actionsAdmin.js';
import './Admin.css';

export function Admin({ usuarios, getAllUsers, deleteUser, viewUser }){

  useEffect(() => { getAllUsers() },[getAllUsers])  

  return(
    <div className="contenedor">
      <h2>ADMINISTRADOR</h2>
      <h5>Lista de todos los usuarios</h5>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr className="titulos">
            <th scope="col" className="item1">NOMBRE</th>
            <th scope="col" className="item2">APELLIDO</th>
            <th scope="col" className="item3">EMAIL</th>
            <th scope="col" className="item4">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(user => 
            { return (
              <tr>
                <th scope="row">{user.nombre}</th>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td className="botones">  
                  <button type="button" className="btn btn-success btn-sm" onClick={() => viewUser(user.id)}>Ver Perfil</button>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)}>Eliminar</button>
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
      usuarios: state.administrador.usuarios
  };
};

export default connect(mapStateToProps, { getAllUsers, deleteUser, viewUser })(Admin);
