import { GET_ALL_USERS, DELETE_USER, GET_ORDERS, VIEW_USER, GET_ORDER } from '../actions/actionsAdmin.js';

const initialState = {
    usuarios: [],
    orders: [],
    order: {}
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
  if (action.type === GET_ORDERS) {
    return {
      ...state,
      orders: action.payload
    };
  }
  if (action.type === GET_ORDER) {
    return {
      ...state,
      order: action.payload
    };
  }
  return {...state};
};
