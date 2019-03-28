import React, { Component } from 'react';
import axios from 'axios';
import MedidaList from './MedidaList';
export default class DetallesMedida extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    Medidas: [],
    }
}
componentDidMount(){
    axios.get(`Medida`)
      .then(
        res => {
        const Medidas = res.data;
        this.setState({ Medidas });
        }
      )
  }
    render() {
        return (
            <div>
                    <MedidaList Medidas={this.state.Medidas} />
            </div>  
        );
    }
}