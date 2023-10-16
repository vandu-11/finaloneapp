import { useState } from 'react';
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import Header from '../../components/Header';
import styles from './Firstpage.module.css';
import Footer from '../../components/Footer';


function Firstpage() {
    const router = useRouter();
    const [showpaymentsandsubscriptions, setShowpaymentsandsubscriptions] = useState(false);
    const[showregister, setShowregister] = useState(false);
    const[showdocument, setShowdocument] = useState(false);
    const[showshoppingcarts, setShowshoppingcarts] = useState(false);

    const togglePaymentsandSubscriptions = () => {
        setShowpaymentsandsubscriptions(!showpaymentsandsubscriptions);
    } 
    
    const toggleregister = () => {
        setShowregister(!showregister);
    }

    const toggleDocument = () => {
        setShowdocument(!showdocument);
    }
    const toggleShoppingCarts = () => {
        setShowshoppingcarts(!showshoppingcarts);
    }


    return (
        <div>
            <Header />
            <div className={styles.centeredMenu}>
                <ul className={styles.menuList}>
                    <li>
                        <Link href="/parents/Register"style={{ textDecoration: 'none' }}>
                        <label onClick={toggleregister}>
                            <input
                                type="radio"
                                name="menuOption"
                                value="register"
                                id="menu-register"
                            />
                            Register Your Child
                        </label>
                        </Link>
                    </li>
                    <li>
                        <Link href="/parents/Payments"style={{ textDecoration: 'none' }}>
                            <label  onClick={togglePaymentsandSubscriptions}>
                                <input
                                    type="radio"
                                    name="menuOption"
                                    value="payments and subscriptions"
                                    id="menu-payments-and-subscriptions"
                                />
                                Payments and Subscriptions
                            </label>
                        </Link>
                    </li>
                    <li>
                        <Link href="/parents/Document"style={{ textDecoration: 'none' }}>
                            <label onClick={toggleDocument}>
                                <input
                                    type="radio"
                                    name="menuOption"
                                    value="document"
                                    id="menu-documents"
                                />
                                Documents 
                            </label>
                        </Link>
                    </li>
                    <li>
                        <Link href="/parents/ShoppingCarts"style={{ textDecoration: 'none' }}>
                            <label>
                                <input
                                    type="radio"
                                    name="menuOption"
                                    value="shopping carts"
                                    id="menu-shopping-carts"
                                />
                                Shopping  Carts
                            </label>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footer}>
            <Footer />
            </div>
            </div>
    );
}

export default Firstpage;
