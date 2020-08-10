let a = 1;

outerLoop: // labels can be used with 'break' and 'continue' in a loop
while (a <= 10) {
    // Outer loop
    a++;
    let b = 1;

    innerLoop:
    while (b <= 10) {
        // inner/nested loop
        b++;

        if (b == 5) {
            continue outerLoop;
        } //else if (b == 4) {
            // Entirely breaks out of loop
           // break outerLoop;
        //}
        console.log(`b is ${b} on iteration ${a - 1}`);
    }

    console.log("This is never reached");
}

// A labelled block only works with 'break' statements
foo: {
    console.log("foo");
    break foo;
    console.log("Not executed!");
}
console.log("This is executed!");