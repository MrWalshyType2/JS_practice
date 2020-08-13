var ref = {
    "id": 20,
    "name": "Morgan",
    "score": [10, 23, 5]
}

console.log(ref);

console.log(`Your id is ${ref.id}`);
console.log(`Your name is ${ref.name}`);
console.log(`Your marks: `);
ref.score.forEach((data) => {
    console.log(data);
});