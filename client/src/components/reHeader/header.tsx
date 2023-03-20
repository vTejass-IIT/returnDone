import React from 'react';
import styles from './headerStyles.module.scss';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import reHeader from "../../assets/reLogo_500.svg";

const Header = () => {
  let curRoute = useLocation().pathname;
  console.log(curRoute,'..route')
  return (
    <header className={styles.re_header}>
        <div className={styles.re_header_logo}>
          <img src={reHeader}></img>
        </div>
        <div className={styles.re_header_quickLinks}>
        {curRoute != "/submitReturn" && 
            <button className={styles.re_btn}> <Link to="/submitReturn">Return NOW!</Link> </button>
          }
        </div>
    </header>
    
  )
}

export default Header