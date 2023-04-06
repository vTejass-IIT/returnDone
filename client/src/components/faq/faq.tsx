import React, { useState } from 'react'
import Accordion from '../Accordion/accordion';
import styles from './faq.module.scss';

function FAQ() {
    const panels = [
        {
            label: 'What is the process of returning items directly from my doorstep?',
            content: 'We provide a doorstep pickup service for all the items you want to return. All you need to do is book a pickup online through our website and provide us with the details of the items you wish to return. Our team will then come and collect the items from your doorstep.',
        },
        {
            label: 'How long does the return process take?',
            content: 'We pick up items from your doorstep at your conveniently selected date and time slot. As soon as we have the package we get it to the retailer in a timely manner at the earliest without missing the deadline and get you your deserved refund ASAP.',
        },	
        {
            label: 'Do I have to pay for the return service?',
            content: 'No, our return service is free of cost.',
        },
        {
            label: 'What items can I return through this service? ',
            content: 'You can return any item that is eligible for returns as per the seller`s return policy.',
        },
        {
            label: 'What happens if my item is damaged during the return process?',
            content: 'We take utmost care while handling the items and packing them for return. However, if the item is damaged during the return process, we will work with the seller to get you the appropriate compensation.',
        },
        {
            label: 'Do I need to provide any proof of purchase for the item I am returning? ',
            content: 'Yes, you need to provide the online-generated prepaid shipping label provided by the seller in case of an online bought item or a shopping receipt in case of an in-store bought item.',
        },
        {
            label: 'How long do I need to wait for the refund? ',
            content: 'The refund process typically takes 7-10 business days from the date the item is received by the seller. This can vary between sellers. Please check your seller`s return policy. ',
        },
        {
            label: 'Will I be notified once the return is processed? ',
            content: 'Yes, you will be notified via email when the return is processed along with your return receipt. ',
        },
        {
            label: 'Can I return items without packaging? ',
            content: 'Yes, you can. Leave the worry of packaging and printing out your label on us. Our experts take care of it all.',
        },
        // {
        //     label: 'Do you provide a tracking number for the return delivery? ',
        //     content: 'Yes, we provide a tracking number for all return deliveries. You can use this tracking number to track the status of your return.',
        // },
    ];
    const [accordionPanels, setAccordionPanels] = useState(panels);
    const [isActive, setIsActive] = useState(true);

    let activateTab = (index: number)=>{
        console.log(index);
    }
  return (
    <>
    <section className={styles.reFAQs} id="reFAQs">
        <h2>FAQs</h2>
        {accordionPanels.map((item,index)=>{
            return(
                <Accordion styles={"padding:0"} index={index} label={item.label} content={item.content} >
                </Accordion>
            )
        })}
    </section>
    </>
  )
}

export default FAQ