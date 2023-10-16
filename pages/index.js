import React, { useState } from "react";
import Link from "next/link";

import styles from "./landing.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Menu() {
  const [showAcademiesMenu, setShowAcademiesMenu] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showgallery, setShowgallery] = useState(false);
  const [showupcomingevents, setShowupcomingevents] = useState(false);
  const[showFSAWhitefield, setShowFSAWhitefield] = useState(false);
  const[showFSAMahadevpura, setShowFSAMahadevpura] = useState(false);
  const[showseptember, setShowseptember] = useState(false);
  const[showoctober, setShowoctober] = useState(false);
  const[shownovember, setShownovember] = useState(false);

  const toggleAcademiesMenu = () => {
    setShowAcademiesMenu(!showAcademiesMenu);
  };

  const toggleSignupForm = () => {
    setShowSignupForm(!showSignupForm);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const toggleGallery = () => {
    setShowgallery(!showgallery);
  };

  const toggleUpcomingEvents = () => {
    setShowupcomingevents(!showupcomingevents);
  };

  const toggleFSAWhitefield = () => {
    setShowFSAWhitefield(!showFSAWhitefield);
  };
  const toggleFSAMahadevpura = () => {
    setShowFSAMahadevpura(!showFSAMahadevpura);
  };

  
  const toggleoctober = () => {
    setShowoctober(!showoctober);
  }
  const togglenovember = () => {
    setShownovember(!shownovember);
  }




  return (
    <div>
      <Header />
      <div className={styles.centeredMenu}>
        <ul className={styles.menuList}>
          <li>
            <label htmlFor="menuacademies" onClick={toggleAcademiesMenu}>
              <input
                type="radio"
                name="menuOption"
                value="academies"
                id="menuacademies"
              />
              <span title="Parents registration and login">Academies</span>
            </label>

            {showAcademiesMenu && (
              <ul className={styles.subMenuList}>
                <li>
               <Link href="/FSAMahadevpura"style={{ textDecoration: 'none' }}>
                    <label onClick={toggleFSAMahadevpura}>
                      <input
                        type="radio"
                        name="menuOption"
                        value="fsa mahadevpura"
                        id="menufsa-mahadevpura"
                      />
                      <span title="Learn about our  FSA Mahadevpura">FSA Mahadevpura</span>
                    </label>
                  </Link>


                </li>
                <li>
                  <Link href="/FSAWhitefield"style={{ textDecoration: 'none' }}>
                    <label onClick={toggleFSAWhitefield}>
                      <input
                        type="radio"
                        name="menuOption"
                        value="fsa whitefield"
                        id="menufsa-whitefield"
                      />
                      <span title="Learn about our  FSA Whitefield">FSA Whitefield</span>
                    </label>
                  </Link>
                </li>
                <li>
                  <Link href="/Signup"style={{ textDecoration: 'none' }}>
                    <label onClick={toggleSignupForm}>
                      <input
                        type="radio"
                        name="menuOption"
                        value="signup"
                        id="signup"
                      />
                      <span title="Register for  Parent Sign Up">Sign Up</span>
                    </label>
                  </Link>
                </li>
                <li>
                  <Link href="/login"style={{ textDecoration: 'none' }}>
                    <label onClick={toggleLoginForm}>
                      <input
                        type="radio"
                        name="menuOption"
                        value="login"
                        id="login"
                      />
                      <span title=" Parent login">Login</span>
                    </label>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/Gallery"style={{ textDecoration: 'none' }}>
              <label onClick={toggleGallery}>
                <input
                  type="radio"
                  name="menuOption"
                  value="gallery"
                  id="menu-gallery"
                />
                <span title="Photos of club Gallery">Gallery</span>
              </label>
            </Link>
          </li>

          <li>
            <label htmlFor="menuupcomingevents" onClick={toggleUpcomingEvents}>
              <input
                type="radio"
                name="menuOption"
                value="upcoming events"
                id="menuupcomingevents"
              />
              <span title="upcoming events">Upcoming Events</span>
            </label>

            {showupcomingevents && (
              <ul className={styles.subMenuList}>
                
                <li>
                  <Link href="/Upcoming/October"style={{ textDecoration: 'none' }}>
                    <label onClick={toggleoctober}>
                      <input
                        type="radio"
                        name="menuOption"
                        value="october"
                        id="menuoctober"
                      />
                      <span title="Events conducting on October">October</span>
                    </label>
                  </Link>
                </li>
                <li>
                  <Link href="/Upcoming/November"style={{ textDecoration: 'none' }}>
                    <label onClick={togglenovember}>
                      <input
                        type="radio"
                        name="menuOption"
                        value="november"
                        id="menunovember"
                      />
                      <span title="Events conduction on November">November</span>
                    </label>
                  </Link>
                </li>
                <li>
                  <Link href="/Upcoming/December"style={{ textDecoration: 'none' }}>
                    <label onClick={toggleLoginForm}>
                      <input
                        type="radio"
                        name="menuOption"
                        value="december"
                        id="menudecember"
                      />
                      <span title="Events conduction on December">December</span>
                    </label>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
      <Footer />
      </div>
    </div>
  );
}



export default Menu;