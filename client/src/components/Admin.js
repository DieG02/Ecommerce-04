import React from 'react';
import './Admin.css';
export default function Admin(){


  return(
    <div className="contenedor">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr className="titulos">
            <th scope="col">NOMBRE</th>
            <th scope="col">APELLIDO</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Mark</th>
            <td>Otto</td>
            <td>nombreapellidofecha@gmail.com</td>
            <td className="botones">  
              <button type="button" className="btn btn-success btn-sm">Editar</button>
              <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
          <tr>
            <th scope="row btn-sm">Mark</th>
            <td>Otto</td>
            <td>nombreapellidofecha@gmail.com</td>
            <td className="botones">   
              <button type="button" className="btn btn-success btn-sm">Editar</button>
              <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
          <tr>
            <th scope="row btn-sm">Mark</th>
            <td>Otto</td>
            <td>nombreapellidofecha@gmail.com</td>
            <td className="botones">   
              <button type="button" className="btn btn-success btn-sm">Editar</button>
              <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}