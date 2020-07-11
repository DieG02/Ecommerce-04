import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editProduct, detailProduct } from '../actions/actionsProductos.js';

function ProductEdit({ id, producto, editProduct, detailProduct }){

const [input, setInput] = useState({
  id: id,
  nombre: "",
  descripcion: "",
  talle: "",
  color: "",
  precio: "",
  imagen: "",
  stock: "",
});

const[category, setCategory] = useState({
  categoria:"",
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
              value={input.nombre || producto.nombre}
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
            value={input.descripcion || producto.descripcion}
            name="descripcion" 
            onInput={inputChange}
          />
        </div>


        <div className="form-row">
          <div className="form-group col-md-7">
            <label>Categoría</label>
            <div className="input-group mb-3">
            <input
                type= "text"
                className="form-control" 
                placeholder="agregar/eliminar"
                name="accion"
                onInput={setCategoryChange}/>
              <input
                type="text"
                className="form-control" 
                placeholder="Ej: Deportes"
                name="categoria"
                onInput={setCategoryChange}/>
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
                name="precio"
                value={input.precio || producto.precio}
                onInput={inputChange}
                required
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
                name="color"
                value={input.color || producto.color}
                onInput={inputChange} 
                />  
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Stock</label>
            <input 
              className="form-control" 
              type="number"
              placeholder={'Cantidad disponible'} 
              name="stock"
              value={input.stock || producto.stock}
              onInput={inputChange} 
              />
          </div>
          <div className="form-group col-md-4">
            <label>Talla</label>
            <input 
              className="form-control"
              type="text"
              placeholder={'Ej: 30,32 o S,M'} 
              name="talle" 
              value={input.talle || producto.talle}
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
              type="button" >+
            </button>
          </div>
            <input 
              type="text" 
              className="form-control" 
              placeholder={'Una imagen es requerida'}
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
