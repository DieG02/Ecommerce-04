import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editProduct, detailProduct } from '../actions/actionsProductos.js';

function ProductEdit({ id, producto, editProduct, detailProduct }){

const [input, setInput] = useState({
  nombre: "",
  descripcion: "",
  talle: "",
  color: "",
  precio: "",
  imagen: "",
  stock: "",
});

const[category, setCategory] = useState({
  nombre:"",
  accion:""
})

const inputChange = function(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

const setCategoryChange = function(e){
    setCategory({
        ...category,
        [e.target.name] : e.target.value
    })
}

useEffect( () => {
  detailProduct(id)},
  [detailProduct, id])

  return(
    <div>
      <form onSubmit={
          (e) => {
            e.preventDefault();
            editProduct(id, input, category);
      }}>
        <div className="form-row">
          <div className="form-group col-md-2">
          <label>Id</label>
            <input 
              type="number" 
              className="form-control" 
              min="0" 
              placeholder= {producto.id}
              name="id" 
              value={producto.id} 
              disabled
            />
          </div>
          <div className="form-group col-md-10">
            <label>Nombre</label>
            <input 
              className="form-control" 
              type= "text"
              placeholder={producto.nombre}
              name="nombre"
              onChange= {inputChange}
              required
            />
          </div>
        </div>


        <div className="form-group">
          <label>Descripción</label>
          <input 
            className="form-control" 
            type= "text"
            placeholder= {producto.descripcion}
            name="descripcion" 
            onChange= {inputChange}
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
                    name= "accion"
                    onMouseOver={e => e.target.style.cursor = 'pointer'} 
                    onClick={setCategoryChange}> Agregar </option>     
                  <option 
                    className="dropdown-item"
                    value='eliminar'
                    name= "accion"
                    onMouseOver={e => e.target.style.cursor = 'pointer'} 
                    onClick={setCategoryChange}> Eliminar </option>                               
                </div>
              </div>
              <input 
                className="form-control" 
                placeholder="Ej: remeras"
                name= "categoria"
                onChange= {setCategoryChange}/>
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
                placeholder= {producto.precio}
                name= "precio"
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange= {inputChange}
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
                    alert('Se agrego el color ' + input.color)
                  }} type="button">+
                </button>
              </div>
              <input 
                type="color" 
                className="form-control"
                aria-label="" 
                aria-describedby="basic-addon1"
                name="color"
                onChange= {inputChange} 
                />  
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Stock</label>
            <input 
              className="form-control" 
              type= "number"
              placeholder= {producto.stock} 
              name="stock"
              onChange= {inputChange} 
              />
          </div>
          <div className="form-group col-md-4">
            <label>Talla</label>
            <input 
              className="form-control"
              type= "text"
              placeholder= {producto.talle} 
              name="talle" 
              onChange= {inputChange} 
              required/>
          </div>
        </div>
        
      
        <label>Imágenes</label>
        <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={e => {
              alert('Se agrego la imagen ' + input.img);
            }}>+</button>
          </div>
            <input 
              type="text" 
              className="form-control" 
              aria-label="Small" 
              aria-describedby="inputGroup-sizing-sm" 
              placeholder= {producto.img}
              name="imagen"
              onChange= {inputChange}
            />
        </div>
    
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      producto: state.producto.producto
  };
};

export default connect(mapStateToProps,{editProduct, detailProduct})(ProductEdit)
