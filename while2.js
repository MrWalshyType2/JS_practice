let a = 1;

while (a <= 10) {
  console.log(a);
  a++;

  if (a === 5) {
    // strict equality
    break; // loop termination
  }
}
