import React, { useState, useEffect} from 'react'
import moment from 'moment';
import styles from './profile.module.css'
import { userService, alertService } from '../../services';


const Profile =()=> {

    useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        setUser(user);
    }
    }, []);

    const [user, setUser] = useState([]);
    const [fullname, setFullname] = useState('');
    const [id] = useState(user.id);
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handle = () => {
        user.fullname = fullname;
        console.log(user.fullname);
        user.address1 = address1;
        user.address2 = address2;
        user.city = city;
        user.state = state;
        user.zip = zip;
        updateafterhandle(id,fullname, address1, address2, city, state, zip);
        // return userService.update(id, fullname)
        // .then(() => {   
        //     //get return url from query parameters or default to '/'
        //     const returnUrl = router.query.returnUrl || '/';
        //     router.push(returnUrl);
        // }).catch(alertService.error);
        // // userService.update(id, address1);
        // // userService.update(id, address2);
        // // userService.update(id, city);
        // // userService.update(id, state);
        // // userService.update(id, zip);
     };


    // const handleChange = (e) => {
    //     setClient({...client,[e.target.name]: e.target.value,
    //     });
    // };

    function updateafterhandle({id , fullname }) {//based on paraemters of profile 
        return userService.update(id, fullname)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }
            

    return ( 
                
        <body>
            {/* <ProfileNav/> */}
                
            <form className = { styles.center } onSubmit = {(handle)} >
                <div> { /* type in full name */ } 
                    <label > Full Name </label>  
                    <br/>
                    <input type = 'text' 
                    id ='fl'
                    name="fullname"
                    maxLength = '50' 
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    // onChange={handleChange}
                    /> 
                    <br/>
                    <br/>

                    { /* type in address 1 */ } 
                    <label> Address 1 </label>  
                    <br/>
                    <input type = 'text' 
                    name="address1"
                    id ='a1'
                    required
                    maxLength = '100' 
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    // onChange={handleChange}
                    /> 
                    <br/>
                    <br/>

                    { /* type in address 2 */ } 
                    <label> Address 2 </label>  
                    <br/>
                    <input type = 'text' 
                    name="address2"
                    id ='a2'
                    maxLength = '100' 
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    // onChange={handleChange}
                    /> 
                    <br/>
                    <br/>

                    { /* type in city */ } 
                    <label> City </label>  
                    <br/>
                    <input type = 'text' 
                    name="city"
                    id ='city'
                    required
                    maxLength = '100' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    // onChange={handleChange}
                    /> 
                    <br/>
                    <br/>

                    { /* select state */ } 
                    <label> Select State </label> 
                    {/* value = { topic } */}
                    <select name="state" required id ='st'  value={state} onChange={(e) => setState(e.target.value)} >

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
                    id ='zip'
                    required
                    maxLength = '9' 
                    minLength = '5' 
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    // onChange={handleChange}
                    /> 
                    <br/>
                    <br/>

                    { /* button for confirm */ } 
                    <button id="submit-button" className = { styles.button } type = "submit" > Confirm </button> 
                </div> 
            </form> 

        </body>
        
    )
    
}
    


export default Profile