console.log(`Pi value before changing:`, Math.PI);

Math.PI = 99;

console.log(`Pi value after changing:`, Math.PI);
// console.log(Object.getOwnPropertyDescriptor(
// Math,
// "PI"
// )
// );

Object.defineProperty(Math, "PI", {
    writable: true,
    value: 99,
    // enumerable: true,
     configurable: true
});

console.log(`Pi value after changing:`, Math.PI);
