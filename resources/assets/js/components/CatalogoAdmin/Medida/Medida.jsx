import React, { Component } from 'react';
export default class Medida extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    idprueba:this.props.id,
    medida:this.props.medida,
    tipo:this.props.tipo,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(ev){
    ev.preventDefault();
    let uri = `Medida/${this.state.idprueba}`
    axios.delete(uri).then(
      res => {
        const medida  = res.data;
        this.setState({ medida});
        }
    );
  }
render()
{
  if (!this.state.tipo.length){
      return(
        <tr className="odd gradeX">
             <td className="alert-danger">Eliminado</td>
        </tr> 
      )
      
  } else{
      return (
        <tr className="odd gradeX">
        <td>{this.state.medida}</td>
        <td>{this.state.tipo}</td>
        <td>
        <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="x" className="btn btn-danger"/>
                    </form>
        </td>
        </tr> 
      );
  }        
}}