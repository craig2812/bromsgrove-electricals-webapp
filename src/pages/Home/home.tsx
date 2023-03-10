import * as React from 'react';
import {NavBar} from '../../components/NavBar/navbar';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>
            <h1>Welcome to Bromsgrove Electricals</h1>
            <p>
                We offer a wide range of services to help you with all your electrical
                and DIY needs. Browse our website to learn more about our services, and
                don't hesitate to contact us if you have any questions.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloremque eaque illo magnam minus modi neque numquam odio odit officiis porro, quaerat ratione temporibus ut voluptatem? Deleniti illum ipsam tempora?</p>
        </div>
    );
};

export default Home;