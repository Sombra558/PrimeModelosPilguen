import React from 'react'
import SelectTipo from '../../ReactComponent/Select/SelectTipo';
const MedidaForm =(props) => (
    <div className="card">
    <div className="card-header"><h3 className="panel-title">Agregar Tipo</h3></div>   
    <div className="card-body">
    <form  onSubmit={props.onAddMedida}>
        <div className="form-group"><input className="form-control" type="text" name="medida" placeholder="medida" required/></div>
        <div className="form-group"><SelectTipo/></div>
        <div className="form-group"><input className="form-control btn btn-primary" type="submit" value="Guardar"/></div>
    </form>
    </div>
    </div>   
)
 
export default MedidaForm