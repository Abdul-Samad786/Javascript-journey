function add_numbers(a, b) {
    return a + b}

result=add_numbers(5, 10)

console.log(result);


// Learning rest operator


function sum_numbers(name, ...args){
    let result=0
    for(let i=0;i<args.length;i++){
        result+=args[i]
    }
    return `The sum of user ${name} is ${result}`
}

console.log(sum_numbers("abdul samad tariq",10,20,30));












  