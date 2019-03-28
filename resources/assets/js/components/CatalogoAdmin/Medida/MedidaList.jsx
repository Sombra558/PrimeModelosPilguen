import React from 'react';
import Medida from './Medida';
const MedidaList = (props) => (
    <div className="row">
    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Medida</th>
                                        <th>Tipo</th>
                                       	<th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                   {
                                   props.Medidas.map(Medidas => (
                                    <Medida
                                    key={Medidas.id}
                                    id={Medidas.id}
                                    medida={Medidas.medida}
                                    tipo={Medidas.tipo}
                                    />
                                ))
                                    }
						           
        							
                                </tbody>
    </table>
         
    </div>                 
)
export default MedidaList