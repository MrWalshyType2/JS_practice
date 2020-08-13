let arr = [];

arr.push(function() {
    console.log("Hello 1");
});

arr.push(function() {
    console.log("Hello 2");
});

arr.push(function() {
    console.log("Hello 3");
});

arr.forEach((func) => {
    func();
});

/////////////////////////////////////
let numArray = [];
numArray.push(3);
numArray.push(7);

numArray.forEach((num) => {
    console.log(num);
});