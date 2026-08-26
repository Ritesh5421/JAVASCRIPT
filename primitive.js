// PRIMITIVE DATA TYPES IN JAVASCRIPT

// There are 7 primitive data types in javascript

// 1. Number        =>  33, 3.4, -5, 0      
// 2. BigInt       =>  9007199254741991n
// 3. String       =>  "hello", 'hello', `hello`
// 4. Boolean      =>  true, false
// 5. Null         =>  null
// 6. Undefined    =>  undefined
// 7. Symbol       =>  Symbol('description')

// Reference data type non-primitive data types

 //  array, objects, functions etc are reference data types

 
// ------------------------- Example of primitive data types---------------------------------


// let num = 33;                            // Number  
// let bigIntNum = 9007199254741991n;                  // BigInt
// let str = "hello";                               // String
// let bool = true;                             // Boolean
// let n = null;                                   // Null
// let undef = undefined;                         // Undefined
// let sym = Symbol('description');                   // Symbol                      
// console.log(typeof num);                           // "number"
// console.log(typeof bigIntNum);                   // "bigint"
// console.log(typeof str);                         // "string"    
// console.log(typeof bool);                        // "boolean"
// console.log(typeof n);                           // "object" (this is a known quirk in JavaScript)
// console.log(typeof undef);                       // "undefined"
// console.log(typeof sym);                        // "symbol"

// ------------------------- Example of reference data types---------------------------------

// let arr = [1, 2, 3];                     // Array
// let obj = { name: "John", age: 30 };    // Object   
// let func = function() { return "Hello"; }; // Function

// console.log(typeof arr);                        // "object"
// console.log(typeof obj);                       // "object"
// console.log(typeof func);                      // "function"


// Note: Primitive data types are immutable, meaning their values cannot be changed.
//  When you perform operations on primitive data types, a new value is created rather than modifying the original value.
 


// let originalStr = "hello";
// let newStr = originalStr.toUpperCase();         // Creates a new string "HELLO"     
// console.log(originalStr);                  // "hello"
// console.log(newStr);                       // "HELLO"    

// In contrast, reference data types can be modified.

// let originalArr = [1, 2, 3];
// originalArr.push(4);                       // Modifies the original array         
// console.log(originalArr);                 // [1, 2, 3, 4]


// Understanding the difference between primitive and reference data types is crucial for effective JavaScript programming.

   

// ---------------------"JavaScript Functions and Scope"-------------------------
// In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable.
// Functions can be assigned to variables, passed as arguments to other functions, and returned from functions. 
// Functions also create their own scope, which means that variables defined within a function are not accessible from outside the function.

// Example of function scope:   
function myFunction() {
    let functionScopedVar = "I am inside the function";
    console.log(functionScopedVar);                    // Accessible here
}
 myFunction();

 console.log(functionScopedVar);                                      // Uncaught ReferenceError: functionScopedVar is not defined
// The variable functionScopedVar is only accessible within myFunction.
// This is known as function scope.

//Example of passing functions as arguments:
function greet(name) {
     return "Hello, " + name + "!";
}
function processUserInput(callback) {
     let name = "Alice";
     console.log(callback(name));
}
                         

processUserInput(greet); // Output: "Hello, Alice!"
// In this example, the greet function is passed as a callback to processUserInput, demonstrating that functions can be treated as first-class citizens in JavaScript. 




