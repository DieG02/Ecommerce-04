export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_PRODUCTS_CART = 'GET_PRODUCTS_CART';
export const SET_COUNT = 'SET_COUNT';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const SET_ORDER = 'SET_ORDER';

// Buscamos la data con la ID y lo agregamos al carrito
export function addToCart(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/changuito/producto/${id}`, {
        credentials: 'include',
        method: 'POST', 
        headers:{'Content-Length': 0}
    })
    .then(data => {
      if(data !== undefined){
        dispatch({ type: ADD_TO_CART, payload: data })
      }
    })
  }
}

// Obtenemos los productos de la Orden en 'pendiente'
export function getProductsCart(){
  return function (dispatch) {
    return fetch(`http://localhost:1337/changuito/productos`)
      .then(res => res.json())
      .then(products => {
        if(products !== undefined){
            dispatch({ type: GET_PRODUCTS_CART, payload: products })
        }
    });
  }
}

// Seteamos la cantidad de unidades por producto
export function setCount(id, cantidad){
  if(!cantidad || cantidad === 0) cantidad = 1;
  return function(dispatch){
    return fetch(`http://localhost:1337/changuito/${id}/${cantidad}`, {
      method: 'PUT', 
      headers:{'Content-Length': 0}
    }).then(res => {
      if(res.status === 200){   
          return dispatch({ type: SET_COUNT, payload: cantidad }) 
      } else {
          alert('No hay más unidades disponibles');
      }
    })
  }
}

// Cerramos un carrito ---> orden
export function setOrder(ordenId){
  return function(dispatch){
    return fetch(`http://localhost:1337/changuito/${ordenId}`, {
      method: 'PUT',
      headers:{'Content-Length': 0}
    })
    .then(res => {
      if (res.status === 200){   
        console.log(ordenId)
        window.location.replace('http://localhost:3000/cart');
        return dispatch({ type: SET_ORDER, payload: res }) 
      } else {
        alert('No hay más unidades disponibles');
      }
    })
  }
}

//Borramos el producto en base a la id
export function deleteFromCart(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/changuito/productos/${id}`, {
        method: 'DELETE', 
        headers:{'Content-Length': 0}
    })
    .then(() => {    
        alert('Se ha eliminado del carrito');               
        window.location.replace('http://localhost:3000/cart');
        return dispatch({ type: DELETE_FROM_CART })
    })
  }
}



