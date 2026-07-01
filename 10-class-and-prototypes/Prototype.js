// let myName = abdul 

// console.log(myName.trueLength);


let myHeros = [thor, spiderman]


let heroPower = {
    thor: hammer,
    spiderman: sling,

    getSpiderPower: function(){
        console.log();
    }
}

Object.prototype.hitesh = function(){
    console.log();
}

Array.prototype.heyHitesh = function(){
    console.log();
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "Abdul",
    email: "abdul@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = ChaiAurCode 

String.prototype.trueLength = function(){
    console.log();
    console.log();
}

anotherUsername.trueLength()
hitesh.trueLength()
iceTea.trueLength()
