import React from 'react';
import Producto from './Corteza';
const CatalogoList = (props) => (
    <div className="row catalogo" >
    <br/>
            <div className="col-md-12 "> 
            <div className="card fonde">
      
            <div className="card-body">
            <ul className="row" >
                    {   
                        props.productos.map(productos => (
                            <Producto
                            key={productos.id} 
                            id={productos.id}
                            producto={productos.producto} 
                            descripcion={productos.descripcion}
                            categoria={productos.categoria}
                            url={productos.url}
                            />
                        ))
                    }
                </ul>
            </div>
            </div>
    </div>
    </div>                 
)
export default CatalogoList