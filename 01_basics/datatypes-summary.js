// primitive:
//  7 types: String,number,boolean,null,undefined,symbol,bigint
const number=3232
console.log(typeof number) //number
const string="abdulsamad"
console.log(typeof string) //strin
//Reference(Non primitive):
//  object, array, function

const heroes=["salah ud din ayoobi","muhammad bin qasim","babur"]
console.log(typeof heroes) //array
const person={
    name:"abdul samad",
    role:"full stack developer"
}
console.log(typeof person) //object
const myfunc=function(){
    console.log("Hello world")
}
console.log(typeof myfunc) //function