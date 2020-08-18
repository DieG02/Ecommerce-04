import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions/actionsCategorias';

function CategoryAdd({ addCategory }){

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const data = {
    id: id,
    nombre: name,
    descripcion: description,
  }

  return(
    <div>
      <form onSubmit={ e => {
          e.preventDefault();
          addCategory(data);
      }}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Id</label>
            <input 
              type="number" 
              className="form-control" 
              min="0" 
              placeholder="Auto"
              onChange={e => setId(e.target.value)}
              disabled
            />
          </div>
          <div className="form-group col-md-9">
            <label>Nombre</label>
            <input 
              className="form-control" 
              placeholder="Nombre de la categoría"
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Descripción</label>
          <input 
            className="form-control" 
            placeholder="Descripción de la categoría (Opcional)"
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Añadir Categoría</button>
      </form>
    </div>
  )
}

export default connect(null, { addCategory })(CategoryAdd);

