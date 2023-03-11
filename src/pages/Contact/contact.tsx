import * as React from 'react';
import {NavBar} from '../../components/NavBar/navbar';
import {ContactForm} from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="home-container">
            <NavBar/>
            <h1>Contact Us Below</h1>
           <ContactForm/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloremque eaque illo magnam minus modi neque numquam odio odit officiis porro, quaerat ratione temporibus ut voluptatem? Deleniti illum ipsam tempora?</p>
        </div>
    );
};

export default Contact;