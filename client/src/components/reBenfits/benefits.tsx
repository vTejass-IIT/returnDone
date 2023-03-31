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
                        imgSrc:Img1,
                        heading:'Hassle-free returns',
                        description:'Don\'t worry about the hassle of packaging and shipping your returns. We take care of everything, including doorstep pickup for items to be returned.'
                },{
                        imgSrc:Img2,
                        heading:'Save Time',
                        description:'We know that returning items can be time-consuming, so we aim to save you around 3 hours of your valuable time by handling the entire return process for you.'
                },{
                        imgSrc:Img3,
                        heading:'Professional Packaging',
                        description:'No boxing, No Taping, No Printing, No Labeling. We take care of everything by professionally packaging your items, giving you peace of mind.'
                },{
                        imgSrc:Img4,
                        heading:'Forget Deadline Anxiety',
                        description:'Never miss a return deadline again no matter how busy you are. We return your packages in a timely manner saving you a lot of money.'
                }
        ]);
        return (
                <section className={styles.re_Benefits}>
                        <h3></h3>
                        <div className={styles.re_Benefits_cards}>
                                {
                                        curCardData.map((item,index)=>(
                                        <Cards 
                                                key={item.heading}
                                                imgSrc={item.imgSrc}
                                                heading={item.heading}
                                                description={item.description}
                                        ></Cards>
                                ))
                                }
                                
                        </div>
                        <div className={styles.pricing}>
                        <h2>What is Lorem Ipsum?</h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div>
                                <div>
                        <h2>Pricings?</h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        </div>
                </section>
        )
}

export default Benefits