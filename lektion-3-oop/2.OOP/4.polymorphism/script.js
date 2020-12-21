/* Polymorphism */

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    makeSound() {
        console.log(`this is the sound from the parent class.`)
    }

    connectToDatabase() {
        console.log(`Connecting to database`)
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    connect() {
        super.connectToDatabase()
        console.log(`${this.name} says woof woof`)
    }
}


const dog = new Dog('Flexi', 23)
dog.connect()