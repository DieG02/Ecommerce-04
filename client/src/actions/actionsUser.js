export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const EDIT_USER = 'EDIT_USER';


export function getUser(id) {
    return function(dispatch) {
        return fetch(`http://localhost:1337/usuario/${id}`)
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

export function userAdd (input){
    return function (dispatch){
        return fetch('http://localhost:1337/usuario', {
            method: 'POST', 
            body: JSON.stringify(input), 
            headers:{
            'Content-Type': 'application/json'
            }
        }).then((res)=>{
        if(res.status === 200){   
            dispatch({ type: ADD_USER }) 
            return window.location.replace('http://localhost:3000')
        } else {
            alert('No se creo el usuario!');
        }
        })
    }
}

export function editUser(id, input){ 
    return function (dispatch) {
        return fetch(`http://localhost:1337/usuario/${id}`, {
            method: 'PUT',
            body: JSON.stringify(input), 
            headers:{
            'Content-Type': 'application/json'
        },
        }).then((res) => {
            if (res.status === 200){
                dispatch({ type: EDIT_USER })
                return window.location.replace('http://localhost:3000/usuario/perfil/:id')
            }
        }).catch(alert('No se pudo editar el usuario!'));
    }
}