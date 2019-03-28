import React, { Component } from 'react';
import axios from 'axios'
import PedidoForm from './PedidoForn'
export default class PedidoApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    pedidos: [],
    }
    this.handleOnAddPedido=this.handleOnAddPedido.bind(this)
    
}  
            handleOnAddPedido(ivn){
                ivn.preventDefault()
                let form = ivn.target,
                 pedido = {
                     cliente: form.cliente.value,
                     mensaje: form.mensaje.value,
                     contacto: form.contacto.value,
                     cantidad: form.cantidad.value,
                     medida: form.medida.value,
                 }
                 axios.post(`Pedido`, {
                    cliente: pedido.cliente,
                    mensaje: pedido.mensaje,
                    contacto: pedido.contacto,
                    cantidad: pedido.cantidad,
                    medida: pedido.medida,
                  })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                 this.setState({
                        pedidos: this.state.pedidos.concat([pedido])
                    })
                 form.reset()
                }
              
       
    render() {
        return (
            <div>
                 <PedidoForm onAddPedido={this.handleOnAddPedido}/>
            </div>  
        );
    }
}