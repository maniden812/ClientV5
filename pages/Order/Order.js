import React, { Component , useState} from 'react'
import styles from './Order.module.css'
import {Nav} from '../../components/Nav'
import Hist from "../../components/OrderHistoryTable"
import moment from 'moment'
import axios from "axios";
import pricing from "../api/pricingmodule"



const Order = () => {
    
    const [gallons, setGallons] = useState(0)
    const [deliveryDate, setdeliveryDate] = useState("2022-03-13")
    const [address] = useState("1234 Cullen Blvd Houston, TX 77004")
    const [pricegal] = useState(4.20)
    const [total, setTotal] = useState(0)
    const [clientInfo,setClientInfo] = useState({
        gallons: 0,
        total: 0,
        deliveryDate: new Date()
    });
    const handleChange = (e) => {
        setClientInfo({
          ...clientInfo,
          [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (event) =>{

        pricing(clientInfo.gallons,pricegal,)
        // event.preventDefault();
        clientInfo.gallons = gallons,
        clientInfo.total = gallons * pricegal,
        //clientInfo.deliveryDate= [deliveryDate.getMonth()+1,deliveryDate.getDate(),deliveryDate.getFullYear()].join('/')
        clientInfo.deliveryDate = deliveryDate
        // alert(`${clientInfo.gallons} ${clientInfo.total} ${clientInfo.deliveryDate}`)
    };
    
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };
    return (
        <body>
            
            <form className={styles.center} onSubmit = { handleSubmit }>
            
                <div>
                    
                    {/* gallons requested */}
                    <label>Gallons Requested<br/></label>
                    <input type="number" 
                    min="0"
                    // value={gallons} 
                    required
                    id="#gals"
                    name = "gallons"
                    onChange={handleChange}/>
                    <br/>

                    {/* date picker */}
                    <label><br/>Delivery Date<br/></label>
                    <input
                    type = "date"
                    placeholderText="Select Date"     
                    id="#date"
                    onChange={handleChange}
                    // value={deliveryDate}
                    required
                    name="deliveryDate"
                    />
                    <br/>


                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
            
        </body>
        )
    }

export default Order;
