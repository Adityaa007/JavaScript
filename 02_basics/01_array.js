const myarr=[1,2,3,4,5,6]
const myheroes=["Batman","SuperMan"]

const myarr2=new Array(1,2,3,4)

console.log(myarr);
console.log(myheroes);
console.log(myarr[3]);


///Array Methods
const numbers=[0,1,2,3,4]
console.log(numbers.push(5));
numbers.pop()
console.log(numbers.includes(5));
console.log(numbers.indexOf(4));

const newArr=numbers.join()
console.log(numbers);
console.log(newArr);
console.log(typeof(newArr));

//slice  splice

console.log("A ",myarr);
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("B ",myarr);

const myn2=myarr.splice(1,3)
console.log(myn2);
console.log("c ",myarr);

