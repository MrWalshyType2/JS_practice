function first(f) {
    setTimeout(() => {
        console.log("QA");
    }, 2000);
    f();
}

let f1 = function second() {
    console.log("Consulting");
}

first(f1);