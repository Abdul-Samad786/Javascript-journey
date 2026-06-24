// const user1={
//     name:"abdul samad tariq",
//     age:22,
//     location:"Lodhran",
//     email:"ranasamad074@gmail.com"
// }
// const user2={
//     name:"Ali Tariq",
//     age:26,
//     location:"Lodhran",
//     email:"ali@gmail.com",
// }

//  const combined_users= {...user1,...user2}
// //console.log(combined_users);

// const combined2=Object.assign({},user1,user2) // it will combine the two objects into one object
// console.log(combined2)
const user1 = {
    name: "abdul samad tariq",
    age: 22,
    location: "Lodhran",
    email: "ranasamad074@gmail.com"
};

const user2 = {
    name: "Ali Tariq",
    age: 26,
    location: "Lodhran",
    email: "ali@gmail.com"
};

// const combined_users = {
//     ...user1,
//     ...user2
// };
const combined_users = [user1, user2];
// console.log(combined_users);


// console.log(Object.keys(user1)) // it will return an array of keys of the object
// console.log(Object.values(user1)) // it will return an array of values of the object
// console.log(Object.entries(user1)) // it will return an array of key-value pairs of the object


// Destructuring

const course={
    course_name:"JavaScript",
    price:1000,
    courseInstructor:"Abdul Samad Tariq",
}

const {courseInstructor}=course
console.log(courseInstructor);
