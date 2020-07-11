export const GET_ALL_USERS = 'GET_ALL_USERS';
export const EDIT_USER = 'EDIT_USER'; //Cambiar por ver perfil (sin password)
export const DELETE_USER = 'DELETE_USER';

export function getAllUsers(){
  return function (dispatch){
    return fetch('http://localhost:1337/usuario')
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

export function deleteUser(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/usuario/${id}`,{
      method: 'DELETE', 
      headers:{'Content-Length': '0'}
    })   
    .then(() => {       
        alert('Se ha eliminado al usuario');               
        window.location.replace('http://localhost:3000/admin');
        return dispatch({ type: DELETE_USER })
    })
  }
}