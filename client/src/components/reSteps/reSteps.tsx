import React, { useState } from 'react'
import Cards from '../Cards/cards';
import styles from './reSteps.module.scss';
import Img1 from '../../assets/gifs/return_now_click.gif';
import Img2 from '../../assets/gifs/pay-per-click.gif';
import Img3 from '../../assets/gifs/lotus-pose.gif';
import Img4 from '../../assets/gifs/money-bag.gif';


function ReSteps() {
        const [curCardData, setCurCardData] = useState([
                {
                        imgSrc: Img1,
                        heading: 'Return Now',
                        description: 'Fill out our short form with your basic details and choose the stores and items you want to return.'
                }, {
                        imgSrc: Img2,
                        heading: 'Complete Payment',
                        description: 'Pick a date and time when we can come and pick up your package from your door. Complete the payment process and submit the form.'
                }, {
                        imgSrc: Img3,
                        heading: 'Relax now',
                        description: 'We will come to your house during your chosen pickup time to collect the package and verify the information.'
                }, {
                        imgSrc: Img4,
                        heading: 'Get Refunded',
                        description: 'We will work with the retailer to return the package and initiate your refund at the earliest.'
                }
        ]);
        return (
                <section className={styles.re_Steps} id="reSteps">
                        <h3></h3>
                        <div className={styles.re_Steps_cards}>
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
        )
}

export default ReSteps;