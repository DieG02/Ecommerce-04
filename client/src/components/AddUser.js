import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userAdd } from '../actions/actionsUser';

function CrearUsuario({ userAdd }){

    const [input, setInput] = useState({
        email: "",
        nombre: "",
        contraseña: "",
    });

    const inputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }


    return(
    <div>
        <form onSubmit={ e => {
            e.preventDefault();
            userAdd(input);
        }}>
        <div className="form-row">
            <div className="form-group col-md-3">
            <label>Id</label>
            <input 
                type="number" 
                className="form-control" 
                min="0" 
                placeholder="Ej: 1"
                name= "id"
                disabled
            />
        </div>
        <div className="form-group col-md-9">
            <label>Nombre</label>
            <input 
                className="form-control" 
                placeholder="Nombre"
                name= "nombre"
                onChange={inputChange}
                required
            />
        </div>

        <div className="form-group col-md-9">
            <label>Apellido</label>
            <input 
                className="form-control" 
                placeholder="Apellido"
                name= "apellido"
                onChange={inputChange}
                required
            />
        </div>

        <div className="form-group col-md-9">
            <label>Nombre de Usuario</label>
            <input 
                className="form-control" 
                placeholder="Ej: alex93"
                name= "nombreusuario"
                onChange={inputChange}
                required
            />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input 
                className="form-control" 
                placeholder="Email (requerido)"
                name= "email"
                onChange= {inputChange}
                required
            />
        </div>

        <div className="form-group">
            <label>Contraseña</label>
            <input 
                className="form-control" 
                placeholder="Contraseña(requerido)"
                type= "password"
                name= "contraseña"
                onChange= {inputChange}
                required
            />
        </div>
        
        </div>
        <button type="submit" className="btn btn-primary">Crear usuario</button>
    </form>
    </div>
)}

export default connect(null, { userAdd })(CrearUsuario);

