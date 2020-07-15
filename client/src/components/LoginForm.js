import React, { useState} from 'react';

export default function LoginForm(){

  const [ user, setUser ] = useState({});

  function login(input){  
    return fetch('http://localhost:1337/auth/login', {
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
        <input type="email" name="email" onChange={e => setUser({...user, email: e.target.value})}/>
        <input type="password" name="password" onChange={e => setUser({...user, password: e.target.value})}/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}