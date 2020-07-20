export const GET_ALL_USERS = 'GET_ALL_USERS';
export const VIEW_USER = 'VIEW_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDER_DETAIL = 'GET_ORDER_DETAIL';
export const PROMOTE_USER = 'PROMOTE_USER';

export function getAllUsers(){
  return function (dispatch){
    return fetch('http://localhost:1337/admin', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        if(data !== undefined){
          dispatch({ type: GET_ALL_USERS, payload: data })
        }
    })
  }
}

export function viewUser(id) {
  return function(dispatch) {
    return fetch(`http://localhost:1337/admin/${id}`, { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      if (data !== undefined) {
        window.location.replace(`http://localhost:3000/usuario/perfil/${id}`);
        return dispatch({ type: VIEW_USER })        
      } else {
          alert('No se puede mostrar este usuario!')
      }
    });
  }
};

export function deleteUser(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/admin/${id}`,{
      method: 'DELETE', 
      credentials: 'include',
      headers:{ 'Content-Length': '0' }
    })   
    .then(() => {       
        alert('Se ha eliminado al usuario');               
        window.location.replace('http://localhost:3000/admin');
        return dispatch({ type: DELETE_USER })
    })
  }
}

export function getAllOrders(){
  return function (dispatch){
    return fetch('http://localhost:1337/changuito/all', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        if(data !== undefined){
          dispatch({ type: GET_ORDERS, payload: data })
        }
    })
  }
}

export function getOrderDetail(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/changuito/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        if(data !== undefined){
          dispatch({ type: GET_ORDER_DETAIL, payload: data })
        }
    })
  }
}

export function promoteUser(id){ 
  return function (dispatch) {        
      return fetch(`http://localhost:1337/admin/${id}`, {
          method: 'PUT',
          credentials: 'include',
          headers:{'Content-Length': 0}
      })
      .then(res => {
        if (res.status === 200){
          alert('Se promovió al usuario!');
          return dispatch({ type: PROMOTE_USER })       
        }
      })
      .catch(err => console.log(err));
  }
}