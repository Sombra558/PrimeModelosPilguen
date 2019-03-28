import React, { Component } from 'react';
import axios from 'axios'
import ContactoForm from './ContactoForm';
export default class ContactoApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    mensajes: [],
    }
    this.handleOnAddMensaje=this.handleOnAddMensaje.bind(this)
    
}  
            handleOnAddMensaje(ivn){
                ivn.preventDefault()
                let form = ivn.target,
                 mensaje = {
                     cliente: form.cliente.value,
                     mensaje: form.mensaje.value,
                     contacto: form.contacto.value,
                 }
                 axios.post(`/Contactar`, {
                    cliente: mensaje.cliente,
                    mensaje: mensaje.mensaje,
                    contacto: mensaje.contacto,
                  })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                 this.setState({
                    mensajes: this.state.mensajes.concat([mensaje])
                    })
                 form.reset()
                }
              
       
    render() {
        return (
            <div>
                 <ContactoForm onAddMensaje={this.handleOnAddMensaje}/>
            </div>  
        );
    }
}