export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_PRODUCTS_CART = 'GET_PRODUCTS';

// Buscamos la data con la ID y lo agregamos al carrito
// export function addToCart(id){
//   return function (dispatch){
//       return fetch(`http://localhost:1337/productos/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           fetch(`http://localhost:1337/changuito/producto/${id}`, {
//             method: 'POST', 
//             body: JSON.stringify(data), 
//             headers:{'Content-Type': 'application/json'}
//           })
//         }).then(datos => {
//           if(datos !== undefined){
//             alert('Se ha agregado al carrito!');
//             dispatch({ type: ADD_TO_CART, payload: datos })
//           }
//       })
//   }
// }

export function addToCart(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/changuito/producto/${id}`, {
        method: 'POST', 
        headers:{'Content-Length': '0'}
    }).then(() => {
      fetch(`http://localhost:1337/productos/${id}`)
        .then(res => res.json())
        .then(data => {
          if(data !== undefined){
            return  dispatch({ type: ADD_TO_CART, payload: data })
          }
        })
    })
  }
}

// Obtenemos los productos del la Orden en 'pendiente'
export function getProductsCart(){
    return function (dispatch) {
        return fetch(`http://localhost:1337/changuito/`)
        .then(res => res.json())
        .then((data) => {
        if(data !== undefined){
            dispatch({ type: GET_PRODUCTS_CART, payload: data })
        }
        });
    }
}


// Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed rhoncus lectus. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus lorem neque, ornare a dui nec, dignissim suscipit ipsum.