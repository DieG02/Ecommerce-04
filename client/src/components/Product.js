import React from 'react';
import image from '../images/tshirt.jpg'
import './Product.css'

//Componente de muestra en el catálogo
export default function Product ({ name, price, description }) {
    return (
    <div className="productContainer">
        <img src={image} className="image" alt="logo" />
        <h3 className="texto">{name}</h3>
        <h5 className="texto">{price}</h5>
        <p className="texto">{description}</p>
    </div>
   )
};

// imagen (tiene que ser un link)
// Titulo
// precio
// Descripcion
