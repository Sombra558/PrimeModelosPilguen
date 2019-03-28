import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Sub-Components/Header';
import Carrusel from './Sub-Components/Carrusel';
import Body1 from './Sub-Components/Body1';
import Body2 from './Sub-Components/Body2';
import Body3 from './Sub-Components/Body3';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Principal extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                    <Carrusel/>
                    <div id="hastaaqui1"></div>
                </div >
                <div >
                <br/>
                </div>
                <div> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <ScrollAnimation  animateIn='fadeIn'>
                                <Body1/>
                        </ScrollAnimation>  
                        </div>
                    </div>
                </div>
                </div>
                <ScrollAnimation  animateIn='fadeIn'>
                <div className="body2" > 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        
                        <Body2/>
                      
                               
                        </div>
                    </div>
                </div>
                </div></ScrollAnimation>
                <div id="hastaaqui2">
                <br/>
                </div>
                <div> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <ScrollAnimation  animateIn='fadeIn'>
                        <Body3/>
                        </ScrollAnimation> 
                               
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Principal />, document.getElementById('root'));
}
