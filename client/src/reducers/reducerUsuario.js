import { ADD_USER, GET_USER, EDIT_USER } from '../actions/actionsUser';

const initialState = {
    usuarios: [],
    usuario: {}
}


export default (state = initialState, action) => {
    if (action.type === ADD_USER) {
        return {
            ...state,
            usuarios: action.payload
        };
    }

    if (action.type === GET_USER) {
        return {
            ...state,
            usuario: action.payload
        }
    }

    if (action.type === EDIT_USER) {
        return {
            ...state,
            usuario: action.payload
        };
    }

    return state;
};

