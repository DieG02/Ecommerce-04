export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const GET_USER_LOGGED = 'GET_USER_LOGGED';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';


export function addUser (input){
    return function (dispatch){
        return fetch('http://localhost:1337/usuario', {
            method: 'POST', 
            body: JSON.stringify(input), 
            headers:{
            'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            if(res.status === 200){   
                dispatch({ type: ADD_USER }) 
                return window.location.replace('http://localhost:3000/login')
            } else {
                alert('No se creo el usuario!');
            }
        })
    }
}

export function getUser(id) {
    return function(dispatch) {
        return fetch(`http://localhost:1337/usuario/${id}`, { credentials: 'include' })
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                dispatch({ type: GET_USER, payload: data })
            } else {
                alert('No se encontró el usuario!')
            }
        });
    }
};

export function getUserLogged() {
    return function(dispatch) {
        return fetch(`http://localhost:1337/usuario/x`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
            if (data !== undefined) {
                dispatch({ type: GET_USER_LOGGED, payload: data })
            } 
        })
    }
};

export function editUser(id, input){ 

    return function (dispatch) {        
        return fetch(`http://localhost:1337/usuario/${id}`, {
            method: 'PUT',
            body: JSON.stringify(input), 
            credentials: 'include',
            headers:{
            'Content-Type': 'application/json'
        },
        }).then((res) => {
            if (res.status === 200){
                dispatch({ type: EDIT_USER })
                return window.location.replace('http://localhost:3000/usuario/perfil')
            }
        }).catch(() => alert('No se pudo editar el usuario!'));
    }
}

export function deleteUser(id){ 
    return function (dispatch) {     
        return fetch(`http://localhost:1337/usuario/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers:{ 'Content-Length': '0' }
        })
        .then(res => {
            if (res.status === 200){
                return dispatch({ type: DELETE_USER })
            }
        })
        .catch(() => alert('Hubo un error al eliminar su cuenta'));
    }
}



