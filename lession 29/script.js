let student = {
    name: "Tarun",
    grade: 8
};

// JS object into JSON
let json_txt = JSON.stringify(student);
document.writeln(json_txt + "<br>");

// JSON into JS object
let new_student = JSON.parse(json_txt);
document.writeln(new_student.name + "<br>");

function bringPizza() {
    return new Promise(function (resolve, reject) {
        const broughtPizza = true;

        setTimeout(function () {
            if (broughtPizza) {
                resolve("friend has brought the pizza!");
            }
            else {
                reject("friend did not bring the pizza");
            }
        }, 2000);
    });
}

async function hangout() {
    document.writeln("you called your friend to bring you a pizza!<br>");


    try {
        const message = await bringPizza();
        document.writeln("message: " + message + "<br>");
        document.writeln("lets hangout!");
    } catch (error) {
        document.writeln("message: " + error + "<br>");
        document.writeln(" we cant hangout");
    }

}

hangout();