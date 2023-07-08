import React, { useState } from 'react'
import styles from './testimonials.module.scss'
import { Autoplay } from 'swiper';
import ShreeRam from '../../assets/testimonials/Shreeram_Hiriyanna.jpeg'
import Mahak_Patel from '../../assets/testimonials/Mahak_Patel.jpeg'
import Navya_Sheth from '../../assets/testimonials/Navya.jpeg'
import Rajesh_Naidu from '../../assets/testimonials/Rajesh_Naidu.jpg'
import Sree_Ram_Pammi from '../../assets/testimonials/Sree_Ram_Pammi.jpg'
import Bhuvana from '../../assets/testimonials/Bhuvana.jpg'
import Prafful_Patel from '../../assets/testimonials/Prafful_Patel.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

function Testimonials() {
    const [testimonials, setTestimonials] = useState([
        {
            image: ShreeRam,
            name: 'Shreeram Hiriyanna',
            content: `What impressed me most about Returndone was the promptness of the service.
            I didn't have to wait long or deal with delays. The platform ensured a swift
            return process, allowing me to receive a refund in a timely manner.
            With Returndone, returning items is made easy, making it a top recommendation for hassle-free returns`
        },
        {
            image: Mahak_Patel,
            name: 'Mahak Patel',
            content: `It was a great experience with the service provided by Returndone.
            I appreciate the convenience offered to any customer by asking for all the information in one take.
            One thing I would like for Returndone to have is to mention the required information all at once prior to filling out the form.`
        },
        {
            image: Navya_Sheth,
            name: 'Navya Sheth',
            content: `Loved the ease and convenience returnDone offered. Saved me a lot of time!`
        },{
            image: Sree_Ram_Pammi,
            name: 'Sree Ram Pammi',
            content: `I really liked the service from Return Done. Being a student who has caught up with assignments and classes, it is difficult for me to go to the stores and return the product, with Return done, it was such an ease. Yeah, you can attach the photo.`
        },
        {
            image: Rajesh_Naidu,
            name: 'Rajesh Naidu',
            content: `ReturnDone service is a very good initiative. It eases the return process 1 click away. I tried it once and I am satisfied with its service.`
        },
        {
            image: Bhuvana,
            name: 'Bhuvana Subramani',
            content: `The order return service was hassle-free and efficient, making my return process a breeze. Highly recommended.`
        },
        {
            image: Prafful_Patel,
            name: 'Prafful Patel',
            content: `The order return service was hassle-free and efficient, making my return process a breeze. Highly recommended.`
        }
    ])
    return (
        <section className={styles.testimonials} id="reTestimonials">
            <h3>What our users say about us</h3>
            <section className={styles.testimonials_section}>
                <Swiper
                    height={100}
                    slidesPerView={3}
                    autoplay={{
                        delay: 3000
                    }}
                    loop={true}
                    modules={[Autoplay]}
                > {testimonials.map((item,index)=>(
                    <SwiperSlide key={index}>
                        <section className={styles.testimonials_card}>
                            <div className={styles.testimonials_card_body}>
                                <div className={styles.testimonials_card_content}>
                                    <div className={styles.testimonials_card_content_body}>
                                        {/* <span className={styles.quote}>"</span> */}
                                        <blockquote>
                                           {item.content}
                                        </blockquote>
                                        {/* <span className={styles.quote}>"</span> */}
                                    </div>
                                    <div className={styles.testimonials_card_content_author}>
                                    <div className={styles.testimonials_card_img}>
                                        <img src={item.image}></img>
                                    </div>
                                    <div>
                                    {item.name}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </section>

    )
}

export default Testimonials