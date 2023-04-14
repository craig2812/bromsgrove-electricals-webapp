import { Button } from '@mui/material';
import React from 'react'
import '../../pages/Services/services.css';

interface ServicesProps {
    content: string;
    heading: string;
    children?: React.ReactNode;
  }
  
  export const ServicesPage: React.FunctionComponent<ServicesProps> = ({
    content,
    heading, children  }) => {
    return (
      <div>
      <div className='services-container' style={{textAlign: "center"}}>
        <h1>{heading}</h1>
        <p>{content}</p>
{children}
      </div>
      </div>
    );
  };