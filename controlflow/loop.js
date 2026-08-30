// for 

// for (let index = 0; index <= 10; index++) {
//     const element = index * 2;
//     console.log(element);

// }

// for (let index = 0; index <= 10; index++) {
//     console.log("outer loop :", index);
//     for (let j = 0; j <= 10; j++) {
//         console.log("inner loop :", j);
//     }
// }    

// Break and Continue

// for (let index = 0; index <= 10; index++) {
//     if (index == 5) {
//         break; // it will break the loop when index is 5
//     }
//     console.log("outer loop :", index);
// }    

// for (let index = 0; index <= 10; index++) {
//     if (index == 5) {
//         continue; // it will skip the loop when index is 5
//     }       
//     console.log("outer loop :", index);
// }

// for (const val of [1, 2, 3, 4, 5]) {
//     console.log(val);
// }

// Map 

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York"); 
map.set ("name", "john");          // It only print unique values 

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}