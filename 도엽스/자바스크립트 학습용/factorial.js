function fact(n) {
  if (n <= 1) return n;
  return n * fact(n - 1);
}

for (let i = 1; i < 10; i++) {
  console.log(i + "! =" + fact(i));
}

console.log("hello, world");

let n = 2;
if (n > 0);
console.log(n + " " + "is positive");
