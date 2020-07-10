import { ADD_TO_CART, GET_PRODUCTS_CART, CART} from '../actions/actionsCart';

const initialState = {
    carrito: [],
    productosCarrito: []
}


export default (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        return {
            ...state,
            carrito: action.payload
        };
    }
     if (action.type === GET_PRODUCTS_CART) {
        return {
            ...state,
            carrito: action.payload
        };
    }
    if (action.type === CART) {
        return {
            ...state,
            productoCarrito: action.payload
        };
    }
    return state;
}
