import React, { useState } from 'react';

export default function ProductAdd({ addCategory }){

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
              placeholder="Ej: 1"
              // value={id} 
              onChange={e => setId(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-9">
            <label>Nombre</label>
            <input 
              className="form-control" 
              placeholder="Nombre de la categoría"
              // value={name} 
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
            // value={description} 
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Añadir Categoría</button>
      </form>
    </div>
  )
}
 

