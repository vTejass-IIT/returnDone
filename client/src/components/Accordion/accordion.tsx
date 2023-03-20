import React, { useRef, useState } from 'react'
import styles from './accordion.module.scss'

export default function Accordion(props:any) {

const [clicked, setClicked] = useState(false);
const contentEl = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.accordion} key={props.index}>
        <div className={styles.accordion_item}>
            <div className={styles.accordion_title} onClick={()=>setClicked(!clicked)}>
                <h3>
                    {props.label} 
                </h3>
                <div className={styles.accordion_pointer}>
                    {clicked?"-":"+"}
                </div>
            </div>{
                clicked && <div
                ref={contentEl} 
                className={styles.accordion_content}>
                {props.content}
                </div>
            }
            
        </div>
    </div>
  )
}
