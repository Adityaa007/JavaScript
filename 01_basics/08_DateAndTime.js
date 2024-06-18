let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let createDate=new Date(2023,0,23)
console.log(createDate.toDateString());
console.log(createDate.getTime());
let createDate1=new Date("04-14-2024")
console.log(createDate1.toDateString());

let timestamp=Date.now()
console.log(timestamp);
console.log(createDate.getMonth());
