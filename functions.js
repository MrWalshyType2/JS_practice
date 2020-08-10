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
// yield expression. If there are multiple yield statements in
// the function, then the next yield statement is run after each
// generator.next() invokation.
console.log(idGen.next().value); // 0
console.log(idGen.next().value); // 1