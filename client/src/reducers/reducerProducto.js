import GET_PRODUCTS from '../actions/actionsProductos'

const initialState = {
    productos: []
}


export default (state = initialState, action) => {
    if (action.type === GET_PRODUCTS) {
        return {
            ...state,
            productos: action.payload
        };
    }

    return state;
};