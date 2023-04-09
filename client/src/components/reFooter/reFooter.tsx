import React from 'react';
import styles from './reFooter.module.scss'
import reHeader from "../../assets/relogo_transparent.png";
// import fb from "../../assets/facebook.svg";
import { faFacebook, faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    // let fbStyle = {
    //     backgroundImage:`url(${fb})`
    // }
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
                                <span><b>Email: </b></span> <span><a href="mailto:returndone2023@gmail.com">returndone2023@gmail.com</a></span>
                            </p>
                            <p>
                                <span><b>Phone: </b></span> <span><a href="tel:312-934-5955">(312) 934-5955</a></span>
                            </p>
                            
                        </div>
                    </div>
                    <div>
                        <ul className={styles.reFooter_icon}>
                            <li>
                                <a href='https://instagram.com/returndone_' target={"_blank"} className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/profile.php?id=100091309996836&mibextid=LQQJ4d' target={"_blank"} className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/company/returndone' target={"_blank"} className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href='https://wa.me/3129345955' target="_blank" className={styles.reFooter_icon_link}>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.reFooter_copy}>
            <span>&copy;</span> 2023, All rights reserved
            </div>
        </footer>
    </>
  )
}

export default Footer;