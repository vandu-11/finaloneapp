import React from 'react';
import Header from '../../components/Header';
import styles from './November.module.css';
import NovemberCalendar  from '../../components/NovemberCalendar';
import Footer from '../../components/Footer';


function November() {
    return (
        <div>
            <Header />
            
            <NovemberCalendar />
            <Footer/>

            
        </div>
    );
}

export default November;