// function saymyname(){
//     console.log("Rirtesh");
//     console.log("varun");
//     console.log("Krishna");
// }

// saymyname()

// function sum(a,b){
//     let result = a + b
//     return result
// }
// const result = sum(2,3)
// console.log(result);

                         // Rest operator   // spread operator
// function sum(...num1){
//     return num1 
// }
// console.log(sum(20,30,40));

const user ={
    name : "Ritesh",
    age : 22
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleobject(user)
