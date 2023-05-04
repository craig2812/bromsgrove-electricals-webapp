import * as React from 'react';
import { addPicture, fetchPics, getPictures } from '../../firebase/getData';
import '../page.css';
import { db } from '../../firebase/getData';

const Home = () => {

    return (
        <div className="page-container">
            <h1>Welcome to Bromsgrove Electricals</h1>
            Bromsgrove Electricals provides reliable and professional electrical services for your home or business. Our services include indoor and outdoor installations, routine checks, and vehicle charge point installation. Trust our experienced electricians to deliver exceptional results and ensure your satisfaction.
                        </div>
    );
};

export default Home;