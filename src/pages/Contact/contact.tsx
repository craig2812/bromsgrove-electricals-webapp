import * as React from 'react';
import { useEffect, useState } from 'react';
import {NavBar} from '../../components/NavBar/navbar';
import {ContactForm} from "./ContactForm";

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
        <div className="home-container">
            <NavBar/>
            <h1>Contact Us Below</h1>
           <ContactForm/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloremque eaque illo magnam minus modi neque numquam odio odit officiis porro, quaerat ratione temporibus ut voluptatem? Deleniti illum ipsam tempora?</p>
        </div>
    );
};

export default Contact;