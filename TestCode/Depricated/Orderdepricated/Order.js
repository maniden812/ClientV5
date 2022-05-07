import React, { Component , useEffect, useState} from 'react'

import styles from './Order.module.css';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import moment from 'moment'
import Pricing from "../api/pricingmodule"
import Hist from '../../components/OrderHistoryTable'

const Order = () => {
    const columns = [
        { label: "Gallons", key: "gallons", align: "right" },
        { label: "State", key: "state", align: "right" },
        { label: "Date", key: "deliveryDate", align: "right" },
        { label: "Suggested Price($) per Gallon", key: "price", align: "right" },
        { label: "Total($)", key: "total", align: "right" },
      ];
      const formatDate = (t) => {
        let d = new Date(parseInt(t));
        return d.toLocaleString();
      }
    // const [clientInfo,setClientInfo] = 
    // const [sale, setSale]= useState([]);
        
    const handleChange = (e) => {
        const newInput = (data)=>({...data, [e.target.name]:e.target.value})
        setClientInfo(newInput)
        
    };
   
    const handleSubmit=()=>{
        
        const newData = (data)=>([...data, clientInfo])
        setSale(newData);
        const emptyInput= {gallons: 0,
            total: 0,
            deliveryDate: new Date(),
            state: "",
            price: 1.05}
        setClientInfo(emptyInput)
    }
    
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };
    return (
        <body>
            
            <form className={styles.center} onSubmit={handleSubmit()}>
            
                <div>
                    
                    {/* gallons requested */}
                    <label>Gallons Requested<br/></label>
                    <input type="number" min="0" required id="#gals" name = "gallons" onChange={handleChange}/>
                    <br/>
                    
                    {/* date picker */}
                    <label><br/>Delivery Date<br/></label>
                    <input type = "date" placeholderText="Select Date" id="#date" onChange={handleChange} required name="deliveryDate"/>
                    <br/>

                    <label> <br/>Select State<br/> </label> 
                    {/* value = { topic } */}
                    <select name="state" required id ='st' onChange={handleChange} >

                    <option value = "AL" > AL </option> 
                    <option value = "AK" > AK </option> 
                    <option value = "AZ" > AZ </option> 
                    <option value = "AR" > AR </option> 
                    <option value = "CA" > CA </option> 
                    <option value = "CO" > CO </option> 
                    <option value = "CT" > CT </option> 
                    <option value = "DE" > DE </option> 
                    <option value = "DC" > DC </option> 
                    <option value = "FL" > FL </option> 
                    <option value = "GA" > GA </option> 
                    <option value = "HI" > HI </option> 
                    <option value = "ID" > ID </option> 
                    <option value = "IL" > IL </option> 
                    <option value = "IN" > IN </option> 
                    <option value = "IA" > IA </option> 
                    <option value = "KS" > KS </option> 
                    <option value = "KY" > KY </option> 
                    <option value = "LA" > LA </option> 
                    <option value = "ME" > ME </option> 
                    <option value = "MD" > MD </option> 
                    <option value = "MA" > MA </option> 
                    <option value = "MI" > MI </option> 
                    <option value = "MN" > MN </option> 
                    <option value = "MS" > MS </option> 
                    <option value = "MO" > MO </option> 
                    <option value = "MT" > MT </option> 
                    <option value = "NE" > NE </option> 
                    <option value = "NV" > NV </option> 
                    <option value = "NH" > NH </option> 
                    <option value = "NJ" > NJ </option> 
                    <option value = "NM" > NM </option> 
                    <option value = "NY" > NY </option> 
                    <option value = "NC" > NC </option> 
                    <option value = "ND" > ND </option> 
                    <option value = "OH" > OH </option> 
                    <option value = "OK" > OK </option> 
                    <option value = "OR" > OR </option> 
                    <option value = "PA" > PA </option> 
                    <option value = "RI" > RI </option> 
                    <option value = "SC" > SC </option> 
                    <option value = "SD" > SD </option> 
                    <option value = "TN" > TN </option> 
                    <option value = "TX" > TX </option> 
                    <option value = "UT" > UT </option> 
                    <option value = "VT" > VT </option> 
                    <option value = "VA" > VA </option> 
                    <option value = "WA" > WA </option> 
                    <option value = "WV" > WV </option> 
                    <option value = "WI" > WI </option> 
                    <option value = "WY" > WY </option> 
                    </select> 

                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
     
            <div className={styles.container}>
                <h1 className={styles.title}>Sales Table</h1>
                <Hist sale={sale} />
            </div>
        </body>
    )
}

export default Order;
