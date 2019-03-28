import React, { Component } from 'react';
import axios from 'axios'
import MedidaForm from './MedidaForm'
export default class CategoriaApp extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    medidas: [],
    }
    this.handleOnAddMedida=this.handleOnAddMedida.bind(this)
    
}  
            handleOnAddMedida(ivn){
                ivn.preventDefault()
                let form = ivn.target,
                 medida = {
                     medida: form.medida.value,
                     tipo: form.tipo.value,
                 }
                 axios.post(`Medida`, {
                    medida: medida.medida,
                    tipo: medida.tipo,
                  })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                 this.setState({
                        medidas: this.state.medidas.concat([medida])
                    })
                 form.reset()
                }
              
       
    render() {
        return (
            <div>
                 <MedidaForm onAddMedida={this.handleOnAddMedida}/>
            </div>  
        );
    }
}