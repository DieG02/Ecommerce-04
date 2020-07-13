import { GET_ALL_USERS, VIEW_USER, DELETE_USER } from '../actions/actionsAdmin.js';

const initialState = {
    usuarios: [],
}


export default (state = initialState, action) => {
  if (action.type === GET_ALL_USERS) {
    return {
      ...state,
      usuarios: action.payload
    };
  }
  if (action.type === VIEW_USER ) {
    return {
      ...state,
      usuarios: action.payload
    };
  }
  if (action.type === DELETE_USER ) {
    return {
      ...state,
      usuarios: action.payload
    };
  }
  return {...state};
};
