export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const PRODUCT_BY_CATEGORY = 'PRODUCT_BY_CATEGORY';

//Buscar todo
export function getAll() {
        return function(dispatch) {
            return fetch(`http://localhost:1337/productos`, { credentials: 'include' })
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

export function editProduct(id, input, category){
    return function (dispatch) {
        return fetch(`http://localhost:1337/productos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(input), 
            headers:{
            'Content-Type': 'application/json'
        },
        }).then((res)=>{
        if(res.status === 200){
            fetch(`http://localhost:1337/productos/pxcategoria/${id}`, {
                method: 'PUT',
                body: JSON.stringify(category), 
                headers:{
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            if (res.status === 200){
                window.location.replace('http://localhost:3000');
                return dispatch({ type: EDIT_PRODUCT })
            } else {
                alert("no se realizo la accion!")
            }
        })
        } else {
            alert('No se edito el producto!');
        }
    })
    }
}

export function detailProduct(id){
    return function (dispatch) {
            return fetch(`http://localhost:1337/productos/${id}`)
            .then(res => res.json())
            .then((data) => {
                if(data !== undefined){
                    dispatch({ type: DETAIL_PRODUCT, payload: data })
                }
            });
    }
}

export function productByCategory(id){
    return function (dispatch) {
        return fetch(`http://localhost:1337/categorias/${id}`)
        .then(res => res.json())
        .then((data) => {
        if(data !== undefined){
            dispatch({ type: PRODUCT_BY_CATEGORY, payload: data })
        }
        });
    }
}
