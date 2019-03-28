import React from 'react';
import Logo from '../../../../../public/img/Logo.png';
const Header =() => (
    <nav className="navbar navbar-expand-lg navbar-pilguen fixed-top ryu" id="myTab" role="tablist">
    <a className="navbar-brand" href="#">
    <img src={Logo} width="250px" height="80px" alt=""/>
    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  
                </ul>
                <ul className="navbar-nav text-center justify-content-between">
                <li className="nav-item">
                            <a className="nav-link negrear" href="/">INICIO <span className="sr-only">(current)</span></a>
                        </li>
                        <li id="animarscroll1" className="nav-item">
                            <a className="nav-link negrear" href="#">LA EMPRESA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link negrear" href="/Productos">PRODUCTOS</a>
                        </li>
                        <li id="animarscroll2" className="nav-item">
                            <a className="nav-link negrear" href="#">SERVICIOS</a>
                        </li>
                        <li id="animarscroll3" className="nav-item">
                            <a className="nav-link negrear" href="#">CONTACTOS</a>
                        </li>
                        </ul>
        </div>
    </nav>

)
export default Header