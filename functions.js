hello(); // hoisted

let result = add(10, 10);
let resultAlt = add(10, 20);
let resultNull = add("hello", 10);
console.log(result); // 20
console.log(resultAlt); // 30
console.log(resultNull); // null

function hello() {
    // Normal function
    console.log("Hello");
}

function add(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    } else {
        return null;
    }
}

function addAlt(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return null;
    } else {
        return num1 + num2;
    }
}

// Arrow function, cannot be hoisted
let helloWorld = () => {
    console.log("Hello world!");
};

helloWorld();

// Generator Functions return a 'Generator' object that can be
// recalled
function* idGenerator() {
    let i = 0;

    while (true) {
        // yield specifies the return value from the iterator
        yield i++;
    }
}

let idGen = idGenerator();
// When .next() is called, the Generator runs until the first
// yield expression. If there are multiple yield statements in
// the function, then the next yield statement is run after each
// generator.next() invokation.
console.log(idGen.next().value); // 0
console.log(idGen.next().value); // 1