import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Ima1 from "../../../../../public/img/Impregnado.jpg";
import Ima2 from "../../../../../public/img/p3.jpg";
const Body3 =() => (
   <div>
      <br/>
   <div className="row">
   <a className="col-md-6 a" href="/Servicios">
   <ScrollAnimation  animateIn='fadeInLeft'>
      <div className="card">
      <img className="card-img-top" height="350px" src={Ima1} alt="Card image cap"/>
      </div>
       <div>    
       <h1 className="text-center anis">Impregnado</h1>
       </div>
       </ScrollAnimation>
   </a>
   <a className="col-md-6 a" href="/Servicios">
   <ScrollAnimation  animateIn='fadeInRight'>
        <div className="card">
        <img className="card-img-top" height="350px" src={Ima2} alt="Card image cap"/>
        </div>
        <div>
       <h1 className="text-center anis">Secado</h1>  
       </div>
       </ScrollAnimation>
   </a>
   </div> 
   <br/>
   </div>

)
export default Body3