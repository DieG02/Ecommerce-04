import React from 'react';
// import { Link } from 'react-router-dom'; 
import image from '../images/zapatillas.jpg';
import edit from '../images/iconEdit.png';
import './Product.css'

//Componente de muestra en el catálogo
export default function Product ({ name, id }) {
  return (
    <div className="card-deck productCard">
      <div className="card">
        <div>        
            <a title="Editar" className="icon" href={`http://localhost:3000/producto/edit/${id}`}><img src={edit} alt="Editar"/></a>
          <a href="http://localhost:3000/producto/detail">
            <img className="card-img-top productView" src={image} alt="Product View"/>
          </a>
        </div>

        <div className="card-body">
          <a title="Ver" href="http://localhost:3000/producto/detail">
            <h6 className="card-title" style={{color: '#000'}}>{name}</h6>
          </a>
        </div>
      </div>
    </div>
  )
};
