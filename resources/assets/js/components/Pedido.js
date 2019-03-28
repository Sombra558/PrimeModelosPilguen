import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PedidoApp from './Pedido/PedidoApi';


export default class Pedido extends Component {
    render() {
        return (
            <div>
            <PedidoApp/>
        </div>
        );
    }
}

if (document.getElementById('pedido')) {
    ReactDOM.render(<Pedido />, document.getElementById('pedido'));
}
