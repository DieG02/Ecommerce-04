<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/actionsUser.js';
import { edit } from '../images/iconEdit.png';
import { Form, Button } from 'react-bootstrap'

// Presentado, falta hacer que funcione con el fetch de getUser y ver por qué el botón de edit queda arriba a la izquierda y no se ve la imagen.
export function Usuario ( props ) {

    // useEffect(()=>{getUser()},[get User]) preguntarle a Nahuel

  return (
=======
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/actionsUser.js';
import { edit } from '../images/iconEdit.png';
import { Form } from 'react-bootstrap'

export function Usuario ({ usuario, id, getUser }) {

  useEffect(()=>{
    getUser(id)},
    [id, getUser]);

    console.log(usuario);

  return ( 
>>>>>>> VerYEditarUsuario
    
  <Form>
    <br></br>
    <h2> Datos del Usuario </h2>
    <br></br>
<<<<<<< HEAD
    <a title="Editar" className="iconleft" href={`http://localhost:3000/usuario/edit/${props.id}`}>
=======
    <a title="Editar" className="iconleft" href={`http://localhost:3000/usuario/perfil/edit/${id}`}>
>>>>>>> VerYEditarUsuario
            <img src={edit} alt="Editar"/>
    </a>
    <fieldset disabled>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
<<<<<<< HEAD
            <Form.Control id="disabledTextInput" placeholder={props.nombre} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={props.apellido} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre de usuario</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={props.email} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={props.email} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Contraseña</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={props.password} />
=======
            <Form.Control id="disabledTextInput" value={usuario.nombre} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
            <Form.Control id="disabledTextInput" value={usuario.apellido} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre de usuario</Form.Label>
            <Form.Control id="disabledTextInput" value={usuario.nombreusuario} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
            <Form.Control id="disabledTextInput" value={usuario.email} />
>>>>>>> VerYEditarUsuario
          </Form.Group>
    </fieldset>
  </Form>
  )
};

<<<<<<< HEAD
export default connect(null, { getUser })(Usuario)
=======
function mapStateToProps(state){
  return {
      usuario : state.usuario.usuario
  }
}

export default connect(mapStateToProps,{getUser})(Usuario)
>>>>>>> VerYEditarUsuario
