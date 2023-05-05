import React, { useEffect, useState } from 'react'
import styles from './bannerStyles.module.scss';
import splashImage from "../../assets/Image1.jpg";
import reBanner from "../../assets/reBanner.png";
import reBannerMobile from "../../assets/reBanner_mobile.png";
import { Link } from 'react-router-dom';

import $ from 'jquery'
// import variables from '../variables.scss';


export default function Banner() {
  let words = [
    "Your Impulsive Buys",
    "Misfit Clothing",
    "Damaged Goods",
    "Defective Items",
    "Pointless Purchases",
    "Unwanted Gifts",
    "Overpriced Buys",
    "Incorrect Packages"
  ]

  let initiateRoll = () => {
    console.log('call')
    let i = 0;
    setInterval(() => {

      $('#rollWords').fadeOut(function () {
        $(this).html(words[i = (i + 1) % words.length]).fadeIn()
      })
    }, 2000)
  }

  useEffect(() => {
    initiateRoll();
    // jQueryCode()
  }, [])

  return (
    <>
      <div className={styles.reBanner}>
        <div id="imageParallax" className={`${styles.reBanner_container} ${styles.aspect16_9} ${styles.imageParallax}`}>
          {/* <img src={reBanner}></img> */}
          {/* <div className='overlay'></div> */}
          <picture>
            <source media="(min-width:600px)" srcSet={reBanner}/>
            <source media="(max-width:599px)" srcSet={reBannerMobile}/>
            <img src={reBanner} alt=""></img>
          </picture>
        </div>
        <div className={styles.reBanner_text}>
          <h1 className={styles.desktop_only}>
            RISHI SUCKS
          </h1>
          <h1 className={`${styles.mobile_only} ${styles.mobile_heading}`}>
            We Return your shopped Items for you
          </h1>

          <h5>We return your shopped items for you.</h5>
          <h5>Save more than 2 hours of your valuable time with our hassle-free returns.</h5>
          <div className={`${styles.mobile_only} ${styles.mobile_desc}`}>
            We Collect your Recently Purchased, Unwanted items from your Doorstep, Pack them up, and make sure they're Returned
            to the Store or Post office before the deadline so you can get your Refund on time.
          </div>
          
          <Link to="/submitReturn">Return NOW!</Link> 

        </div>
      </div>
      <div className={styles.reRolling_text}>
        <h2>
          We return <span id="rollWords">Your Impulsive Buys</span> for you.
        </h2>
      </div>
      <>
        
      </>
    </>
  )
}