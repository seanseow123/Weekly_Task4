import React, { Component } from 'react';
import ContactCards from '../Container/ContactCards';
import '../Container/contact.css';

class Contact extends Component {

    render() {
        return (
            <div className='contactpage'>
            <h1>CONTACT US</h1>
            

            <ContactCards />
            </div>
        );
    }
}



export default Contact;