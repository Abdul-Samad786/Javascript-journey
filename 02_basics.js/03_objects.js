// singleton

// object literal
const js_user={
    name:'Abdul Samad Tariq',
    age:22,
    location:"Lodhran",
    email:"ranasamad074@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday","Wednesday"],
}
console.log(js_user)
console.log(js_user["email"])
console.log(js_user.email)


js_user.greeting=function(){
    console.log("Hello User")};
console.log(js_user.greeting)
js_user.greeting2=function(){
    console.log(`Hello from ${this.name }`)};
js_user.greeting2()
