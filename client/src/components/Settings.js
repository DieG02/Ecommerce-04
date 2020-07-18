import React from 'react';
import iconShopB from '../images/iconShopB.png';
import iconShopH from '../images/iconShopH.png';
import iconLogout from '../images/iconLogout.png';

function Settings(){
  const path = document.getElementsByClassName('Icon');
  return (
    <div>
      <a 
        href="/cart" 
        class="btn btn-outline-primary my-2 my-sm-0" 
        onMouseOver={() => {path[0].src = iconShopH}} 
        onMouseOut={() => {path[0].src = iconShopB}} 
        style={{
          border: 'none', 
          padding: '4px 9px 4px 6px',
        }}>
        <img src={iconShopB} alt="Carrito" className="Icon" width="30px"/>
      </a>
       <a 
        href="/logout" 
        onClick={() =>  {
          fetch('http://localhost:1337/usuario/logout', { credentials: 'include' })
        }}
        class="btn btn-outline-primary my-2 my-sm-0" 
        style={{
          border: 'none', 
          padding: '4px 6px 7px 9px',
        }}>
        <img src={iconLogout} alt="Cerrar Sesión" className="Icon" width="25px"/>
      </a>
    </div>
  );
}

export default Settings;