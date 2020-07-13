import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editUser, getUser } from '../actions/actionsUser';

function EditarUsuario({ id, editUser, usuario, getUser }){

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

    useEffect( () => {
        getUser(id)},
        [getUser, id])

    return(
    <div>
        <form onSubmit={ e => {
            e.preventDefault();
            editUser(input.id, input);
        }}>
        <div className="form-row">
            <div className="form-group col-md-3">
                <label>Id</label>
                <input 
                    type="number" 
                    className="form-control" 
                    min="0" 
                    value={input.id}
                    name= "id"
                    disabled
                />
            </div>
            <div className="form-group col-md-3">
                <label>Nombre</label>
                <input 
                    className="form-control"
                    type= "text"
                    value={input.nombre}
                    name= "nombre"
                    onChange={inputChange}
                />
            </div>

            <div className="form-group col-md-3">
                <label>Apellido</label>
                <input 
                    className="form-control" 
                    value={input.apellido}
                    name= "apellido"
                    onChange={inputChange}
                />
            </div>

            <div className="form-group col-md-3">
                <label>Email</label>
                <input 
                    className="form-control" 
                    value={input.email}
                    name= "email"
                    onChange={inputChange}
                />
            </div>

            <div className="form-group col-md-3">
                <label>Nombre de Usuario</label>
                <input 
                    className="form-control" 
                    value={input.nombreusuario}
                    name= "nombreusuario"
                    onChange={inputChange}
                />
            </div>

            <div className="form-group col-md-3">
                <label>Contraseña</label>
                <input 
                    className="form-control" 
                    value={input.contraseña}
                    type= "password"
                    name= "contraseña"
                    onChange= {inputChange}
                />
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
    </div>
)}

const mapStateToProps = (state) => {
    return {
        usuario: state.usuario.usuario
    };
  };

export default connect(mapStateToProps, { editUser, getUser })(EditarUsuario);

