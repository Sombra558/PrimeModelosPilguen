import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactoApp from './Contacto/ContactoApi';


export default class Contactando extends Component {
    render() {
        return (
            <div>
            <ContactoApp/>
        </div>
        );
    }
}

if (document.getElementById('contactame')) {
    ReactDOM.render(<Contactando />, document.getElementById('contactame'));
}
