import * as React from 'react';
import { useEffect, useState } from 'react';
import './home.css';

const Home = () => {

// const [backEndData, setBackEndData] = useState([{}])

// useEffect(()=>{
//   //this is calling package.json proxy value plus adding /content to end of path
//   fetch("/content").then(
//     response => response.json()).then(
//       data => {
//         setBackEndData(data)}
//     )
//       }, [])
// console.log('data', backEndData)

    return (
        <div className="home-container">
            <h1>Welcome to Bromsgrove Electricals</h1>
            <p>
                We offer a wide range of services to help you with all your electrical
                and DIY needs. Browse our website to learn more about our services, and
                don&apos;t hesitate to contact us if you have any questions.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloremque eaque illo magnam minus modi neque numquam odio odit officiis porro, quaerat ratione temporibus ut voluptatem? Deleniti illum ipsam tempora?</p>
        </div>
    );
};

export default Home;