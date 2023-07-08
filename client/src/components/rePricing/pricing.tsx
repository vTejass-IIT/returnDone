import React from 'react'
import ImgPricing from '../../assets/pricing_section.png';
import styles from './pricing.module.scss'

function Pricing() {
  return (
    <section id="rePricing">
    <div className={styles.rePricing}>
    <h3>
    Exclusive Pricing Plan
      </h3>
      <div className={styles.rePricing}>
        <img src={ImgPricing} alt="Use PromoCode MAY40 at checkout"></img>
    </div>
    </div>
    <div className={styles.pricing}>
                                {/* <h2>What is Lorem Ipsum?</h2> */}
                                <h3> Life is too short to do your returns yourself</h3>
                                <h3> Focus on more important things and leave the returns to us.</h3>
                                        <p>
                                                <button className={styles.reBanner_btn} onClick={()=>window.open('https://docs.google.com/forms/d/e/1FAIpQLSfslRPRWnbZ4ZIo8BWX6IGtJXUqoV0zfV6fjtnJV8NCKdQayg/viewform', '_blank')}>
                                                        <a className={styles.reBanner_btn_link} href='javascript:;'>Return Now</a>
                                                </button>
                                        </p>
                                
                        </div>
    </section>
  )
}

export default Pricing;