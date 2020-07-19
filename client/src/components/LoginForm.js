import React from 'react';
import './LoginForm.css';

export default function LoginForm(){

  return(
    <div>
      <form action="http://localhost:1337/usuario/login" method="POST" className="login-form">
        <div className="form-group col-md-12">
          <h3>Iniciar Sesión</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">@</span>
            </div>
            <input 
              name="username" 
              className="form-control" 
              placeholder="henry27"            
              required/>
          </div>  
        </div>   
        <div className="form-group col-md-12">
          <div className="input-group mb-3">
            <input 
              type="password"
              name="password" 
              className="form-control" 
              placeholder="Contraseña" 
              required/>
          </div>  
        </div>
        <div class="form-row" id="bottom">
          <div className="form-group col-md-9">
            <a href="/password/reset">¿Olvidaste la contraseña?</a>
          </div>
          <div className="form-group col-md-3">
            <input type="submit" className="btn btn-info" value="Log In" id="input"/>
          </div>
        </div>
 
        
      </form>   
    </div>
  )
}