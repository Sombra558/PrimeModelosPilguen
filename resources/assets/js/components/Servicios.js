import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Route,
	BrowserRouter as Router,
	Link,
	Switch
} from 'react-router-dom';
import ImpregnadoApi from "./Aplicaciones/Impregnado";
import SecadoApi from "./Aplicaciones/Secado";
export default class Servicios extends Component {
    render() {
        return (
            <Router>
                <div className="row">
                    <div><h1 className="producto">SERVICIOS</h1></div>
                    <div className="col-md-12">
                            <div className="row text-center ">
                            <Link className="col-md-6 list-group-item-pilguen" to="/Servicios">SERVICIO DE IMPREGNADO</Link> 
                            <Link className="col-md-6 list-group-item-pilguen" to="/Servicios/Secado">SERVICIO DE SECADO</Link>
                            </div>
                    </div>
                    <div className="col-md-12">
                    <Switch>
                           <Route path='/Servicios' exact component={ImpregnadoApi}></Route>
                           <Route path='/Servicios/Secado' exact component={SecadoApi}></Route>
                    </Switch> 
                    </div>      
                 </div>
            </Router>
          
        );
    }
}

if (document.getElementById('servicios')) {
    ReactDOM.render(<Servicios />, document.getElementById('servicios'));
}