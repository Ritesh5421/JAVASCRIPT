//const tinderuser = new Object()

// const tinderuser = {}
// tinderuser.id = "123abc"
// tinderuser.name = "Samay"
// console.log(tinderuser);

const regularuser = {
    fullname : "Ritesh patel",
    email : "riteshaptel5421@gmail.com",
    fullname :{
        userfullname :{
        firstname : "Ritesh",
        lastname : "Patel"
        }
    }

}

console.log(regularuser.fullname?.userfullname.firstname);     // ? to more protected use if else blah blah


                        // Json small googly types difference b/w object and json
// {                               
//     "name" : "Ritesh",
//     "class" : "10th",
//     "teacher" : "Hitesh sir " 
// }
                   // we will get API IN in the form of objects and arrays and in it there are objects and we will convert into
                   //      JSON FORMATTER 