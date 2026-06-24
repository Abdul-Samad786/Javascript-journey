const marvel_heroes=["ironman","spiderman","hulk","thor","captain america"];
const dc_heroes=["batman","superman","flas"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

const all_new_heroes=[...marvel_heroes,...dc_heroes] // spread the arrays and create a new array just like we throght the glass and it spreads
//console.log(all_new_heroes)

const str="hello world"
str_array= Array.from(str) // it will convert the string into an array of characters
console.log(str_array)
console.log(Array.isArray(str_array)) // it will check if the given variable is an array or not
