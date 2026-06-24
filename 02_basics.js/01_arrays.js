const myArray=[0,3434,4234,424,3423] 
const myheros=["batman","superman"]

console.log(myArray[3])
console.log(myheros[0]) 

// Array methods
myArray.push(200)
console.log(myArray)

myArray.unshift(100)
console.log(myArray)

const new_array=myArray.join()
console.log(`old array: ${myArray}`)
console.log(typeof myArray)
console.log(`new array: ${new_array}`)  
console.log(typeof new_array)

// slice and splice function
array2=myArray.slice(1,5)
console.log(`sliced array: ${array2}`)
console.log(`array after slice: ${myArray}`)
array3=myArray.splice(1,4)
console.log(`spliced array: ${array3}`)
console.log(`array after splice: ${myArray}`)