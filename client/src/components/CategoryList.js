import React from 'react';

function CategoryList({ name, id }){
  return (
    <div>
        <a className="dropdown-item" href={`/categorias/${id}`}>{name}</a>
    </div>
  );
}

export default CategoryList;