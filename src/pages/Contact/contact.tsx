import * as React from 'react';
import { useEffect, useState } from 'react';
import {NavBar} from '../../components/NavBar/navbar';
import {ContactForm} from "./ContactForm";
import './contactForm.css'

const Contact = () => {

    const [contactData, setContactData] = useState([{}])
    useEffect(()=>{
        //this is calling package.json proxy value plus adding /content to end of path
        fetch("/contact").then(
          response => response.json()).then(
            data => {
              setContactData(data)}
          )
            }, [])
      console.log('contact', contactData)
    return (
        <div>
           <ContactForm/>
        </div>
    );
};

export default Contact;