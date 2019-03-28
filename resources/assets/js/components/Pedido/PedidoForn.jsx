import React from 'react'

const PedidoForm =(props) => (
    <div>
    <form className="form-control"  onSubmit={props.onAddPedido}>
    <div className="form-group">
                        <input className="form-control" type="text" name="cliente" placeholder="Nombre" required/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" type="text" name="mensaje" placeholder="Mensaje" required></textarea>
                    </div>
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="E-mail" name="contacto"required/>
                    </div>
                    <div className="form-group">
                    <input  type="number" className="form-control" placeholder="Cantidad" name="cantidad"required/>
                    </div>
                    <div className="form-group">
                    <input  type="text" className="form-control" placeholder="medida" name="medida"required/>
                    </div>
                    <div className="form-group">
                    <input className="btn-success form-control" type="submit" value="Pedido"/>
                    </div>
                    
    </form>
    </div>
      
)
 
export default PedidoForm