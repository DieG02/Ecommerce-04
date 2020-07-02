export const GET_PRODUCTS = 'GET_PRODUCTS';

//Buscar todo
export function getAll() {
        return function(dispatch) {
            return fetch(`http://localhost:1337/productos`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data !== undefined) {
                    dispatch({ type: GET_PRODUCTS, payload: data })
                }
            });
        }
};