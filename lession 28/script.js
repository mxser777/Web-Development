let a = 3.7;
document.writeln(typeof a + "<br>");
let b = "JavaScript";
document.writeln(typeof b + "<br>");
let c = true;
document.writeln(typeof c + "<br>")
let d = null;
document.writeln(typeof d + "<br>")
let e;
document.writeln(typeof e + "<br>")

let x = 4;
let y = 5;
let z = String(x) + String(y)
document.writeln(z + "<br>");

try {
    alert("No errors found!");
} catch (error) {
    document.writeln(error);
}

try {
    let num = 4;
    document.writeln(num.toUpperCase() + "<br>")
} catch (error) {
    document.writeln(error + "<br>");
}

const day = () => new Date().getDay();

const display_day = (today) => {
    let days = {
        "0": "sunday",
        "1": "monday",
        "2": "tuesday",
        "3": "wednesday",
        "4": "thursday",
        "5": "friday",
        "6": "saturday",
    }
    document.writeln(days[today]);
}

document.writeln(day() + "<br>");
display_day(day());