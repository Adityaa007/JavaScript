
const mysym=Symbol("mykey1")
const user ={
    name: "Dwight",
    age: 16,
    location: "scranton",
    [mysym]: "mykey1",
    isLoggedIn: false,
    lastLoginDays:["monday","Saturday"]
}
console.log(user.location);
console.log(user["location"]);
console.log(user[mysym]);
user.location="New York"
console.log(user.location);
// Object.freeze(user)
user.age=21;
console.log(user);

user.greeting=function(){
    console.log("Hello JS users!!");
}
console.log(user.greeting());
user.greeting2=function(){
    console.log(`Hello,${this.name}`);
}
console.log(user.greeting2());
