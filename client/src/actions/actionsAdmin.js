export const GET_USSERS = 'GET_USSERS';
export const EDIT_USSER = 'EDIT_USSER';
export const DELETE_USSER = 'DELETE_USSER';

export function getUssers(){
  return function (dispatch){
    return fetch('http://localhost:1337/usuario')
      .then(res => res.json())
      .then(data => {
        if(data !== undefined){
          dispatch({ type: GET_USSERS, payload: data })
        }
    })
  }
}

export function editUsser(id, data){
  return function (dispatch){
    return fetch(`http://localhost:1337/usuario/${id}`, {
      method: 'PUT', 
      body: JSON.stringify(data), 
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res !== undefined){
        alert('Se ha editado la información de este usuario!');
        dispatch({ type: EDIT_USSER })
      }
    })
  }
}

export function deleteUsser(id){
  return function (dispatch){
    return fetch(`http://localhost:1337/usuario/${id}`,{
      method: 'DELETE', 
      headers:{'Content-Length': '0'}
    })
      .then(res => res.json())
      .then(data => {
        if(data !== undefined){
          alert('Se ha eliminado a este usuario!');
          dispatch({ type: DELETE_USSER })
        }
    })
  }
}