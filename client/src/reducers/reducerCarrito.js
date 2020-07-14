import { ADD_TO_CART, GET_PRODUCTS_CART, SET_COUNT, DELETE_FROM_CART } from '../actions/actionsCart';

const initialState = {
    carrito: [],
    cantidad: []
}


export default (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        return {
            ...state,
            carrito: action.payload
        }
    }
    if (action.type === GET_PRODUCTS_CART) {
        return {
            ...state,
            carrito: action.payload
        }
    }
    if (action.type === SET_COUNT) {
        return {
            ...state,
            cantidad: action.payload
        }
    }
    if (action.type === DELETE_FROM_CART ) {
        return {
            ...state,
            carrito: action.payload
        }
    }

    return state;
}
