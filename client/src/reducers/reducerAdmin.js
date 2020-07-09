import { GET_USSERS } from '../actions/actionsAdmin';

const initialState = {
    usuarios: [],
}


export default (state = initialState, action) => {
  if (action.type === GET_USSERS) {
    return {
      ...state,
      usuarios: action.payload
    };
  }

  return {...state};
};
