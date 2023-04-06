import React from 'react';
import styles from './headerStyles.module.scss';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import reHeader from "../../assets/relogo.png";
import $ from 'jquery'

const Header = () => {
  let curRoute = useLocation().pathname;
  console.log(curRoute,'..route');

  let isElementInView = (el: any) => {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

  let moveToLocation = ()=>(event:any) =>{
    event.preventDefault();
    let pos = $(event.target).data('position');
    let headerHeight = document.getElementsByTagName("header")[0]?.clientHeight;
    // console.log($(pos).getBoundingClientRect().y)
    let elemInView = isElementInView(document.getElementById(pos));
    // if(!elemInView){
      
    // }
    document.getElementById(pos)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    // let posY = document.getElementById(pos)?.getBoundingClientRect().y;
    // if(posY!= null && posY > 0){
    //   if(posY!= null && posY > 90 && posY < window.scrollY){
    //     window.scrollTo(0, posY - headerHeight);
    //   } 
    // } else if(posY!= null){
    //   window.scrollTo(0, posY - headerHeight);
    // }
  }
  return (
    <header className={styles.re_header}>
        <div className={styles.re_header_logo}>
          <img src={reHeader}></img>
        </div>
        <div className={styles.re_header_quickLinks}>
          <ul>
            <li>
              <a href="javascript:;" data-position="reBenefits" onClick={moveToLocation()}>Benefits</a>
            </li>
            <li>
              <a href="javascript:;" data-position="reSteps" onClick={moveToLocation()} >Steps</a>
            </li>
            <li>
              <a data-position="reFAQs" href="javascript:;" onClick={moveToLocation()} >FAQ</a>
            </li>
        
          {curRoute != "/submitReturn" &&
            <li>
              <button className={styles.re_btn}> 
                {/* <Link to="/submitReturn">Return NOW!</Link>  */}
                  <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSfslRPRWnbZ4ZIo8BWX6IGtJXUqoV0zfV6fjtnJV8NCKdQayg/viewform'>Return NOW</a>
                </button>
            </li> 
            }
          </ul>
        </div>
    </header>
    
  )
}

export default Header