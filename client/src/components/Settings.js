import React from 'react';
import iconShopB from '../images/iconShopB.png';
import iconShopH from '../images/iconShopH.png';

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
    </div>
  );
}

export default Settings;