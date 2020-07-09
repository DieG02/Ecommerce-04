export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const EDIT_USER = 'EDIT_USER';


export function getUser(id) { // no funciona
    return function(dispatch) {
        return fetch(`http://localhost:1337/usuario/${id}`)
        .then(res => res.json())
        .then((data) => {
            if (data !== undefined) {
                // console.log(JSON.stringify(data));
                console.log(data) 
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

// export function editProduct(id, input, category){
//     return function (dispatch) {
//         return fetch(`http://localhost:1337/productos/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify(input), 
//             headers:{
//             'Content-Type': 'application/json'
//         },
//         }).then((res)=>{
//         if(res.status === 200){
//             fetch(`http://localhost:1337/productos/pxcategoria/${id}`, {
//                 method: 'PUT',
//                 body: JSON.stringify(category), 
//                 headers:{
//                 'Content-Type': 'application/json'
//             },
//         }).then((res) => {
//             if (res.status === 200){
//                 dispatch({ type: EDIT_PRODUCT })
//                 return window.location.replace('http://localhost:3000')
//             } else {
//                 alert("no se realizo la accion!")
//             }
//         })
//         } else {
//             alert('No se edito el producto!');
//         }
//     })
//     }
// }