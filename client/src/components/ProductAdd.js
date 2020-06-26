import React, { useState } from 'react';

  const arrImg = [];
  const arrColor = [];

export default function ProductAdd({ addProduct }){

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [talle, setTalle] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const data = {
    id: id,
    nombre: name,
    descripcion: description,
    talle: talle.split(','),
    color: arrColor,
    precio: price,
    imagen: arrImg,
    stock: stock,
    createdAt: null
  }
    
  return(
    <div>
      <form onSubmit={
          (e) => {
            e.preventDefault();
            //llamamos a una función en la API con los parámetros
            addProduct(data);
      }}>
        <div className="form-row">
          <div className="form-group col-md-2">
            <label>Id</label>
            <input 
              type="number" 
              className="form-control" 
              min="0" 
              placeholder="Ej: 1"
              // id="idNumber" 
              // value={id} 
              onChange={e => setId(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-10">
            <label>Nombre</label>
            <input 
              className="form-control" 
              placeholder="Nombre del producto"
              // id="name"
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
            placeholder="Descripción del producto"
            // id="description" 
            // value={description} 
            onChange={e => setDescription(e.target.value)}
            required
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
                    arrColor.push(color); 
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
                required/>  
            </div>
          </div>
          <div className="form-group col-md-4">
            <label>Stock</label>
            <input 
              className="form-control" 
              placeholder="Cant. disponible" 
              // id="stock" 
              // value={stock} 
              onChange={e => setStock(e.target.value)} 
              required/>
          </div>
          <div className="form-group col-md-4">
            <label>Precio</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">$</span>
              </div>
              <input 
                className="form-control" 
                aria-label="Default" 
                aria-describedby="inputGroup-sizing-default" 
                // id="price" 
                // value={price} 
                onChange={e => setPrice(e.target.value)} 
                required/>
            </div>
          </div>
          <div className="form-group col-md-2">
            <label>Talla</label>
            <input 
              className="form-control" 
              placeholder="Ej: 14,16,18" 
              // id="stock" 
              // value={stock} 
              onChange={e => setTalle(e.target.value)} 
              required/>
          </div>
        </div>
        
      
        <label>Imágenes</label>
        <div className="input-group input-group-sm mb-3">
         <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={e => {
              arrImg.push(img);
              alert('Se agrego la imagen ' + img);
              document.getElementById('img').value = "";
            }}>+</button>
          </div>
            <input 
              type="text" 
              className="form-control" 
              aria-label="Small" 
              aria-describedby="inputGroup-sizing-sm" 
              placeholder="Añadir imágen por URL"
              id="img"
              // value={img}
              onChange={e => {
                setImg(e.target.value)
              }}
            />
        </div>
    
        <button type="submit" className="btn btn-primary">Añadir</button>
      </form>
    </div>
  )
}
 

