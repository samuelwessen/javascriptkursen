/* Inheritence */

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Dog extends Animal {
    constructor(name, age, forHunting) {
        super(name, age)
        this.forHunting = forHunting        
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age)        
    }
}

const dog = new Dog('Flexi', 23, true)
const cat = new Cat('Deexi', 12)

console.log(dog.name, dog.forHunting)
console.log(cat.name, cat.forHunting)

