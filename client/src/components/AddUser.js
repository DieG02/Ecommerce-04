import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/actionsUser';

function CrearUsuario({ addUser }){

    const [input, setInput] = useState({
        email: "",
        nombre: "",
        apellido: "",
        contraseña: "",
        nombreusuario: "",
        foto: ""
    });

    const inputChange = function(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    return(
      <div>
        <form onSubmit={e => {
            e.preventDefault();
            addUser(input);
        }}>
          <div class="form-row">
            <div className="col-md-2 mb-3">
              <label>Id</label>
              <input type="number" className="form-control"  min="1"  placeholder="Auto" name= "id" disabled/>
            </div>
            <div class="col-md-5 mb-3">
              <label>Nombre</label>
              <input class="form-control" placeholder="Nombre" name= "nombre" onChange={inputChange} required/>
            </div>
            <div class="col-md-5 mb-3">
              <label>Apellido</label>
              <input class="form-control" placeholder="Apellido" name= "apellido" onChange={inputChange} required/>
            </div>
          </div>
    
       
          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label>Email</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input class="form-control" placeholder="soyHenry@gmail.com" name= "email" onChange={inputChange} required/>
              </div>         
            </div>
          </div>


          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label>Nombre usuario</label>
              <input class="form-control" placeholder="henry27" name="nombreusuario" onChange={inputChange} required/>
            </div>
            <div class="col-md-6 mb-3">
              <label>Contraseña</label>
              <input type= "password"  class="form-control" placeholder="Requerido" name= "contraseña" onChange= {inputChange} required/>
            </div>
          </div>

          <button type="submit" className="btn btn-success">Registrarse</button>
        </form>      
      </div>
    )
}

export default connect(null, { addUser })(CrearUsuario);


