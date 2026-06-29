// // const promise1= new Promise( function(resolve,reject){
// //     // DO an async task
// //     //DB calls,cryptography,network
// //     setTimeout()
// // })

function loginUser(username){
    const existing_user="Abdul Samad"

    return new Promise((resolve,reject)=>{
        if(username===existing_user){
            resolve("User exists")
        }
        else{
            reject("ERROR: User does not exist")
        }
    })
}

loginUser("Abdul Samdfsfdad")
.then((msg)=> console.log(msg))
.catch((err)=> console.log(err))



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))