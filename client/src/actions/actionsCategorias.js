export const ADD_CATEGORY = 'ADD_CATEGORY';

//Añade Nueva Categoría
export function addCategory (data) {
    return function(dispatch){
        return fetch('http://localhost:1337/categorias', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), 
        headers:{
        'Content-Type': 'application/json'
        }
        }).then((res)=>{
            if(res.status === 200){
                dispatch({ type: ADD_CATEGORY, payload: data })
                return window.location.replace('http://localhost:3000')
            }
        })
    }
}