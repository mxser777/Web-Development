class Animal {
    constructor(n, a) {
        // properties
        this.name = n;
        this.age = a;
    }

    //method
    displayinfo() {
        return "name: " + this.name + "<br>age: " + this.age + "<br>";
    }

    static showkingdom() {
        return "Animal kingdom"
    }
}

class Dog extends Animal {
    constructor(n, a, is_friendly) {
        super(n, a);
        this.is_friendly = is_friendly;
    }

    displaydog() {
        return "Dog information:<br>" + this.displayinfo() + "is friendly" + this.is_friendly + "<br><br>";
    }
}

class Cat extends Animal {
    constructor(n, a, is_friendly) {
        super(n, a);
        this.is_friendly = is_friendly;
    }

    displaycat() {
        return "Cat information:<br>" + this.displayinfo() + "is friendly" + this.is_friendly + "<br><br>";
    }
}

// create object
let adog = new Dog("Max", 2, true);
document.getElementById("animal_info").innerHTML = adog.displaydog();
document.getElementById("kingdom").innerHTML = Dog.showkingdom();

let acat = new Cat("cupcake", 1, false);
document.getElementById("animal2_info").innerHTML = acat.displaycat();
document.getElementById("kingdom2").innerHTML = Cat.showkingdom();