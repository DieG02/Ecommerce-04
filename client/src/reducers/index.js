import { combineReducers } from 'redux';
import categoria from './reducerCategorias';
import producto from './reducerProducto';
import usuario from './reducerUsuario';

export default combineReducers({
    categoria,
    producto,
    usuario
});