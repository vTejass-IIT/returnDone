import React, { useState } from 'react'
import styles from './testimonials.module.scss'
import { Autoplay } from 'swiper';
import ShreeRam from '../../assets/testimonials/Shreeram_Hiriyanna.jpg'
import Mahak_Patel from '../../assets/testimonials/Mahak_Patel.jpeg'
import Navya_Sheth from '../../assets/testimonials/Navya.jpeg'
import Rajesh_Naidu from '../../assets/testimonials/Rajesh_Naidu.jpg'
import Sree_Ram_Pammi from '../../assets/testimonials/Sree_Ram_Pammi.jpg'
import Bhuvana from '../../assets/testimonials/Bhuvana.jpg'
import Prafful_Patel from '../../assets/testimonials/Prafful_Patel.jpg'
import Ankita_Mapari from '../../assets/testimonials/Ankita_Mapari.jpg'
import Shreyanka from '../../assets/testimonials/Shreyanka.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

function Testimonials() {
    const [testimonials, setTestimonials] = useState([
        {
            image: ShreeRam,
            name: 'Shreeram Hiriyanna',
            content: `Return Done made returning my order a breeze with its convenience and efficiency. The process was quick and hassle-free, thanks to clear instructions and a streamlined platform. What impressed me most about Return Done was the promptness of the service. I didn't have to wait long or deal with delays. The platform ensured a swift return process, allowing me to receive a refund in a timely manner. I highly recommend Return Done to others in need of a stress-free return experience.`
        },
        {
            image: Mahak_Patel,
            name: 'Mahak Patel',
            content: `I had a great experience with the service provided by Return Done. I appreciate the convenience offered to any customer by asking for all the information in one take. One thing that I would suggest is to mention all the information required to successfully complete the return request form prior to filling out the actual form.`
        },
        {
            image: Navya_Sheth,
            name: 'Navya Sheth',
            content: `Loved the ease and convenience Return Done offered. Saved me a lot of time!`
        },{
            image: Sree_Ram_Pammi,
            name: 'Sree Ram Pammi',
            content: `I really liked the service from Return Done. Being a student who is caught up with assignments and classes, it is difficult for me to go to the stores and return the product. With Return done, it was such an ease.`
        },
        {
            image: Rajesh_Naidu,
            name: 'Rajesh Naidu',
            content: `Return Done service is a very good initiative. It eases the return process and hassle free returns are literally 1 click away. I tried it once and I am very satisfied with the service.`
        },
        {
            image: Bhuvana,
            name: 'Bhuvana Subramani',
            content: `Return Done was very convenient and reliable. They picked the item from my apartment and returned it before the return deadline. Saved me a lot of time and effort by eliminating the need to travel for the sole purpose of returning a purchase.`
        },
        {
            image: Prafful_Patel,
            name: 'Prafful Patel',
            content: `The order return service was hassle-free and efficient, making my return process a breeze. Highly recommended.`
        },
        {
            image: Shreyanka,
            name: 'Shreyanka Chandrashekara',
            content: `I want to express my appreciation for the excellent service I received. The timely return of my package and the user-friendly website was impressive, and I was delighted with the efficiency and reliability of your service. Keep up the great work!`
        },
        {
            image: Ankita_Mapari,
            name: 'Ankita Mapari',
            content: `From the moment I engaged Return Done’s services, I was impressed by their professionalism and attention to detail. They understand the value of time and ensure that every task is completed within the agreed-upon timeframe. I have never experienced any delay in my return process. Personally, knowing that Return Done will make the return process hassle free and convenient, I am super confident in ordering anything I want. I would strongly recommend Return Done to everyone.`
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
                    breakpoints={{
                        0: {
                            // width: 576,
                            slidesPerView: 1,
                          },
                        991: {
                            // width: 576,
                            slidesPerView: 3,
                          },
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