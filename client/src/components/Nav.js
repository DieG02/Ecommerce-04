import React from 'react';
import SearchBar from './SearchBar';
import LogBar from './LogBar';


function Nav({ onSearch }) {
  //Dentro de los props debeía tener el estado de los botones?
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">eCommerce_ft02_G4</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/">Link</a> */}
            <a className="nav-link" href="/products">Productos <span className="sr-only"></span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorias
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">Remeras</a>
              <a className="dropdown-item" href="/">Pantalones</a>
              <a className="dropdown-item" href="/">Calzado</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Temporada</a>
            </div>
          </li>
          {/* <li className="nav-item"><a className="nav-link disabled" href="#">Disabled</a></li> */}
        </ul>
        <SearchBar onSearch={onSearch}/>
        {/* <LogBar/> */}
      </div>
    </nav>
  );
};

export default Nav;
