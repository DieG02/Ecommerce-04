import {GET_PRODUCTS, SEARCH_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT, DETAIL_PRODUCT, PRODUCT_BY_CATEGORY, ADD_REVIEW} from '../actions/actionsProductos';

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
            productos: action.payload
        };
    }

    if (action.type === DETAIL_PRODUCT) {
        return {
            ...state,
            producto: action.payload
        };
    }

    if (action.type === PRODUCT_BY_CATEGORY) {
        return {
            ...state,
            productos: action.payload
        };
    }

    if (action.type === ADD_REVIEW) {
        return {
            ...state,
            producto: action.payload
        };
    }

    return state;
};