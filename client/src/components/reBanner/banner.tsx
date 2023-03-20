import React, { Component, useEffect, useState } from 'react'
import styles from './bannerStyles.module.scss';
import splashImage from "../../assets/banner.jpg";
import reBanner from "../../assets/reBanner.png";
import { Link } from 'react-router-dom';

import $ from 'jquery'
// import variables from '../variables.scss';


export default function Banner() {
  let  words = [
    "Your Impulsive Buys",
    "Misfit Clothing",
    "Damaged Goods",
    "Defective Items",
    "Pointless Purchases",
    "Unwanted Gifts",
    "Overpriced Buys",
    "Incorrect Packages"
  ]
  
  let initiateRoll = ()=>{
    console.log('call')
    let i=0;
    setInterval(()=>{ 

     $('#rollWords').fadeOut(function(){
      $(this).html(words[i = (i+1)% words.length]).fadeIn()
     })
    },3000)
  }
 
  useEffect(()=>{
    initiateRoll();
    // jQueryCode()
  },[])

  return (
    <>
        <div className={styles.reBanner}>
          <div id="imageParallax" className={`${styles.reBanner_container} ${styles.aspect16_9} ${styles.imageParallax}`}>
            <img src={reBanner}></img>
          </div>
          <div className={styles.reBanner_text}>
              <h1>
              Want to <span className={styles.primary_text}>Return?</span>, consider it <span  className={styles.primary_text}> Done!</span>
              </h1>
              <button className={styles.reBanner_btn}> <Link to="/submitReturn">Return NOW!</Link> </button>
          </div>
        </div>
        <div className={styles.reRolling_text}>
          <h2>
          We return <span id="rollWords">Your Impulsive Buys</span> for you.
          </h2>
        </div>
      </>
  )
}