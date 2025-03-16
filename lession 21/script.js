var text = "javascript is the coolest";

function uppercase() {
    document.getElementById("text_result").innerText = text.toUpperCase();
}

function lowercase() {
    document.getElementById("text_result").innerText = text.toLowerCase();
}

function startsWith() {
    document.getElementById
        ("text_result").innerHTML = text.startsWith("java");
}

function containsJava() {
    //regular expression
    var r = new RegExp("java")
    var t = r.test(text);
    document.getElementById("text_result").
        innerHTML = t;
}

function shownumbers() {
    for (var num = 1; num <= 100; num = num + 1) {
        document.writeln(num);
    }
}

function showAgelevel() {
    var age = 13;
    switch (age) {
        case 20:
            document.writeln(Young);
            break;
        case 50:
            document.writeln("middle-aged");
            break;
        default: document.writeln("invalid age");
    }
}