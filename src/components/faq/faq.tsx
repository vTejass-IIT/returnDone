import React, { useState } from 'react'
import Accordion from '../Accordion/accordion';
import styles from './faq.module.scss';

function FAQ() {
    const panels = [
        {
            label: 'What is the process of returning items directly from my doorstep?',
            content: 'We provide a doorstep pickup service for all the items you want to return. All you need to do is book a pickup online through our website and provide us with the details of the items you wish to return. Our team will then come and collect the items from your doorstep',
        },
        {
            label: 'How long does the return process take?',
            content: 'The return process typically takes 3-5 business days. Once our team picks up the items, it will take about 2-3 days for us to process the return.',
        },	
        {
            label: 'Do I have to pay for the return service?',
            content: 'No, our return service is free of cost.',
        },
        {
            label: 'What items can I return through this service? ',
            content: 'You can return any item that is eligible for returns as per the seller\'s return policy. ',
        },
        {
            label: 'What happens if my item is damaged during the return process?',
            content: 'We take utmost care while handling the items and packing them for return. However, if the item is damaged during the return process, we will work with the seller to get you the appropriate compensation.'
        },
        {
            label: 'Do I need to provide any proof of purchase for the item I am returning? ',
            content: 'Yes, you need to provide us with the proof of purchase (invoice, bill, etc.) for the item you are returning.'
        },
        {
            label: 'How long do I need to wait for the refund? ',
            content: 'The refund process typically takes 7-10 business days from the date the item is received by the seller. '
        },
        {
            label: 'Will I be notified once the return is processed? ',
            content: 'Yes, you will be notified via e-mail or SMS once the return is processed. '
        },
        {
            label: 'Can I return items without packaging? ',
            content: 'No, you must ensure that the items are packed properly in their original packaging before they are picked up.'
        },
        {
            label: 'Do you provide a tracking number for the return delivery? ',
            content: 'Yes, we provide a tracking number for all return deliveries. You can use this tracking number to track the status of your return.'
        },
    ];
    const [accordionPanels, setAccordionPanels] = useState(panels);
    const [isActive, setIsActive] = useState(true);

    let activateTab = (index: number)=>{
        console.log(index);
    }
  return (
    <>
    <h2>FAQs</h2>
        {accordionPanels.map((item,index)=>{
            return(
                <Accordion index={index} label={item.label} content={item.content} >
                </Accordion>
            // <div className={styles.accordion} key={index}>
            //     <div className={styles.accordion_item}>
            //         <div className={styles.accordion_title} onClick={()=>activateTab(index)}>
            //             <div>
            //                 {item.label} 
            //             </div>
            //             <div>
            //                 {isActive?"+":"-"}
            //             </div>
            //         </div>
            //         <div className={styles.accordion_content}>
            //             {item.content}
            //         </div>
            //     </div>
            // </div>
                
            )
        })}
    </>
  )
}

export default FAQ