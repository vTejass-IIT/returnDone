import React, { useState } from 'react'
import Cards from '../Cards/cards';
import styles from './benefits.module.scss';
import Img1 from '../../assets/Image1.png';
import Img2 from '../../assets/Image2.png';
import Img3 from '../../assets/Image3.png';
import Img4 from '../../assets/Image4.png';


function Benefits() {
        const [curCardData, setCurCardData] = useState([
                {
                        imgSrc: Img1,
                        heading: 'Hassle-free returns',
                        description: 'Don\'t worry about the hassle of packaging and shipping your returns. We take care of everything, including doorstep pickup for items to be returned.'
                }, {
                        imgSrc: Img2,
                        heading: 'Save Time',
                        description: 'We know that returning items can be time-consuming, so we aim to save you around 3 hours of your valuable time by handling the entire return process for you.'
                }, {
                        imgSrc: Img3,
                        heading: 'Professional Packaging',
                        description: 'No boxing, No Taping, No Printing, No Labeling. We take care of everything by professionally packaging your items, giving you peace of mind.'
                }, {
                        imgSrc: Img4,
                        heading: 'Forget Deadline Anxiety',
                        description: 'Never miss a return deadline again no matter how busy you are. We return your packages in a timely manner saving you a lot of money.'
                }
        ]);
        return (
                <>
                        <section className={styles.re_Benefits} id="reBenefits">
                                <h3></h3>
                                <div className={styles.re_Benefits_cards}>
                                        {
                                                curCardData.map((item, index) => (
                                                        <Cards
                                                                key={item.heading}
                                                                imgSrc={item.imgSrc}
                                                                heading={item.heading}
                                                                description={item.description}
                                                        ></Cards>
                                                ))
                                        }

                                </div>
                        </section>
                        <div className={styles.pricing}>
                                {/* <h2>What is Lorem Ipsum?</h2> */}
                                <h3> Life is too short to do your returns yourself. Focus on the more important things and leave the returns to us.
                                </h3>
                                        <p>
                                                <button className={styles.reBanner_btn}>
                                                        <a className={styles.reBanner_btn_link} target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSfslRPRWnbZ4ZIo8BWX6IGtJXUqoV0zfV6fjtnJV8NCKdQayg/viewform'>Return NOW!</a>
                                                </button>
                                        </p>
                                
                        </div>
                </>
        )
}

export default Benefits