// const arr=["Punjab","Sindth","Balochistan","KPK"]

// //for of
// for (const element of arr) {
//     console.log(`Element: ${element}`);
    
// }
// // for string
// const str="Hello World"
// for (const char of str) {
//     console.log(`Character: ${char}`);
    
// }

let  fruits = [
 "Apple",
 "Banana",
 "Mango",
 "Orange"
];

// write code
// for(const fruit of fruits){
//     console.log(`Fruit: ${fruit}`);
// }

//for in
const user = {
 name:"Samad",
 age:22,
 city:"Lodhran"
};

// // use for in
// for (const key in user){
//     console.log(`${key}->${user[key]}`);
// }
// for each

const arr = [
 10,
 20,
 30,
 40,
 50 
];

// use forEach
let indexes=0
let sum=0
arr.forEach((value)=>{
    sum+=value
    indexes+=1
})
// console.log(`Sum: ${sum}`);
// console.log(`Total Indexes:${indexes}`);





//with objects
const users = [
 {
   name:"Samad",
   age:22
 },
 {
   name:"Ali",
   age:25
 },
 {
   name:"Ahmed",
   age:30
 }
];

users.forEach((item)=>
    console.log(`${item.name}- ${item.age}`))

