//test form for the fuel quote form and make it verified
//pricing module and make sure it has good math

const { default: FuelQuote } = require('../pages/FuelQuote');
const fuelForm = require('./pages/FuelQuote');
// const sum = require('./pricingmodule');

test('Should return a good report', () => {
    
});
test('Checks the price of out of state price', () => {
    expect(FuelQuote()).toBeCloseTo(3042.9,5);
});

// function fuelQuoteCheck(){
//     // var name  = document.getElementById('name').value;
//     var gallons   = document.getElementById('gallons').value;
//     var date = document.getElementById('date').value;
//     var errorMsg = '';

//     if (gallons.length===0){
//         errorMsg += 'Empty gallons\n';    
//     } else if (isNaN(Number(age))){
//         errorMsg += 'Invalid gallons - enter a number\n';    
//     }
//     currentDate= new Date();

//     if (date.getFullYear()<currentDate.getFullYear()){
//         errorMsg = 'Year has passed';    
//     } 
//     else if (date.getFullYear()==currentDate.getFullYear()){
//         if(date.getMonth()<currentDate.getMonth()){
//         errorMsg = 'Month has passed';    
//        }
//     }
//     else if (date.getFullYear()==currentDate.getFullYear()
//         && (date.getMonth()==currentDate.getMonth())){
//             if(date.getDate()<currentDate.getDate()){
//                 errorMsg = 'Day has passed';    
//                }
//        }
    
    

//     if (errorMsg.length > 0){
//         alert(errorMsg);
//         return false;
//     }
// }
// export default function SignIn({ csrfToken }) {
//   return (
//     <form method="post" onSubmit={() => signIn("credentials", {
//         redirect: false, 
//         email: "test",
//         password: "test",
//       })
//       .then((error) => console.log(error))
//       .catch((error) => console.log(error))} >
//       <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//       <label>
//         Username
//         <input name="username" type="text" />
//       </label>
//       <label>
//         Password
//         <input name="password" type="password" />
//       </label>
//       <button type="submit">Sign in</button>
//     </form>
//   )
// }
