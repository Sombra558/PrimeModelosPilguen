import React from 'react';
import ImaH from "../../../../../public/img/Nuestra.png"
import ImaM from "../../../../../public/img/Mision.jpg"
import ImaV from "../../../../../public/img/Vision.jpg"
const Body1 =() => (
   <div  >
   <div>
      <br/>
         <div className="row">
            <div className="col-xs-4">
            <br/>
            <h1 className="text-center empresa">LA EMPRESA</h1>
            </div>
          </div>
     <div className="row">
         <div className="col-md-2"><hr/></div>
      
      </div>
      </div>
   <div className="row">
   <div className="col-md-12">
   <ul className="nav nav-tabs-pilguen row" id="myTab" role="tablist">
  <li className="nav-item col-md-4">
    <a className="nav-link producto active" id="historia-tab" data-toggle="tab" href="#historia" role="tab" aria-controls="historia" aria-selected="false">
     <div><h4 className="text-center">NUESTRA HISTORIA</h4></div>
    </a>
  </li>
  <li className="nav-item col-md-4">
    <a className="nav-link producto" id="mision-tab" data-toggle="tab" href="#mision" role="tab" aria-controls="mision" aria-selected="false">
    <div><h4 className="text-center">MISIÓN</h4></div>
    </a>
  </li>
  <li className="nav-item col-md-4">
    <a className="nav-link producto" id="vision-tab" data-toggle="tab" href="#vision" role="tab" aria-controls="vision" aria-selected="false">
    <div><h4 className="text-center">VISIÓN</h4></div>
    </a>
  </li>
</ul>
<br/>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="historia" role="tabpanel" aria-labelledby="historia-tab">
  <div className="row">
  <div className="col-md-6">
  <div className="card-pilguen">
     <img className="card-img-top" height="350px" src={ImaH} alt="Card image cap"/>
     </div>
  </div>
  <div className="col-md-6">
  <section className="border text-justify">
     <p>A fines del año 1995, dos familias de las ciudad de Los Ángeles; Enríquez y Lang, decidieron
hacer un aporte al desarrollo de la zona y del resto del país, creando una empresa moderna, con
profesionales a cargo y con los objetivos de crear fuentes de trabajo, mejorar el nivel de vida de
sus colaboradores, innovar en los productos que requiere el mercado, y en general satisfacer la
necesidad del ser humano que es desarrollar proyectos nuevos con el principal fin de mejorar la
calidad de vida para todos los involucrados; trabajadores y comunidad en general.</p>
  </section>
  </div>
  </div>
  </div>

  <div className="tab-pane fade" id="mision" role="tabpanel" aria-labelledby="mision-tab">
  <div className="row">
  <div className="col-md-6">
  <div className="card-pilguen">
     <img className="card-img-top" height="350px" src={ImaM} alt="Card image cap"/>
     </div></div>
     <div className="col-md-6">
     <section className="border text-justify">
     <p>Producir y colocar en el mercado la más amplia gama de productos forestales con altos
estándares de calidad, respetando todas las normas de buenas costumbres, ética y cuidado
del medio ambiente.</p>
  </section>
  </div>
  </div>
 
  </div>

  <div className="tab-pane fade row" id="vision" role="tabpanel" aria-labelledby="vision-tab">
  <div className="row">
  <div className="col-md-6">
  <div className="card-pilguen">
     <img className="card-img-top" height="350px" src={ImaV} alt="Card image cap"/>
     </div></div>
  <div className="col-md-6">
  <section className="border text-justify">
      <p>Ser una marca reconocida a nivel nacional e internacional como garantía de excelente
calidad y servicio en el sector forestal</p>
   </section>
  </div>
  </div>
 
  
  </div>
</div>
</div>
</div>
<br/>
<br/>
</div>
)
export default Body1