import { useState , useEffect} from 'react';
import React from 'react';
import styles from "./OrderHistoryTable.module.css"
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import usersRepo from "../helpers/api/users-repo"
configure({ adapter: new Adapter() });
function OrderHistoryTable({sale}){
    
    const columns = [
      { label: "Gallons", key: "gallons", align: "center", padding: "10px" },
      { label: "State", key: "state", align: "center", padding: "10px" },
    //   { label: "Date", key: "deliveryDate", align: "center", padding: "10px" },
      { label: "Suggested Price($) per Gallon", key: "price", align: "center", padding: "10px" },
      { label: "Total($)", key: "total", align: "center", padding: "10px" },
    ];
    const formatDate = (t) => {
      let d = new Date(parseInt(t));
      return d.toDateString();
    }
            
    return(
            <table className={styles.allofit}>
                <thead className={styles.headings}>
                    <tr className={styles.titles}>
                    {columns.map((column) => (
                      <th key={column.key} align={column.align}>
                        {column.label}
                      </th>
                    ))}
                    </tr>
                </thead>
                
                <tbody className={styles.data}>
                    {sale.map((data, index) => (
                      <tr key={index}>
                        <th>
                          {data.gallons}
                        </th>
                        <th>
                          {data.state}
                        </th>
                        {/* <th>
                          {formatDate(data.date)}
                        </th> */}
                        <th>
                          {data.price}
                        </th>
                        <th>
                          {parseFloat(data.price * data.gallons).toFixed(2)}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                
            </table>

    )
}
export default OrderHistoryTable;
