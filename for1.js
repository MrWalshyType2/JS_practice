for (let a = 1; a <= 10; a++) {
    // let a = 1 runs at the loop start to initialise the index var
    // The condition is checked at the start of every iteration
    // a++ runs after each loop iteration
    console.log(a);
}

console.log("");

// for...in allows iteration over enumerable object properties 
// keyed by strings
let someObj = { a: 1, b: 2, c: 3, d: 4, e: 5};
for (const key in someObj) {
    console.log(`${key}: ${someObj[key]}`);
}