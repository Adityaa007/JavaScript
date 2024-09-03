//const tinderUser=new Object()    //this is singleton object
const tinderUser={}     //this is not singelton object
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Aditya",
            lastname:"Suyal"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log("email:",regularUser.email);

