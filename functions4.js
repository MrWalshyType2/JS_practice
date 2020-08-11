let hello = function message(name) {
    console.log(`Hello ${name}`);
}

hello("Fred"); // Hello Fred

/////////////////////////////////////////
let add = function addition(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

let sub = function subtraction(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

add(5, 7); // 12
sub(7, 5); // 2

/////////////////////////////////////////
// Higher-order functions take a function argument or return a
// function
let msg = function() {
    console.log("Hello");
}

function doSomething(f) {
    f();
}

doSomething(msg);

/////////////////////////////////////////
function maths(ref) {
    ref(10, 20);
}

function maths2(ref, x, y) {
    ref(x, y);
}

maths(add);
maths(sub);
maths2(add, 100, 100);

function calculator(ref) {
    let operation = "sub";
    let x = 20;
    let y = 30;

    if (operation == "add") {
        ref(add, x, y);
    } else if (operation == "sub") {
        ref(sub, x, y);
    }
}

calculator(maths2);