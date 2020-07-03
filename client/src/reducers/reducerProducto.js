import {GET_PRODUCTS, SEARCH_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT} from '../actions/actionsProductos';

const initialState = {
    productos: [],
    producto: {}
}


export default (state = initialState, action) => {
    if (action.type === GET_PRODUCTS) {
        return {
            ...state,
            productos: action.payload
        };
    }

    if (action.type === SEARCH_PRODUCTS) {
        return {
            ...state,
            productos: action.payload
        };
    }

    if (action.type === ADD_PRODUCT) {
        return {
            ...state,
            productos: action.payload
        };
    }

    if (action.type === EDIT_PRODUCT) {
        return {
            ...state,
            producto: action.payload
        };
    }

    return state;
};