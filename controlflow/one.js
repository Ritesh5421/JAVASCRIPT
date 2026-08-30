// Control flow is used to to restrict the code to get necesary point of execution etc type of things

// if 
//  if (true) {     // iftrue it run the block of code if false it will not run the block of code
    
//  }  
 
//  const userloggin = true;
//  const debitcard = true;

//  if (userloggin && debitcard && 2 ==2)  {      && every shold be true to run the block of code
//     console.log("You can buy the product");
// }

// const googlelin = true;
// const emailin = false;

// if (googlelin || emailin) {                  || only one should be true to run the block of code
//     console.log("You can login");
// }

const key = 2;
switch (key) {

    case 1:
        console.log("You selected option 1");
        break;

    case 2:
        console.log("You selected option 2");
        break; 

    default:
        console.log("Invalid option");
}