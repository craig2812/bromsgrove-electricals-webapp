import * as React from 'react';
import { useEffect, useState } from 'react';
import '../page.css';

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
        <div className="page-container">
            <h1>Welcome to Bromsgrove Electricals</h1>
            Bromsgrove Electricals provides reliable and professional electrical services for your home or business. Our services include indoor and outdoor installations, routine checks, and vehicle charge point installation. Trust our experienced electricians to deliver exceptional results and ensure your satisfaction.
            </div>
    );
};

export default Home;