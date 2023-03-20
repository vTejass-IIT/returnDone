import React from 'react'
import cardImage from '../../assets/puma.jpeg';
import styles from './cards.module.scss'

function Cards(props: { imgSrc: string | undefined; heading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <div className={`${styles.cards}`}>
        <div className={styles.cards_image}>
            <img src={props.imgSrc} alt=''></img>
        </div>
        <div className={styles.cards_content}>
            <div className={styles.cards_content__tile}>
                <h4>
                    {props.heading}
                </h4>
            </div>
            <div className={styles.cards_content__desc}>
                {props.description}
            </div>
        </div>
    </div>
  )
}

export default Cards