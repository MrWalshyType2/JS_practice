let functionsArr = [];

functionsArr.push(function () {
    console.log("Hello everybody");
});

functionsArr.push(() => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
});

functionsArr.forEach((func) => {
    func();
});