document.getElementById("heading").innerHTML = "heading from javascript";

document.body.style.backgroundColor = "purple";
document.getElementById("heading").style.color = "white";

//Variables
document.getElementById("variable").innerHTML = "Variable is a box that holds value";

var num_1 = 30;
var num_2 = 40;

var pelement = document.getElementById("sum");
pelement.innerHTML = num_1 + num_2;

var a = 5;
a += 2;
// a = a + 2;
document.write(a);