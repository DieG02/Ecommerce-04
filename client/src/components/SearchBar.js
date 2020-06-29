import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [name, setName] = useState("");

  return (
    <form 
      className="form-inline my-2 my-lg-0" 
      onSubmit={
        e => {
          e.preventDefault();
          onSearch(name);
       }}>

      <input 
        className="form-control mr-sm-2" 
        type="search" 
        placeholder="¿Qué estás buscando?" 
        aria-label="Search"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button 
        className="btn btn-outline-dark my-2 my-sm-0" 
        style={{border: 'none'}} 
        type="submit">Buscar
      </button>
    </form>
  );
}



