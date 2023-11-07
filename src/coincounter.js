
// export function countChangeRecursively(change) {
//   if (isNaN(change)) {
//     return "Please enter a valid number.";
//    }
//     else if (change === 0) {
//       return {
//         quarters: 0,
//         dimes: 0,
//         nickels: 0,
//         pennies: 0
//       };
//     } else if (change >= 0.25) {
//       const quarters = Math.floor(change / 0.25);
//       const quartersChange = 
//     }
//   }


  export function changeMe(change){
    const quartersChange = change % .25; // step 1 - divide original amount by .25, but
    // need to save how many quarters are being divided
    // maybe longhand the modulo operation after lunch? 
    const dimeChange = quartersChange % 10
}

const calculateChange = (change) => {
  const quarters = (change / .25)
  const dimes = (change / .10)
  const nickles = (change / .05)
  const pennies = (change / .01)
  // termination case
  if (change.equals("") || change.equals(0)) {
    return; 
  } 
  else if (change % .25 === 0) {
    console.log(quarters);
    return quarters;
  }
   else if (change % .10 === 0) {
    console.log(change);
    return dimes;
  }
   else if (change % .5 === 0) {
    console.log(change);
    return dimes;
  }
   else if (change % .01 === 0) {
    console.log(change);
    return dimes;
  }

   else {
    console.log(change); 
    return calculateChange(change / .25);
  }
  
}

export const count = (num) => {
  console.log(num);

  const updatedNum = num + 1;

  if (updatedNum <= 15) {
    count(updatedNum)
  }
}