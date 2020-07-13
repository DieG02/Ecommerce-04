import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/actionsProductos.js';

function ProductAdd({ addProduct }){
  // const [name, setName] = useState({
  //   name: "",
  //   description:"",
  //   stock: "",
  //   talle: "",
  //   color: "",
  //   price: "",
  //   img: ""
  // });


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [talle, setTalle] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  const data = {
    nombre: name,
    descripcion: description,
    talle: talle,
    color: color,
    precio: price,
    imagen: img,
    stock: stock,
    createdAt: null
  }
    
  return(
    <div>
      <form onSubmit={
          (e) => {
            e.preventDefault();
            addProduct(data);
      }}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Nombre</label>
            <input 
              className="form-control" 
              placeholder="Nombre del producto"
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>


        <div className="form-group">
          <label>Descripción</label>
          <input 
            className="form-control" 
            placeholder="Descripción del producto (Opcional)"
            onChange={e => setDescription(e.target.value)}
          />
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
                onChange={e => setColor(e.target.value)} 
                />  
            </div>
          </div>
          <div className="form-group col-md-3">
            <label>Stock</label>
            <input 
              className="form-control" 
              placeholder="Cant. disponible" 
              onChange={e => setStock(e.target.value)} 
              />
          </div>
          <div className="form-group col-md-4">
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
                onChange={e => setPrice(e.target.value)} 
                required/>
            </div>
          </div>
          <div className="form-group col-md-3">
            <label>Talla</label>
            <input 
              className="form-control" 
              placeholder="Ej: 20" 
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
              onChange={e => {
                setImg(e.target.value)
              }}
              required
            />
        </div>
    
        <button type="submit" className="btn btn-primary">Añadir</button>
      </form>
    </div>
  )
}

export default connect(null,{addProduct})(ProductAdd)

