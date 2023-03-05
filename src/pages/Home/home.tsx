import * as React from 'react';
import Navbar from '../../components/NavBar/navbar';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar/>
            <h1>Welcome to Bromsgrove Electricals</h1>
            <p>
                We offer a wide range of services to help you with all your electrical
                and DIY needs. Browse our website to learn more about our services, and
                don't hesitate to contact us if you have any questions.
            </p>
        </div>
    );
};

export default Home;