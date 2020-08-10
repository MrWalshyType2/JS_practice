// Default values are given so the func can run if no args are passed
function maths(x = 0, y = 0, operation = "add") {
    let result = 0;

    if (isNaN(x) || isNaN(y)) {
        return null;
    } else {
        if (operation == "add") {
            result = x + y;
        } else if (operation == "sub") {
            result = x - y;
        } else if (operation == "mul") {
            result = x * y;
        } else if (operation == "div") {
            result = x / y;
        } else {
            return null;
        }
        return result.toPrecision(7);
    }
}

let addResult = maths(20, 30, "add");
let minusResult = maths(20, 10, "sub");
let multiplyResult = maths(10, 10, "mul");
let divResult = maths(10, 5, "div");
let nullResult = maths(20, "hello");
let defaultResult = maths(20, 20);
let wrongOperation = maths(30, 40, "hi");
let overridingDefaults = maths(x = 10, y = 100, operation = "mul");
console.log(addResult); // 50
console.log(minusResult); // 10
console.log(multiplyResult); // 100
console.log(divResult); // 2
console.log(nullResult); // null
console.log(defaultResult); // 40
console.log(wrongOperation); // null
console.log(overridingDefaults);
