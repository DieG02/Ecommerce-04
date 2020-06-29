import React from 'react';
// import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
// import LogBar from './LogBar';


function Nav({ onSearch, addCategory }) {

  function getDataCategory(){
    setTimeout(() => {
      const id = prompt('ID de la nueva categoría');
      if(id === null) return alert('Se ha cancelado la operación');
      const name = prompt('¿El nombre de la Categoría?');
      if(name === null) return alert('Se ha cancelado la operación');
      const description = prompt('¿Una descripción?', 'Opcional...');

      const data = {
        id: id,
        nombre: name,
        descripcion: description
      }
      if(data.id === "" || data.nombre === ""){
        return prompt('Id y Nombre son obligatorios, No se ha podido crear la Categoría');
      } else{
        addCategory(data)
      }
    }, 1000)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">eCommerce_ft02_G4</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Catálogo<span className="sr-only">(current)</span></a>
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
              Categorias
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/categorias/remeras">Remeras</a>
              <a className="dropdown-item" href="/categorias/pantalones">Pantalones</a>
              <a className="dropdown-item" href="/categorias/calzado">Calzado</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={() => getDataCategory()}>Agregar Categoría</a>
            </div>
          </li>
        </ul>
        <SearchBar onSearch={onSearch}/>
        {/* <LogBar/> */}
      </div>
    </nav>
  );
};

export default Nav;
