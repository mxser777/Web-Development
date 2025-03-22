//User-defined object:

var pet = {
    name: "cat",
    age: 3,
    type: "dog",
    is_friendly: true
};

document.getElementById("pet_info").innerHTML = "name: " + pet.name + "<br>" + "age: " + pet.age + "<br>" +
    "type: " + pet.type + "<br>" + "is friendly: " + pet.is_friendly + "<br>"

// Math Object: Built-in Object

document.writeln("Absoulute: " + Math.abs(-2) + "<br>");

document.writeln("Asin :" + Math.asin(-1) + "<br>");
document.writeln("Acos :" + Math.acos(1) + "<br>");
document.writeln("Atan :" + Math.atan(56) + "<br>");

// Arguments
function product() {
    document.writeln(arguments[4]);

    var prod = 1;
    for (var index = 0; index <= 4; index = index + 1) {
        prod = prod * arguments[index];
    }
    document.writeln(prod);
}

product(3, 4, 7, 8, 2);
//      0  1  2  3  4