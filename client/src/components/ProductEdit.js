import React, { useState } from 'react';

export default function ProductEdit({ id, editProduct}){

  const [datos, setDatos] = useState({});

  //Busca por Id
  if(Object.keys(datos).length === 0){
    fetch(`http://localhost:1337/productos/${id}`)
      .then(res => res.json())
      .then(data => setDatos(data))
  }

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [talle, setTalle] = useState(0);
  const [category, setCategory] = useState("");
  const [action, setAction] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  const data = {
    id: id,
    nombre: name || datos.nombre,
    descripcion: description || datos.descripcion,
    talle: talle || datos.talle,
    color: color || datos.color,
    precio: price || datos.precio,
    categoria: category,
    accion: action,
    imagen: img || datos.imagen,
    stock: stock || datos.stock,
    updatedAt: null
  }

  return(
    <div>
      <form onSubmit={
          (e) => {
            e.preventDefault();
            //llamamos a una función en la API con los nuevos parámetros
            editProduct(data);
      }}>
        <div className="form-row">
          <div className="form-group col-md-2">
          <label>Id</label>
            <input 
              type="number" 
              className="form-control" 
              min="0" 
              placeholder="Ej: 1"
              id="idNumber" 
              value={datos.id} 
              disabled
            />
          </div>
          <div className="form-group col-md-10">
            <label>Nombre</label>
            <input 
              className="form-control" 
              placeholder="Nombre del producto"
              id="name"
              value={name || datos.nombre} 
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
        </div>
 
 
        <div className="form-group">
          <label>Descripción</label>
          <input 
            className="form-control" 
            placeholder="Descripción del producto"
            id="description" 
            value={description || datos.descripcion} 
            onChange={e => setDescription(e.target.value)}
          />
        </div>


        <div className="form-row">
          <div className="form-group col-md-7">
            <label>Categoría</label>
            <div className="input-group mb-3"> 
              <div className="input-group-prepend">
                <span className="text-dark input-group-text" id="inputGroup-sizing-default">Acción</span>         
                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">             
                  <option 
                    className="dropdown-item" 
                    value='agregar'
                    onMouseOver={e => e.target.style.cursor = 'pointer'} 
                    onClick={e => setAction(e.target.value)}> Agregar </option>     
                  <option 
                    className="dropdown-item" 
                    value='eliminar'
                    onMouseOver={e => e.target.style.cursor = 'pointer'} 
                    onClick={e => setAction(e.target.value)}> Eliminar </option>                               
                </div>
              </div>
              <input 
                className="form-control" 
                placeholder="Ej: remeras" 
                onChange={e => setCategory(e.target.value)} 
                required/>
            </div>
          </div>       
          <div className="form-group col-md-5">
            <label>Precio</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">$</span>
              </div>
              <input 
                className="form-control" 
                 placeholder="Precio del Producto" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default" 
                value={price || datos.precio} 
                onChange={e => setPrice(e.target.value)} 
                required/>
            </div>
          </div>
        </div>


        <div className="form-row">
          <div className="form-group col-md-2">
            <label>Colores</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <button 
                  className="btn btn-outline-secondary"
                  onClick={e => {
                    alert('Se agrego el color ' + color)
                  }} type="button">+
                </button>
              </div>
              <input 
                type="color" 
                className="form-control"
                aria-label="" 
                aria-describedby="basic-addon1"
                id="color"
                value={color || datos.color} 
                onChange={e => setColor(e.target.value)} 
                />  
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Stock</label>
            <input 
              className="form-control" 
              placeholder="Cant. disponible" 
              id="stock" 
              value={stock || datos.stock} 
              onChange={e => setStock(e.target.value)} 
              />
          </div>
          <div className="form-group col-md-4">
            <label>Talla</label>
            <input 
              className="form-control" 
              placeholder="Ej: 14,16,18" 
              id="talle" 
              value={talle || datos.talle} 
              onChange={e => setTalle(e.target.value)} 
              required/>
          </div>
        </div>
        
      
        <label>Imágenes</label>
        <div className="input-group input-group-sm mb-3">
         <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={e => {
              alert('Se agrego la imagen ' + img);
            }}>+</button>
          </div>
            <input 
              type="text" 
              className="form-control" 
              aria-label="Small" 
              aria-describedby="inputGroup-sizing-sm" 
              placeholder="Añadir imágen por URL"
              id="img"
              value={img || datos.imagen}
              onChange={e => {
                setImg(e.target.value)
              }}
            />
        </div>
    
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  )
}
 

