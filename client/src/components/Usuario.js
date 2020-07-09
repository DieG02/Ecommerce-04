import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/actionsUser.js';
import { edit } from '../images/iconEdit.png';
import { Form } from 'react-bootstrap'

export function Usuario ({ id, getUser, nombre, apellido, nombreusuario, email, password }) {

  useEffect(()=>{
    getUser(id)},
    [id, getUser])

  return (
    
  <Form>
    <br></br>
    <h2> Datos del Usuario </h2>
    <br></br>
    <a title="Editar" className="iconleft" href={`http://localhost:3000/usuario/perfil/edit/${id}`}>
            <img src={edit} alt="Editar"/>
    </a>
    <fieldset disabled>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={nombre} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={apellido} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre de usuario</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={nombreusuario} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={email} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Contraseña</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={password} />
          </Form.Group>
    </fieldset>
  </Form>
  )
};

function mapStateToProps(state){
  return {
      usuario : state.usuario
  }
}

export default connect(mapStateToProps,{getUser})(Usuario)
