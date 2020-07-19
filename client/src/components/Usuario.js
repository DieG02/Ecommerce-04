import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserLogged } from '../actions/actionsUser.js';
import edit from '../images/iconEdit.png';
import { Form } from 'react-bootstrap';
import './Usuario.css';

function Usuario ({ logged, id, getUserLogged }) {

  useEffect(()=>{getUserLogged()},[id, getUserLogged]);
  return ( 
    
    <Form>
      <br></br>
      <h2> Datos del Usuario </h2>
      <br></br>
      <a title="Editar" className="iconleft" href={`http://localhost:3000/usuario/perfil/edit/${logged.id}`}>
        <img src={edit} alt="Editar"/>Editar
      </a>
      <fieldset disabled>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
              <Form.Control id="disabledTextInput" value={logged.nombre} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Apellido</Form.Label>
              <Form.Control id="disabledTextInput" value={logged.apellido} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Nombre de usuario</Form.Label>
              <Form.Control id="disabledTextInput" value={logged.nombreusuario} />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
              <Form.Control id="disabledTextInput" value={logged.email} />
            </Form.Group>
      </fieldset>
    </Form>
  )
};

function mapStateToProps(state){
  return {
      logged: state.usuario.logged
  }
}

export default connect(mapStateToProps,{ getUserLogged })(Usuario)
