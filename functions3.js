function add(a, b) {
    // This is a procedure as it has no return value
    let result = 0;

    if (isNaN(a) || isNaN(b)) {
        return null;
    } else {
        result = a + b;
    }

    console.log(`${a} + ${b} = ${result.toPrecision(7)}`);
    console.log(`Arguments: ${arguments}`); // does not work
    console.log(arguments);
    console.log(arguments.length);
}

function varAdd() {
    // Using the 'arguments' keyword allows
    // grabbing all args passed into the function
    let result = 0;
    let i = 0;

    while (i < arguments.length) {
        if (isNaN(arguments[i])) {
            result = "Error, NaN present";
            break;
        }
        result += arguments[i];
        i++;
    }

    if (isNaN(result)) {
        console.log(result);
    } else {
        console.log(result.toPrecision(7));
    }
}

function max() {
    let result = 0;
    let i = 0;

    while (i < arguments.length) {
        if (result < arguments[i]) {
            result = arguments[i];
        }
        i++;
    }
    console.log(result);
}

function maxThree() {
    let firstHighest = 0;
    let secondHighest = 0;
    let thirdHighest = 0;

    let i = 0;

    while (i < arguments.length) {
        if (arguments[i] > firstHighest) {
            thirdHighest = secondHighest;
            secondHighest = firstHighest;
            firstHighest = arguments[i];
        } else if (arguments[i] > secondHighest) {
            thirdHighest = secondHighest;
            secondHighest = arguments[i];
        } else if (arguments[i] > thirdHighest) {
            thirdHighest = arguments[i];
        }
        i++;
    }
    
    console.log(firstHighest, secondHighest, thirdHighest);
}

// add(20, 30);
// add(5, 10, 5, 20);
// varAdd(30, 20, 40);
// varAdd(50, 50, "NaN");
// varAdd(500, 1000, 2000);
max(20, 30, 40, 20, 70, 20);
max(150, 32, 24);
maxThree(40, 20, 30, 70, 190, 10);
maxThree(1024, 30, 576, 70, 800);