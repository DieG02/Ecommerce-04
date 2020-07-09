import { ADD_USER } from '../actions/actionsUser';

const initialState = {
    usuarios: [],
}


export default (state = initialState, action) => {
    if (action.type === ADD_USER) {
        return {
            ...state,
            usuarios: action.payload
        };
    }

    return state;
};