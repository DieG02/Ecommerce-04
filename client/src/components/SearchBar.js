  
import React, { useState } from "react";
import { connect } from 'react-redux';
import { onSearch } from '../actions/actionsProductos.js';
import iconSearchH from '../images/iconSearchH.png';

function SearchBar({onSearch}) {

  const [name, setName] = useState("");
  const path = document.getElementsByClassName('icono')
  return (
    <form 
      className="form-inline my-2 my-lg-0" 
      onSubmit={
        e => {
          e.preventDefault();
          onSearch(name);
        }}>              
        <div className="input-group mr-sm-2">
          <div className="input-group-prepend">
            <button 
              className="btn btn-primary my-2 my-sm-0" 
              type="submit"
              
              onMouseOut={() => {path[0].src = iconSearchH}} 
              style={{
                borderRight: 'none',
                padding: '4px 6px'
                }}>
              <img src={iconSearchH} className="icono" alt="Buscar" width="25"/>
            </button>
          </div>
          <input 
            className="form-control mr-sm-2 border-left-0 border-primary" 
            type="search" 
            placeholder="¿Qué estás buscando?" 
            aria-label="Search"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
    </form>
  );
}

export default connect(null,{onSearch})(SearchBar)

