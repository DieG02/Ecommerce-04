import React from 'react';

export default function LoginForm(){

  return(
    <div>
      <form action="http://localhost:1337/usuario/login" method="POST">
        <div className="form-group col-md-12">
          <h3 style={{paddingBottom: '20px'}}>Log In</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">@</span>
            </div>
            <input 
              type="text" 
              name="username" 
              className="form-control" 
              style={{width: '350px'}}
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
          <div className="form-group form-group-sm col-md-12">
             <a href="/password/reset">¿Olvidaste la contraseña?</a>
          </div>
        <input type="submit" className="btn btn-danger" value="Log In"/>
      </form>   
    </div>
  )
}