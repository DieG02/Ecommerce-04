import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, viewUser, deleteUser, promoteUser } from '../actions/actionsAdmin.js';
import './Admin.css';

export function Admin({ usuarios, usuario, getAllUsers, deleteUser, viewUser, editUser }){

  useEffect(() => { getAllUsers() },[getAllUsers])
  
  const [input, setInput] = useState({});

  useEffect(() => {
      setInput(usuario);
    }, [usuario]);

  const inputChange = function(e){  
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

  return(
    <div className="contenedor">
       <form onSubmit={ e => {
            e.preventDefault();
            promoteUser(input.id, input);
        }}>
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
                      <button type="button" className="btn btn-warning btn-sm" onClick={() => promoteUser(user.id)}>Promover</button> 
                    </td>
                  </tr>        
                )}
              )}
          
          </tbody>
        </table>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      usuarios: state.administrador.usuarios
  };
};

export default connect(mapStateToProps, { getAllUsers, deleteUser, viewUser, promoteUser })(Admin);
