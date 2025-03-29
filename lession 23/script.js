var programming_languages = ["JavaScript", "Python", "Java", "C#", "C++",];

document.getElementById("show_array").innerHTML = programming_languages

document.writeln(programming_languages[0] + "<br>");
document.writeln(programming_languages[1] + "<br>");
document.writeln(programming_languages[2] + "<br>");
document.writeln(programming_languages[3] + "<br>");
document.writeln(programming_languages[4] + "<br>");

programming_languages.push("ruby");
document.getElementById("updated_array").innerHTML = programming_languages;

// join -> It converts the array to a string
document.writeln(programming_languages.join(" - "));

// pop()
document.writeln("<br><br>");
programming_languages.pop();
programming_languages.pop();
programming_languages.pop();
document.writeln(programming_languages);

document.writeln("<br><br>");
for (var index = 0; index < programming_languages.length; index++) {
    document.writeln(programming_languages[index] + "<br>");
}

function funcA() {
    document.writeln("Function A started.<br>")
    funcB();
    document.writeln("Function A ended.<br>")
}

function funcB() {
    document.writeln("Function B started.<br>")
    funcC();
    document.writeln("Function B ended.<br>")
}

function funcC() {
    document.writeln("Function C started.<br>")
    document.writeln("Function C ended.<br>")
}

funcA();