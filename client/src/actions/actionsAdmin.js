export const GET_ALL_USERS = 'GET_ALL_USERS';
export const EDIT_USER = 'EDIT_USER'; //Cambiar por ver perfil (sin password)
export const VIEW_USER = 'VIEW_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDER = 'GET_ORDER';

export function getAllUsers(){
  return function (dispatch){
    return fetch('http://localhost:1337/usuario/admin')
      .then(res => res.json())
      .then(data => {
        if(data !== undefined){
          dispatch({ type: GET_ALL_USERS, payload: data })
        }
    })
  }
}

export function editUser(id, data){
  return function (dispatch){
    return fetch(`http://localhost:1337/usuario/${id}`, {
      method: 'PUT', 
      body: JSON.stringify(data), 
      credentials: 'include',
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res !== undefined){
        alert('Se ha editado la información de este usuario!');
        dispatch({ type: EDIT_USER })
      }
    })
  }
}

export function viewUser(id) {
  return function(dispatch) {
      return fetch(`http://localhost:1337/usuario/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
          if (data !== undefined) {
            window.location.replace(`http://localhost:3000/usuario/perfil/${id}`, { credentials: 'include' });
            return dispatch({ type: VIEW_USER })        
          } else {
              alert('No se puede mostrar este usuario!')
          }
      });
  }
};

export function deleteUser(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/usuario/${id}`,{
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
    return fetch('http://localhost:1337/changuito/all')
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
    return fetch(`http://localhost:1337/changuito/${id}`)
      .then(res => res.json())
      .then(data => {
        if(data !== undefined){
          dispatch({ type: GET_ORDER, payload: data })
        }
    })
  }
}