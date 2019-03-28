import React from 'react';
import Madera from './Madera';
const CatalogoList = (props) => (
    <div className="row catalogo" >
    <br/>
            <div className="col-md-12"> 
            <div className="card fonde">  
            <div className="card-body">
            <ul className="row" >
                    {   
                        props.productos.map(productos => (
                            <Madera
                            key={productos.id} 
                            id={productos.id}
                            producto={productos.producto} 
                            descripcion={productos.descripcion}
                            categoria={productos.categoria}
                            tipo={productos.tipo}
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