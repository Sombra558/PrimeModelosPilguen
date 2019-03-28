import React from 'react'
import Ima3 from '../../../../../public/img/Ima3.png';
import Ima4 from '../../../../../public/img/Ima4.jpg';
import Ima5 from '../../../../../public/img/Ima5.jpg';
const ImpreApi= () => (
    <div className="col-md-12">
    <br/>
    <div>
    <img className="card-img-top" width="100%" height="268px" src={Ima5} alt="Card image cap"/>
    <br/></div>
    <div className="row">
    <br/>
    <div className="col-md-5">
    <div >
      <div >
          <br/>
      <ul>
         <div ><h3 className="Caracteisticasusos">CARACTERÍSTICAS:</h3></div>
          <li>Madera en estado verde</li>
          <li>Bañada con producto antimanchas</li>
          <li>Homogénea en sus dimensiones</li>
          <li>Producto de calidad uniforme</li>
          <li>Humedad: 40% o más.</li>
          <li>Terminación dimensionada</li>   
      </ul>
      </div>
      <div>
      <ul>
          <h3 className="Caracteisticasusos">USOS:</h3>
          <li>Construcciones transitorias</li>
          <li>Instalaciones de faenas</li>
        
      </ul>
      </div>
    </div>
    </div>
    <div className="col-md-7">
    <div className="row">
        <div className="col-md-6">
        <br/>
        <img className="card-img-top" height="300px" src={Ima3} alt="Card image cap"/>
        </div>
        <div className="col-md-6">
        <br/>
        <img className="card-img-top" height="300px" src={Ima4} alt="Card image cap"/>
        
        </div>
        
    </div>
    </div>
   
    </div>
    <br/>
    <br/>
  </div>

)

export default ImpreApi