import { useState } from 'react';
import React from 'react';
import styles from "./OrderHistoryTable.module.css"


function OrderHistoryTable(props){
    return(
            <table className={styles.allofit}>
                <thead className={styles.headings}>
                    <tr>
                        <th className={styles.titles}>Name</th>
                        <th className={styles.titles}>Address</th>
                        <th className={styles.titles}>Gallons</th>
                        <th className={styles.titles}>Date</th>
                        <th className={styles.titles}>Total</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <td className={styles.data}>{props.name}</td>
                    <td className={styles.data}>{props.address}</td>
                    <td className={styles.data}>{props.gallons}</td>
                    <td className={styles.data}>{props.deliveryDate}</td>
                    <td className={styles.data}>{props.total}</td>
                </tbody>
            </table>

    )
}
export default OrderHistoryTable;
