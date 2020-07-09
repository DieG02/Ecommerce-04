import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/actionsUser.js';
import { edit } from '../images/iconEdit.png';
import { Form } from 'react-bootstrap'

export function Usuario ({ id, getUser, usuario }) {

  useEffect(()=>{
    getUser(id)},
    [id, getUser])

  return (
    
  <Form>
    <br></br>
    <h2> Datos del Usuario </h2>
    <br></br>
    <a title="Editar" className="iconleft" href={`http://localhost:3000/usuario/perfil/edit/${usuario.id}`}>
            <img src={edit} alt="Editar"/>
    </a>
    <fieldset disabled>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={usuario.nombre} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={usuario.apellido} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre de usuario</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={usuario.nombreusuario} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={usuario.email} />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Contraseña</Form.Label>
            <Form.Control id="disabledTextInput" placeholder={usuario.password} />
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
