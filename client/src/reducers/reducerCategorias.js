import { ADD_CATEGORY } from '../actions/actionsCategorias';

const initialState = {
    categorias: []
}


export default (state = initialState, action) => {
    if (action.type === ADD_CATEGORY) {
        return {
            ...state,
            categorias: action.payload
        };
    }

    return {...state};
};