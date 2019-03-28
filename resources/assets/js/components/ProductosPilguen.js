import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import Verde from './Aplicaciones/Verde';
import Seca from './Aplicaciones/Seca';
import Impregnada from './Aplicaciones/ImpreApi';
import Polines from './Aplicaciones/Pollines';
import SubProductos from './Aplicaciones/SubProductos';
export default class Catalogo extends Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <div><h1 className="producto">PRODUCTOS</h1></div>
                    <div className="col-md-12">
                            <div className="row text-center ">
                            <Link className="col-md-3 list-group-item-pilguen" to="/Productos">MADERA VERDE DIMENSIONADA</Link> 
                            <Link className="col-md-3 list-group-item-pilguen" to="/Seca">MADERA SECA DIMENSIONADA</Link>
                            <Link className="col-md-2 list-group-item-pilguen" to="/Impregnada">MADERA IMPREGNADA</Link>
                            <Link className="col-md-2 list-group-item-pilguen" to="/Polines">POLINES</Link>
                            <Link className="col-md-2 list-group-item-pilguen" to="/SubProductos">SUBPRODUCTOS</Link>
                            </div>
                    </div>
                    <div className="col-md-12">
                    <Switch>
                           <Route path='/Productos' exact component={Verde}></Route>
                           <Route path='/Seca' exact component={Seca}></Route>
                           <Route path='/Impregnada' exact component={Impregnada}></Route>
                           <Route path='/Polines' exact component={Polines}></Route>
                           <Route path='/SubProductos' exact component={SubProductos}></Route>
                    </Switch> 
                    </div>      
                 </div>
            </Router>
          
        );
    }
}

if (document.getElementById('productos')) {
    ReactDOM.render(<Catalogo />, document.getElementById('productos'));
}