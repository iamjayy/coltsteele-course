console.log("print all numbers between -10 and 19");
for (var i = -10; i < 19; i++) {
  console.log(i);
}

console.log("print all even numbers between 10 and 40");
for (var i = 10; i <= 40; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("print all odd numbers between 300-333");
for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("print all numbers divisible by 5 AND 3 between 5 and 50");
