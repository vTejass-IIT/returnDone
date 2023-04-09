import React from 'react';
import styles from './headerStyles.module.scss';
import { useLocation } from 'react-router-dom';
import reHeader from "../../assets/relogo_transparent.png";
import $ from 'jquery'

const Header = () => {
  let curRoute = useLocation().pathname;

  let moveToLocation = ()=>(event:any) =>{
    event.preventDefault();
    let pos = $(event.target).data('position');
    console.log(pos)
    document.getElementById(pos)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }
  return (
    <header className={styles.re_header}>
        <div className={styles.re_header_logo}>
          <a href="/">
            <img src={reHeader}></img>
          </a>
        </div>
        <div className={styles.re_header_quickLinks}>
          <ul>
            <li>
              <a href="javascript:;" data-position="reSteps" onClick={moveToLocation()}>How it works</a>
            </li>
            <li>
              <a href="javascript:;" data-position="reBenefits" onClick={moveToLocation()} >Why Choose us</a>
            </li>
            <li>
              <a href="javascript:;" data-position="reBrands" onClick={moveToLocation()} >Where we return</a>
            </li>
            <li>
              <a href="javascript:;" data-position="reFAQs" onClick={moveToLocation()} >FAQs</a>
            </li>
        
          {curRoute != "/submitReturn" &&
            <li>
              <button className={styles.re_btn} onClick={()=>window.open('https://docs.google.com/forms/d/e/1FAIpQLSfslRPRWnbZ4ZIo8BWX6IGtJXUqoV0zfV6fjtnJV8NCKdQayg/viewform', '_blank')}> 
                {/* <Link to="/submitReturn">Return NOW!</Link>  */}
                  <a target="_blank" href='javascript:;'>Return Now</a>
                </button>
            </li> 
            }
          </ul>
        </div>
    </header>
    
  )
}

export default Header