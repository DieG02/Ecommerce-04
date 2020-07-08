import { ADD_TO_CART, GET_PRODUCTS_CART} from '../actions/actionsCart';

const initialState = {
    //Se carga con los valores de producto
    carrito: [
        // {
        //     id: 1,
        //     nombre: "Campera",
        //     descripcion: "Campera colorida",
        //     talle: "44",
        //     color: "#570000",
        //     precio: 3333,
        //     imagen: "https://dexter.vteximg.com.br/arquivos/ids/528977-1000-1000/AT6109004_1.jpg?v=637116609389470000",
        //     stock: 23
        // },{
        //     id: 2,
        //     nombre: "Bufanda",
        //     descripcion: "Bufanda verde oscuro, larga",
        //     talle: "21",
        //     color: "#072c10",
        //     precio: 3000,
        //     imagen: "https://megasports.vteximg.com.br/arquivos/ids/174739-1000-1000/01179774075_0.jpg?v=637014943394800000",
        //     stock: 12
        // }
    ]
}


export default (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        return {
            ...state,
            carrito: action.payload
        };
    }
     if (action.type === GET_PRODUCTS_CART) {
        return {
            ...state,
            carrito: action.payload
        };
    }

    return {...state}
}

// {
//     id: 1,
//     nombre: "Campera",
//     descripcion: "Campera colorida",
//     talle: "44",
//     color: "#570000",
//     precio: 3333,
//     imagen: "https://dexter.vteximg.com.br/arquivos/ids/528977-1000-1000/AT6109004_1.jpg?v=637116609389470000",
//     stock: 23
// },{
//     id: 2,
//     nombre: "Bufanda",
//     descripcion: "Bufanda verde oscuro, larga",
//     talle: "21",
//     color: "#072c10",
//     precio: 3000,
//     imagen: "https://megasports.vteximg.com.br/arquivos/ids/174739-1000-1000/01179774075_0.jpg?v=637014943394800000",
//     stock: 12
// }