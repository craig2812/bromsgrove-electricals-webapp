import * as React from 'react';
import './services.css';
import pageData from "../../pages.json";
import { ServicesPage } from '../../components/ServicesPage/servicesPage';
import {backdropItem} from '../../components/Backdrop/backdrop'

const Services = () => {

    return (
        <div>

            <ServicesPage heading={pageData.services.services.header} content={pageData.services.services.content}>
                <div id='backDrop List' style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'}}>
                    <div>
                {backdropItem(<ServicesPage heading={pageData.services.testing.header} content={pageData.services.testing.content}/>, "Testing")}
                {backdropItem(<ServicesPage heading={pageData.services.commercial.header} content={pageData.services.commercial.content}/>, "Commercial")}
                </div>
                <div>
                {backdropItem(<ServicesPage heading={pageData.services.charging.header} content={pageData.services.charging.content}/>, "Charging")}
                {backdropItem(<ServicesPage heading={pageData.services.domestic.header} content={pageData.services.domestic.content} />, "Domestic")}
                </div>
                </div>
            </ServicesPage>
            <div style={{paddingInline: '10px', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <h2>Some Pictures</h2>
            </div>


        </div>
    );
};

export default Services;