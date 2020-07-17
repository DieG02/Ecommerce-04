import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editProduct, detailProduct } from '../actions/actionsProductos.js';

function ProductEdit({ id, producto, editProduct, detailProduct }){

const [input, setInput] = useState({});

const[category, setCategory] = useState({})


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

  useEffect(() => {
    setInput(producto);
  }, [producto]);

  return(
    <div >
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
              value={input.id}
              placeholder={producto.id}
              name="id"
              disabled
            />
          </div>
          <div className="form-group col-md-10">
            <label>Nombre</label>
            <input 
              className="form-control" 
              type="text"
              value={input.nombre}
              placeholder={producto.nombre}
              name="nombre"
              onChange={inputChange}
              required
            />
          </div>
        </div>


        <div className="form-group">
          <label>Descripción</label>
          <input 
            className="form-control" 
            type="text"
            value={input.descripcion}
            placeholder="Descripcion del producto"
            name="descripcion" 
            onInput={inputChange}
          />
        </div>


        <div className="form-row">
          <div className="form-group col-md-7">
            <label>Categoría</label>
            <div className="input-group mb-3">
            <input
                type="text"
                className="form-control" 
                value={input.accion}
                placeholder="agregar/eliminar"
                name="accion"
                onInput={setCategoryChange}/>
              <input
                type="text"
                className="form-control" 
                placeholder="Ej: Deportes"
                value={input.categoria}
                name="categoria"
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
                placeholder="Precio del producto"
                value={input.precio}
                name="precio"
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default"
                onChange={inputChange}
              />
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
                  onClick={() => alert('Se agrego el color ' + input.color)} 
                  type="button">+
                </button>
              </div>
              <input 
                type="color" 
                className="form-control"
                aria-label="" 
                aria-describedby="basic-addon1"
                value={input.color}
                name="color"
                onInput={inputChange} 
                />  
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Stock</label>
            <input 
              className="form-control" 
              type="number"
              placeholder="Disponible"
              value={input.stock}
              name="stock"
              onInput={inputChange} 
              />
          </div>
          <div className="form-group col-md-4">
            <label>Talla</label>
            <input 
              className="form-control"
              type="text"
              placeholder="Ej: SM o 20"
              value={input.talle} 
              name="talle" 
              onInput={inputChange} 
            />
          </div>
        </div>
        
      
        <label>Imágenes</label>
        <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
            <button 
              className="btn btn-outline-secondary" 
              onClick={() => alert('Se agrego la imagen ' + input.imagen)}
              type="button">+
            </button>
          </div>
            <input 
              type="text" 
              className="form-control" 
              aria-label="Small" 
              aria-describedby="inputGroup-sizing-sm" 
              placeholder="Imagen (requerido)"
              value= {input.imagen}
              name="imagen"
              onInput={inputChange}
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













































