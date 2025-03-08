function add() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;

    var result = parseInt(number1) + parseInt(number2);

    document.getElementById("result").innerHTML = result;
}

function subtract() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;

    var result = parseInt(number1) - parseInt(number2);

    document.getElementById("result").innerHTML = result;
}
function multiply() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;

    var result = parseInt(number1) * parseInt(number2);

    document.getElementById("result").innerHTML = result;
}
function divide() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;

    var result = parseInt(number1) / parseInt(number2);

    document.getElementById("result").innerHTML = result;
}

function square(num) {
    return num * num;
}
document.writeln(square(7));