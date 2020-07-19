import React, { useEffect } from 'react';
import iconUser from '../images/iconUsuario.png';
import iconShopB from '../images/iconShopB.png';
import iconShopH from '../images/iconShopH.png';

import { connect } from 'react-redux';
import { getUserLogged, deleteUser } from '../actions/actionsUser.js';


function Settings({ logged, getUserLogged, deleteUser }){

  useEffect(() => {getUserLogged()},[getUserLogged]) 
  const path = document.getElementsByClassName('Icon');
  const carritoConEstilo = {
    border: 'none', 
    padding: '2px 9px 3px 6px',
    position: 'relative',
    top: '6px'
  }
  
  // console.log(logged);
  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         
            {logged.rol === 'Admin' ? null :
              <li>
                <a 
                  href="/cart" 
                  class="btn btn-outline-primary my-2 my-sm-0" 
                  onMouseOver={() => {path[0].src = iconShopH}} 
                  onMouseOut={() => {path[0].src = iconShopB}} 
                  style={carritoConEstilo}>
                  <img src={iconShopB} alt="Carrito" className="Icon" width="29px"/>
                </a>
              </li>
            }
         
          <li className="nav-item dropdown">

            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown">
              <img src={iconUser} alt='Usuario' width="30px"/>
            </a>

            <div className="dropdown-menu dropdown-menu-right">

              {logged.rol ? 
                <div>
                  <span className="dropdown-item" href="/">Signed as <b>{logged.nombreusuario}</b></span>
                  <div className="dropdown-divider"/>
                </div>               
              : null}
                    
              {logged.isLogin === false ?   
                <div>
                  <a className="dropdown-item" href="/usuario/add">Registrarse</a>
                  <div className="dropdown-divider"/>
                  <a className="dropdown-item" href="/login">Iniciar Sesión</a> 
                </div>  
              : null
              }

              {logged.rol ? 
                <div>
                  <a className="dropdown-item" href="/usuario/perfil">Ver Perfil</a>   
                  <a onClick={() => deleteUser(logged.id)}
                    className="dropdown-item" href="/login">Eliminar cuenta
                  </a>
                  <div className="dropdown-divider"/>
                  <a onClick={() => { fetch('http://localhost:1337/usuario/logout', { credentials: 'include' }) }}
                    className="dropdown-item" href="/login">Cerrar Sesión
                  </a>
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

export default connect(mapStateToProps, { getUserLogged, deleteUser })(Settings);