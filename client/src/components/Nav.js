import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import CategoryList from './CategoryList.js';
import Settings from './Settings.js';


function Nav({ onSearch }) {

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:1337/categorias`)
    .then(res => res.json())
    .then((data) => {
      if(data !== undefined){
        setCategory(data);
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">G-04</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/catalogo">Catálogo<span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Productos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/producto/add">Añadir</a> 
              <a className="dropdown-item" href="/producto/delete">Eliminar</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Usuario
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/usuario/perfil">Ver perfil</a> 
              <a className="dropdown-item" href="/usuario/add">Crear Usuario</a>
              <a className="dropdown-item" href="/usuario/delete">Eliminar Usuario</a>
            </div>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorias
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {category.map(item => 
                  <CategoryList
                    name={item.nombre}
                    id={item.id}
                  />
                )}
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/categorias/add">Agregar Categoría</a>
            </div>
          </li>
        </ul>
        <SearchBar onSearch={onSearch}/>
        <Settings/>
      </div>
    </nav>
  );
};

export default Nav;