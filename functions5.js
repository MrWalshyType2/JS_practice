function dayParser(day) {
    let textualDay;

    switch (day) {
        case 1:
            textualDay = "Monday";
            break;
        case 2:
            textualDay = "Tuesday";
            break;
        case 3:
            textualDay = "Wednesday";
            break;
        case 4:
            textualDay = "Thursday";
            break;
        case 5:
            textualDay = "Friday";
            break;
        case 6:
            textualDay = "Saturday";
            break;
        case 7:
            textualDay = "Sunday";
            break;
        default:
            textualDay = "Not a valid input (1 to 7)";
    }

    let f = function() {
        console.log(`Today is ${textualDay}`);
    }

    return f;
}

let currDay = dayParser(5);
currDay();


//////////////////////////////////////
function otherOp() {
    let f = function() {
        console.log("Hello");
    }
    return f;
}

let otherFunc = otherOp();
otherFunc();