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
          <picture>
            <source media="(min-width:901px)" srcSet={reBanner}/>
            <source media="(max-width:900px)" srcSet={reBannerMobile}/>
            <img src={reBanner} alt=""></img>
          </picture>
        </div>
        <div className={styles.reBanner_text}>
          <h1>
            Want to <span className={styles.primary_text}>Return,</span> Consider it <span className={styles.primary_text}> Done!</span>
          </h1>

          <h5>We return your shopped items for you.</h5>
          <h5>Save more than 2 hours of your valuable time with our hassle-free returns.</h5>

          <button className={styles.reBanner_btn} onClick={()=>window.open('https://docs.google.com/forms/d/e/1FAIpQLSfslRPRWnbZ4ZIo8BWX6IGtJXUqoV0zfV6fjtnJV8NCKdQayg/viewform', '_blank')}>
            {/* <Link to="/submitReturn">Return NOW!</Link>  */}
            <a className={styles.reBanner_btn_link} target="_blank" href='javascript:;'>Return Now</a>
          </button>

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