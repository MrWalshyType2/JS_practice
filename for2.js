// Multiple initialisation
let a = 0;
let b = 0;
let c = 0;

for (a = 1, b = 10, c = 100;
     a <= 10;
     a++, b += 10, c += 100) {
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

console.log("");
// No conditions
a = 0;

for (;;) {
    // Logs from 0 to 10
    console.log(a);
    a++

    if (a == 11) {
        break;
    }
}

console.log("");
// for...of can be used to iterate over iterable objects
const numsArr = [1, 2, 3, 4, 5];

for (const num of numsArr) {
    console.log(num);
}