import React, { Component } from 'react';
import DashboardForm from '../Container/DashboardForm';
import DashboardImage from '../Container/DashboardImage';

class Dashboard extends Component {

    render() {
        return (
            <div>
            <DashboardImage /> 
            <hr></hr>
            <DashboardForm />           
            </div>
        );
    }
}



export default Dashboard;