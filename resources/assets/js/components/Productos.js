import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import CatalogoApi from './Catalogo/CatalogoApi';
import PollinesApi from './Catalogo/Pollines/PollinesApi';
import MaderasVerdeApi from './Catalogo/Maderas/MaderasVerdeApi';
import MaderasSecaApi from './Catalogo/Maderas/MaderasSecaApi';
import MaderasImpregnadaApi from './Catalogo/Maderas/MaderasImpregnadaApi';
import CortezaApi from './Catalogo/Cortezas/CortezasApi';
export default class Catalogo extends Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-md-12">
                            <div className="row text-center border categoria">
                            <Link className="col-md-2 list-group-item" to="/Productos">TODOS LOS PRODUCTOS</Link>
                            <Link className="col-md-2 list-group-item" to="/Verde">MADERA VERDE DIMENSIONADA</Link> 
                            <Link className="col-md-2 list-group-item" to="/Seca">MADERA SECA DIMENSIONADA</Link>
                            <Link className="col-md-2 list-group-item" to="/Impregnada">MADERA IMPREGNADA</Link>
                            <Link className="col-md-2 list-group-item" to="/Polines">POLINES</Link>
                            <Link className="col-md-2 list-group-item" to="/SubProductos">SUBPRODUCTOS</Link>
                            </div>
                    </div>
                    <div className="col-md-12">
                    <Switch>
                           <Route path='/Productos' exact component={CatalogoApi}></Route>
                           <Route path='/Verde' exact component={MaderasVerdeApi}></Route>
                           <Route path='/Seca' exact component={MaderasSecaApi}></Route>
                           <Route path='/Impregnada' exact component={MaderasImpregnadaApi}></Route>
                           <Route path='/Polines' exact component={PollinesApi}></Route>
                           <Route path='/SubProductos' exact component={CortezaApi}></Route>
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