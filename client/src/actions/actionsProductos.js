export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

//Buscar todo
export function getAll() {
        return function(dispatch) {
            return fetch(`http://localhost:1337/productos`)
            .then(res => res.json())
            .then((data) => {
                if (data !== undefined) {
                    dispatch({ type: GET_PRODUCTS, payload: data })
                }
            });
        }
};

export function onSearch(productName) {
    return function (dispatch){
        return fetch(`http://localhost:1337/productos?search=${productName}`)
        .then(res => res.json())
        .then((data) => {
            dispatch({ type: SEARCH_PRODUCTS, payload: data })
        })
    }
};

export function addProduct (data){
    return function (dispatch){
        return fetch('http://localhost:1337/productos', {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
            'Content-Type': 'application/json'
            }
        }).then((res)=>{
        if(res.status === 200){   
            dispatch({ type: ADD_PRODUCT, payload: data }) 
            return window.location.replace('http://localhost:3000')
        } else {
            alert('No se agrego el producto!');
        }
        })
    }
}

export function editProduct(data, accion, categoria){
    return function (dispatch) {
        return fetch(`http://localhost:1337/productos/${data.id}/${accion}/${categoria}`, {
            method: 'PUT',
            body: JSON.stringify(data), 
            headers:{
            'Content-Type': 'application/json'
        },
        }).then((res)=>{
        if(res.status === 200){
            dispatch({ type: EDIT_PRODUCT, payload: data }) 
            // return window.location.replace('http://localhost:3000')
        } else {
            alert('No se edito el producto!');
        }
        })
    }
}

export function productDetail(id){
    return function(dispatch){
        return fetch(`http://localhost:1337/productos/${id}`)
        .then(res => res.json())
        .then((data) => {
        if(data !== undefined){
            setProduct(data);
        }
        });
    
    }
        
      
}