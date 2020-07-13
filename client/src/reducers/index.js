import { combineReducers } from 'redux';
import producto from './reducerProducto';
import categoria from './reducerCategorias';
import carrito from './reducerCarrito';
import usuario from './reducerUsuario';
import administrador from './reducerAdmin';

export default combineReducers({
    producto,    
    categoria,
    carrito,    
    usuario,
    administrador,
});