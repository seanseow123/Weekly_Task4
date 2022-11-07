import React, { Component } from 'react';
import scorepic from '../../../images/scorepic.jpg';
import './dashboard.css';

class DashboardImage extends Component {

    render() {
        return (
            <div>
            
                <img src={scorepic} className='scorepic' alt='scorepic' />                
            
            </div>
        );
    }
}



export default DashboardImage;