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
            <button className={styles.re_btn}> 
            {/* <Link to="/submitReturn">Return NOW!</Link>  */}
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfslRPRWnbZ4ZIo8BWX6IGtJXUqoV0zfV6fjtnJV8NCKdQayg/viewform'>Return NOW!</a>
            </button>
          }
        </div>
    </header>
    
  )
}

export default Header