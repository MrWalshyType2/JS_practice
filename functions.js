hello(); // hoisted

function hello() {
    // Normal function
    console.log("Hello");
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
// yield expression
console.log(idGen.next().value);
console.log(idGen.next().value);