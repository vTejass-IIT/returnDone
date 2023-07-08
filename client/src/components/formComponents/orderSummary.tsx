import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './formComponents.module.scss';
import ContentLoader from 'react-content-loader';

interface OrderSummaryProps {
    mode: string,
    submitData: any
    getOrderPaymentFlag: any
    timeSlotData: any
    storeDetailsData: any
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ mode, submitData, getOrderPaymentFlag, timeSlotData, storeDetailsData }) => {
    const [formMode, setformMode] = useState(mode);
    const [returnDayPromo, setReturnDayPromo] = useState(false);

    const [timeSlotDate, setTimeSlotDate] = useState<String | undefined>(undefined);
    const [storeCount, setStoreCount] = useState(0);
    console.log(storeDetailsData)
    const getDateTime = (date: string | undefined) => {
        if(date != undefined){
            let tempDate = new Date(parseInt(date));
        return tempDate.getMonth() + "/" + tempDate.getDate() + "/" + tempDate.getFullYear();
        }
    }

    console.log("formMode",formMode == "init" && !getOrderPaymentFlag)

    useEffect(() => {
        setformMode(mode);
    }, [mode]);

    useEffect(() => {
        let date = timeSlotData.pickupDate;
        setTimeSlotDate(getDateTime(date?.toString())) ;
        setReturnDayPromo(timeSlotData.returnDaySlot)
        console.log(timeSlotData);
    }, [timeSlotData]);

    useEffect(() =>{
        setStoreCount(storeDetailsData.sNames?.length)
    },[storeDetailsData])
    return (
        <>
            <div className={styles.order_summary}>
                <h3>Order Summary</h3>
                <div className={styles.form_group}>
                    <div className={styles.block_layer_parent}>
                        {formMode == "init" && 
                            <div className={styles.contentLoader_style}>
                                <ContentLoader>
                                    <rect x="0" y="17" rx="0" ry="0" width="100%" height="250" />
                                </ContentLoader>
                            </div>
                        }
                        {formMode !== 'init' &&
                            <>
                                <div className={styles.row_group}>
                                    <div>No of Stores</div>
                                    <div>{storeCount}</div>
                                </div>
                                <div className={styles.row_group}>
                                    <div>Pick Up Date</div>
                                    <div>{timeSlotDate}</div>
                                </div>
                                <div className={`${styles.hrRule} ${styles.summary_rule}`}></div>
                                <div className={`${styles.row_group} ${styles.order_total}`}>
                                    <div>Total</div>
                                    <div>
                                        {returnDayPromo && 
                                        <>
                                            <div className={styles.slashed}><span>Return Day promo applied</span><span>9.99</span></div>
                                            <div className={styles.returnDay_price}>7.99</div>
                                        </>
                                        }
                                        {!returnDayPromo && 
                                        <>
                                            <div className={styles.returnDay_price}>9.99</div>
                                        </>
                                        }
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className={styles.btn_summary}>
                        <button type="submit"
                            onClick={() => submitData()}
                            disabled={(formMode == "init" || formMode == "show" || !getOrderPaymentFlag)} className={`${styles.primaryButton} ${styles.btn_summary_btn} ${(formMode == "init" || formMode == "show"  || !getOrderPaymentFlag) ? styles.disabled : ''}`}>
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

OrderSummary.propTypes = {}

export default OrderSummary