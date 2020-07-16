import React, { useState} from 'react';

export default function LoginForm(){

  const [ user, setUser ] = useState({});

  function login(input){  
    return fetch('http://localhost:1337/usuario/login', {
        method: 'POST', 
        body: JSON.stringify(input), 
        headers:{ 'Content-Type': 'application/json' }
    }).then(res => {
      if(res.status === 200){   
        return window.location.replace('http://localhost:3000')
      } else {
        alert('email o contraseña incorrecta');
      }
    })
  }

  return(
    <div>
      <form action="/login" method="POST"
        onSubmit={e => {
          e.preventDefault();
          login(user) 
        }
      }>


        <div className="form-group col-md-12">
          <h3 style={{paddingBottom: '20px'}}>Log In</h3>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">@</span>
            </div>
            <input 
              type="text" 
              name="usuario" 
              className="form-control" 
              style={{width: '350px'}}
              placeholder="henry27" 
              onChange={e => setUser({...user, usuario: e.target.value})}
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
                onChange={e => setUser({...user, password: e.target.value})}
                required/>
            </div>  
          </div>
        
        <input type="submit"  className="btn btn-danger" value="Log In"/>
      </form>
    </div>
  )
}