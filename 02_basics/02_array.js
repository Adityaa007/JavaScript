const marvel_heroes=["thor","IronMan","Spiderman"]
const dc_heroes=["Superman","batman","flash"]

// using push
// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);

//using concat
const allhero = marvel_heroes.concat(dc_heroes)
console.log(allhero);


//using spread method
const all_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_heroes);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"}));

let score=100
let score2=200
let score3=300
console.log(Array.of(score,score2,score3));