import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import CatalogoAdminApi from './CatalogoAdmin/CatalogoAdminApi';
import CategoriaAdminApp from './CatalogoAdmin/Categoria/CategoriaAdminApp';
import ProductoAdminApp from './CatalogoAdmin/Producto/ProductoAdminApp';
import TipoAdminApp from './CatalogoAdmin/Tipo/TipoAdminApp';
import MedidaAdminApp from './CatalogoAdmin/Medida/MedidaAdminApp';
import DetallesCategoria from './CatalogoAdmin/Categoria/DetallesCategoria';
import DetallesTipo from './CatalogoAdmin/Tipo/DetallesTipo';
import DetallesMedida from './CatalogoAdmin/Medida/DetallesMedida';
export default class Admin extends Component {
    render() {
        return (
            <Router>
                <div className="row mx-auto">
                
                    <div className="col-md-3 list-group text-center ">
                        
                        <ul>
                            <li className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin">Control General</Link>
                            </li>
                            <li className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin/AgregarProducto">Agregar Producto</Link>
                            </li>
                            <li  className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin/AgregarCategoria">Agregar Categoria</Link>
                            </li>
                            <li  className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin/AgregarTipo">Agregar Tipo</Link>
                            </li>
                            <li  className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin/AgregarMedida">Agregar Medida</Link>
                            </li>
                            <li  className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin/DetallesCategoria">Detalles de Categotias</Link>
                            </li>
                            <li  className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin/DetallesTipo">Detalles de Tipos</Link>
                            </li>
                            <li  className="list-group-item">
                                <Link className="prueba" to="/ControlAdmin/DetallesMedida">Detalles de Medidas</Link>
                            </li>
                        </ul>
                    </div>
                 <div className="col-md-9">
                    <div className="col-md-12">
                    <div className="card">
                <div className="card-header">Sistema de Administracion de Contenido Pilguen </div>
                <div className="card-body">
                <div>
                <Switch>
                <Route path='/ControlAdmin' exact component={CatalogoAdminApi} />   
                <Route path='/ControlAdmin/AgregarProducto' exact component={ProductoAdminApp} />              
                <Route path='/ControlAdmin/AgregarCategoria' exact component={CategoriaAdminApp} />
                <Route path='/ControlAdmin/AgregarTipo' exact component={TipoAdminApp} />
                <Route path='/ControlAdmin/AgregarMedida' exact component={MedidaAdminApp} />  
                <Route path='/ControlAdmin/DetallesCategoria' exact component={DetallesCategoria} />
                <Route path='/ControlAdmin/DetallesTipo' exact component={DetallesTipo} />  
                <Route path='/ControlAdmin/DetallesMedida' exact component={DetallesMedida} /> 
              </Switch>
                 </div>
                 </div>
                 </div>
        </div>
        </div>
        </div>
        </Router>      
        );
    }
}

if (document.getElementById('general')) {
    ReactDOM.render(<Admin />, document.getElementById('general'));
}