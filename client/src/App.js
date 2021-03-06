import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav.js';
import Products from './components/Products.js';
import ProductAdd from './components/ProductAdd.js';
import ProductEdit from './components/ProductEdit.js';
import ProductDetail from './components/ProductDetail.js';
import AddCategory from './components/AddCategory.js';
import ProductByCategory from './components/ProductByCategory.js';
import ListCart from './components/ListCart.js';
import Admin from './components/Admin.js';
import Usuario from './components/Usuario.js';
import AddUser from './components/AddUser.js';
import EditarUsuario from './components/EditarUsuario.js';
import AdminOrders from './components/AdminOrders.js';
import OrderDetail from './components/OrderDetail.js';

import LoginForm from './components/LoginForm.js';

function App() {
  
  return ( 
    <div className="App">
    <Nav />
    <header className="App-header">

      <Route
        exact path='/login'
        render={() => <LoginForm/>}
      />

      <Route
        exact path='/'
        render={() => <Products/>}
      />
      <Route
        exact path='/catalogo'
        render={() => <Products/>}
      />
      

      <Route
        exact path='/producto/add'
        render={() => <ProductAdd/>}
      />  
      <Route
        exact path='/producto/edit/:id'
        component={({match}) => 
          <ProductEdit id={match.params.id}/>
        }
      />
      <Route
        exact path='/producto/detail/:id'
        component={({match}) => 
          <ProductDetail id={match.params.id}/>
        }                   
      />


      <Route 
        exact path='/categorias/add'
        render={() => <AddCategory/>}
      />
      <Route
        exact path='/categorias/:id'
        component={({match}) => 
          <ProductByCategory id={match.params.id}/>
        }
      />

      <Route
        exact path='/cart'
        component={() => <ListCart/>}
      />


      <Route
        exact path='/usuario/perfil'
        component={() => <Usuario />}
      />    
      <Route
        exact path='/usuario/add'
        component={() => <AddUser/>}
      />
      <Route
        exact path='/usuario/editar'
        component={() => <Usuario />}
      />
  
  
      <Route
        exact path='/usuario/perfil/:id'
        component={({match}) => 
        <Usuario id = {match.params.id} />}
      />
      <Route
        exact path='/usuario/perfil/edit/:id'
        component={({match}) => 
        <EditarUsuario id = {match.params.id}/>}
      />

      <Route
        exact path='/admin'
        component={() => <Admin/>}
      />

      <Route
        exact path='/admin/ordenes'
        component={() => <AdminOrders/>}
      />

      <Route
        exact path='/admin/ordenes/detail/:id'
        component={({match}) => 
          <OrderDetail id={match.params.id}/>
        }                   
      />  
      </header>
    </div>
  );
}
export default App;