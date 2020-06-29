import React from 'react';
// import { Link } from 'react-router-dom'; 
import edit from '../images/iconEdit.png';
import defecto from '../images/default.jpg'
import './Product.css'

//Componente de muestra en el catálogo
export default function Product ({ name, id, img }) {
  return (
    <div className="card-deck productCard">
      <div className="card">
        <div>        
            <a title="Editar" className="icon" href={`http://localhost:3000/producto/edit/${id}`}><img src={edit} alt="Editar"/></a>
            <a href={`http://localhost:3000/producto/detail/${id}`}>
            <img className="card-img-top productView" src={img || defecto} alt="Product View"/>
          </a>
        </div>
        <div className="card-body">
          <a title="Ver" href="http://localhost:3000/producto/detail">
            <h6 className="card-title" style={{color: '#000'}}>{name.toUpperCase()}</h6>
          </a>
        </div>
      </div>
    </div>
  )
};
