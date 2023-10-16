import React from 'react';
import Header from '../components/Header';
import styles from './FSAWhitefield.module.css';
import Footer from '../components/Footer';

function Whitefield() {
    return (
        <div>
            <Header />
            <h1>FSA WHitefield </h1>
            
            {/* Content for your component can go here */}
         <div>
            </div>  
            <div className={styles.footer}>
                
            <Footer/> 
            </div> 
        </div>
    );
}

export default Whitefield;