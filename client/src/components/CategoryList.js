import React from 'react';

function CategoryList({ name }){
  return (
    <div>
        <a className="dropdown-item" href="/categorias/remeras">{name}</a>
    </div>
  );
}

export default CategoryList;