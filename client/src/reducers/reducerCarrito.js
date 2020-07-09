import { ADD_TO_CART, GET_PRODUCTS_CART } from '../actions/actionsCart';

const initialState = {
    carrito: []
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

    return state;
}
