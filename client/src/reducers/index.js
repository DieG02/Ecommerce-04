import { combineReducers } from 'redux';
import categoria from './reducerCategorias';
import producto from './reducerProducto';
import carrito from './reducerCarrito';
import administrador from './reducerAdmin';

export default combineReducers({
    categoria,
    producto,
    carrito,
    administrador
});