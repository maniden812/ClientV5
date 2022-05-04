import React, { Component , useState} from 'react'
import styles from './profile.module.css'
import axios from "axios";

// import { ClientRequest } from 'http'
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });
const Profile =()=> {

    const [client, setClient] = useState({
        fullname: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
    });
    const handleChange = (e) => {
        setClient({
          ...client,
          [e.target.name]: e.target.value,
        });
    };
    
        // event.preventDefault();
        
    const handleSubmit = (event) =>{
        axios
          .post('http://localhost:3000/' + "profile", {
            userid: localStorage.getItem("userid"),
            fullname: client.fullname,
            address1: client.address1,
            address2: client.address2,
            city: client.city,
            state: client.state,
            zipcode: client.zipcode,
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.error) {
              console.log(res.data.error);
            } 
            else {
              console.log(res.data.credentials);
              if (res.data.credentials) {
                setClient({
                  fullname: res.data.fullname,
                  address1: res.data.address1,
                  address2: res.data.address2,
                  city: res.data.city,
                  state: res.data.state,
                  zipcode: res.data.zipcode,
                  credentials: res.data.credentials
                });
                history.push("/profile");
              } 
              else if (!res.data.credentials) {
                console.log(res.data);
                history.push("/profile");
              }
            }
          })
          .catch((err) => console.log(err));
        e.preventDefault();
      };
    //         const info={
    //             fullname= fullname,
    //             address1= address1,
    //             address2= address2,
    //             city= city,
    //             state= state,
    //             zipcode= zipcode
    //         }
    //         axios.post('http://localhost:3000', info)
    //             .then((res) => {
    //                 console.log(res.info)
    //             }).catch((error) => {
    //                 console.log(error)
    //             });    
    //     };
    
    //     // alert(`${client.fullname} ${client.address1} ${client.address2} ${client.city} ${client.state} ${client.zipcode}`)
    // };
        
          

    return ( 
                
        <body>  
            <form className = { styles.center } onSubmit = { handleSubmit } >
                <div> { /* type in full name */ } 
                    <label > Full Name </label>  
                    <br/>
                    <input type = 'text' 
                    name="fullname"
                    maxLength = '50' 
                    required
                    // value = {fullname}
                    onChange={handleChange}/> 
                    <br/>
                    <br/>

                    { /* type in address 1 */ } 
                    <label> Address 1 </label>  
                    <br/>
                    <input type = 'text' 
                    name="address1"
                    required
                    // value = { address1 } 
                    maxLength = '100' 
                    onChange={handleChange}/> 
                    <br/>
                    <br/>

                    { /* type in address 2 */ } 
                    <label> Address 2 </label>  
                    <br/>
                    <input type = 'text' 
                    name="address2"
                    // value = { address2 } 
                    maxLength = '100' 
                    onChange={handleChange}/> 
                    <br/>
                    <br/>

                    { /* type in city */ } 
                    <label> City </label>  
                    <br/>
                    <input type = 'text' 
                    name="city"
                    // value = { city } 
                    required
                    maxLength = '100' 
                    onChange={handleChange}/> 
                    <br/>
                    <br/>

                    { /* select state */ } 
                    <label> Select State </label> 
                    {/* value = { topic } */}
                    <select name="state" required onChange={handleChange} >

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
                    <br/>
                    <br/>

                    { /* type in zipcode */ } 
                    <label> Zipcode </label>  
                    <br/>
                    <input type = 'text' 
                    name="zipcode"
                    required
                    // value = { zipcode } 
                    maxLength = '9' 
                    minLength = '5' 
                    onChange={handleChange}/> 
                    <br/>
                    <br/>

                    { /* button for confirm */ } 
                    <button className = { styles.button } type = "submit" > Confirm </button> 
                </div> 
            </form> 

        </body>
        
    )
    
}
    


export default Profile