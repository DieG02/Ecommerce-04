import React, { useEffect } from 'react';
import iconUser from '../images/iconUsuario.png';
import { connect } from 'react-redux';
import { getUserLogged } from '../actions/actionsUser.js';


function Settings({ logged, getUserLogged }){

  useEffect(() => {getUserLogged()},[getUserLogged]) 
  console.log(logged);
  return (
    <div>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={iconUser} alt='Usuario' width="30px"/>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                {logged.rol ? 
                  <div>
                    <span className="dropdown-item" href="/">Signed as <b>{logged.nombreusuario}</b></span>
                    <div className="dropdown-divider"/>
                  </div>               
                : null}
                      
                {logged.loggedIn === false ?   
                  <div>
                    <a className="dropdown-item" href="/usuario/add">Registrarse</a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="/login">Iniciar Sesión</a> 
                  </div>  
                : null
                }

                <a className="dropdown-item" href="/cart">Ver carrito</a>    

                {logged.rol ? 
                  <div>
                    <a className="dropdown-item" href="/usuario/perfil">Ver Perfil</a>   
                    <a onClick={() => { fetch('http://localhost:1337/usuario/logout', { credentials: 'include' }) }}
                      className="dropdown-item" href="/login">Cerrar Sesión
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="/usuario/delete">Eliminar cuenta</a>
                  </div>
                : null}               
              </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    logged: state.usuario.logged
  }
};

export default connect(mapStateToProps, { getUserLogged })(Settings);