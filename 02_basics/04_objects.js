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

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
const obj4={...obj1,...obj2}
console.log(obj4);

