import React from 'react';
import Header from '../../components/Header';
import styles from './October.module.css';
import OctoberCalendar from '../../components/OctoberCalendar'
import Footer from '../../components/Footer';


function October() {
    return (
        <div>
            <Header />
            
            <OctoberCalendar />

            <Footer/>
            
        </div>
    );
}

export default October;