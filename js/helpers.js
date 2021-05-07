function D(x) { return new Decimal(x); }

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randbetween(a, b) {
  return a + Math.random() * (b - a);
} 

function randint(a, b) {
  return Math.floor(randbetween(a, b + 1));
}