var student = {
    name: john;
    age: "12";
    grade: "7";
    hobbies: "piano";
    favourite_sport: "football";
}

var color = ["white", "black", "red", "green", "blue"];

document.writeln("student name is : " + student.name, "<br>", "student favourite sport is : " + student.favourite_sport);

document.writeln("before popping the colors are: " + color.join());

document.writeln("my favourite colour is : " + color[3]);

color.pop();
document.writeln("after popping the colors are : " + color.join("*"));