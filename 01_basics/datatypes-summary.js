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