import React, { Component } from 'react';
import axios from 'axios';
import CatalogoSearch from '../CatalogoSearch';
import CatalogoList from './AstillaList';


export default class CatalogoApi extends Component {
    constructor(...props) {
        super(...props)
    this.state ={
    productos: [],
    mycars:[],
      filter: {
        name: '',
        productos: [],
        search: ''
      }
    }
    this.handleOnSearch = this.handleOnSearch.bind(this)
    this.handleOnFilter = this.handleOnFilter.bind(this)
}
componentDidMount() {
    axios.get(`/Astillas/listado`)
      .then(
        res => {
        const productos = res.data;
        this.setState({ productos });
        }
      )
  }
  
  handleOnSearch(e) {
    let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )

    this.setState({
      filter: newFilter
    })

    //console.log(newFilter)
  }

  handleOnFilter(filter, data) {
    let regex = new RegExp(filter.search, 'i')
    return data.filter(q => ( regex.test(q.name) || regex.test(q.producto) || regex.test(q.categoria) ))
  } 
    render() {
        return (
          <div>
            <div className="row justify-content-center">
              <CatalogoSearch  onSearch={this.handleOnSearch}/>
            </div>                    
                    <CatalogoList  productos={this.handleOnFilter(this.state.filter, this.state.productos)} />             
            </div>     
      
        );
    }
}
