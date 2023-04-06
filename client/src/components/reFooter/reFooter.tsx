import React from 'react';
import styles from './reFooter.module.scss'
import reHeader from "../../assets/reLogo_500.svg";
import fb from "../../assets/facebook.svg";
import { faFacebook, faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    let fbStyle = {
        backgroundImage:`url(${fb})`
    }
  return (
    <>
        <footer className={styles.reFooter}>
            <div className={styles.reFooter_section}>
                <div>
                    <img src={reHeader}></img>
                </div>
                <div className={styles.reFooter_section_contact}>
                    <div>
                        <h4>Get in Touch</h4>
                        <div>
                            <p>
                                <span><b>Email: </b></span> <span>returnDone2023@gmail.com</span>
                            </p>
                            <p>
                                <span><b>Phone: </b></span> <span>(312)-934-5955</span>
                            </p>
                            
                        </div>
                    </div>
                    <div>
                        <ul className={styles.reFooter_icon}>
                            <li>
                                <a href='' className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href='' className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href='' className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href='' className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.reFooter_copy}>
            <FontAwesomeIcon icon={faCopyright} /> 2023, All rights reserved
            </div>
        </footer>
    </>
  )
}

export default Footer;