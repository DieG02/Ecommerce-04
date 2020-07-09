export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';

export function addUser (input){
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

//Falta completar
export function getUser(id){
    return function(dispatch){
        return fetch(`http://localhost:1337/usuario/${id}`)
        .then(res => res.json())
        .then(data => {
            if(data !== undefined){
                alert('Se ha agregado al carrito!');            
                dispatch({ type: GET_USER, payload: data })
            }
        })
    }
}