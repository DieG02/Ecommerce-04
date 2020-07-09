import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/actionsUser.js';
import { edit } from '../images/iconEdit.png';
import { Form, Button } from 'react-bootstrap'

// Presentado, falta hacer que funcione con el fetch de getUser y ver por qué el botón de edit queda arriba a la izquierda y no se ve la imagen.
export function Usuario ( props ) {

    // useEffect(()=>{getUser()},[get User]) preguntarle a Nahuel

  return (
    
  <Form>
    <br></br>
    <h2> Datos del Usuario </h2>
    <br></br>
    <a title="Editar" className="iconleft" href={`http://localhost:3000/usuario/edit/${props.id}`}>
            <img src={edit} alt="Editar"/>
    </a>
    <fieldset disabled>
          <Form.Group>
            <Form.Label htmlFor="disabledTextInput">Nombre</Form.Label>
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
          </Form.Group>
    </fieldset>
  </Form>
  )
};

export default connect(null, { getUser })(Usuario)
