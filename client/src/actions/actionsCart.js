export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_PRODUCTS_CART = 'GET_PRODUCTS';

// Buscamos la data con la ID y lo agregamos al carrito

export function addToCart(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/changuito/producto/${id}`, {
        method: 'POST', 
        headers:{'Content-Length': 0}
    }).then(data => {
        if(data !== undefined){
          alert('Se ha agregado al carrito!');            
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

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus lorem neque, ornare a dui nec, dignissim suscipit ipsum.