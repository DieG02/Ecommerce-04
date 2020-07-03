import {combineReducers} from 'redux';
import categoria from './reducerCategorias';
import producto from './reducerProducto';

export default combineReducers({
    categoria,
    producto
})