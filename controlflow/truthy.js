// const user = []

// if (user) {
//   console.log("User is logged in :", user);
// }
// else {
//   console.log("No user is logged in ");
// }

// falsy value 
// false , 0  -0 ,BigInt on , "", null , undefined , NaN(not a number)

// truthy value
// true , 1 , -1 , "0" , "false" , [] , {} , function(){} , new Date() , Infinity , -Infinity

// nullish coalescing operator (??) : null undefined

let val1;
//val1 = 5 ?? 10;    // 5 
val1 = null ?? 10;   // 10
val = undefined ?? 15;  // 15


console.log(val1);  