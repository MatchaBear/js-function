const operator = prompt('Enter operator (either '+', '-','*','/'');
const firstNumber = prompt('Enter first number');
const secondNumber = prompt('Enter second number');

function calcApp(firstNumber,secondNumber) {
if (operator=='+') {
    return result = firstNumber+secondNumber;
}
else if (operator=='-') {
    return result = firstNumber-secondNumber;
}
else if (operator=='*') {
    return result = firstNumber*secondNumber;
}
else if (operator=='/') {
    return result = firstNumber/secondNumber;
}
else {
    return window.alert("Please enter correct operator")
}
}