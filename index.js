function add() {
}
function subtract() {  
}
function multiply() {  
}
function divide() {  
}
function add(a, b) {
    return a + b;
  }
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
number = 10;
function increment(number) {
    return number += 1;
}
function decrement(number) {
    return number -= 1;
}
var string = "89.64"
function makeInt(string) {
    var intValue = parseInt(string, 10);
    return intValue;
}
var result = makeInt(string);
console.log(result);

var string = "89.6443"
function preserveDecimal(string) {
    var intValue = parseFloat(string);
    return intValue;
}
var result = preserveDecimal(string);
console.log(result);

