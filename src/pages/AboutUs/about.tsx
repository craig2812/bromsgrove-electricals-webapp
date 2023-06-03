import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme/theme';
import React from 'react';
import '../page.css'
import { PictureBoard } from '../../components/PictureBoard/pictureBoard';

const AboutUs = () => {
    return (
      <ThemeProvider theme={theme}>
        <div className='page-container' >
          <h1>About Us</h1>
          <p>
            At Bromsgrove Electricals, we are dedicated to providing reliable and professional electrical services to our local community. From routine maintenance and safety checks to indoor and outdoor installations, we are committed to ensuring the highest level of quality in all of our work. Our team of experienced electricians are equipped to handle a variety of services, including the installation of vehicle charging points, so you can feel confident that your electrical needs are in capable hands. With a focus on customer satisfaction, we strive to exceed expectations and deliver exceptional results.
          </p>
          <PictureBoard ></PictureBoard>
  
        </div>
  
      </ ThemeProvider>
    )
  }

  export default AboutUs