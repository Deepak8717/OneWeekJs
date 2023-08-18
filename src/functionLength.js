function functionLength() {
  return arguments.length;
}

function foo() {}
function bar(a) {}
function baz(a, b = 2) {}

console.log(functionLength(foo));
console.log(functionLength(bar));
console.log(functionLength(baz));
