let a = 20;

if (a > 10) {
    // Scoped to within the if block
    let c = 30;
    console.log("Good");
    console.log(`Variable C can only be accessed in the if block: ${c}`);
}

// Cannot be done as c is now out of scope
// console.log(c); // <- Produces a ReferenceError