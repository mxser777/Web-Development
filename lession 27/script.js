let x = 4;
let y = 6;

let z = eval("x+y-5");
document.writeln(z);

let numbers = [5, 7, 2, 9, 10, 1];
let fruits = ["orange", "apple", "grapes"];

document.getElementById("display").innerHTML = numbers;
document.getElementById("fruits").innerHTML = fruits;

function asc() {
    numbers.sort(function (a, b) {
        return a - b;
    });

    document.getElementById("display").innerHTML = numbers;

    fruits.sort();
    document.getElementById("fruits").innerHTML = fruits;
}

function desc() {
    numbers.sort(function (a, b) {
        return b - a;
    });

    document.getElementById("display").innerHTML = numbers;

    fruits.reverse();
    document.getElementById("fruits").innerHTML = fruits;
}

function double() {
    const new_numbers = numbers.map(function (element) {
        return element * 2;
    });

    fruits.reverse();
    document.getElementById("display").innerHTML = new_numbers;
}

function square() {
    const new_numbers = numbers.map(function (element) {
        return element * element;
    });

    document.getElementById("display").innerHTML = new_numbers;
}

