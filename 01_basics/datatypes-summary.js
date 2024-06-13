//primitve data type
//7 Types:  String, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue=100.5
const isLoggedIn=true
const temp=null

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id==anotherID)

const bigNumber= 3423232323223n



//Reference (Non Primitive)
//Array, Objects, Functions

const heroes= ["Iron Man","Hulk","Captain America"]  //Array

let myobj={
    name:"Aditya",
    age: 20,
}

const myfunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myfunction);


//*******************************Memory********************************

//  Stack(Primitive) >= in this you'll get copy of data
// Heap(Non-Primitive)  >= in this you'll get reference(original data)

let myYoutubeName="hiteshchaudhary.com"

let anotherName=myYoutubeName
anotherName="Chai Aur Code"
console.log(anotherName);
console.log(myYoutubeName);

let userOne={
    email: "user1@gmail.com",
    upi:"user@oksbi"
}

let usertwo=userOne
console.log(usertwo);

usertwo.email="hello@google.com"
console.log(usertwo.email);
console.log(userOne.email);