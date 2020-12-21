class Animal {
    constructor(name, age, sound = 'generic sound') {
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.age = age
        this.sound = sound
    }

    makeSound() {
        return `${this.name} says ${this.sound}!`
    }
}

class Dog extends Animal {
    constructor(name, age, sound) {
        super(name, age, sound)
    }
}

class Cat extends Animal {
    constructor(name, age, sound, lives) {
        super(name, age, sound) 
        
        this.lives = lives        
    }

    numberOfLives() {
        return `${this.name} has ${this.lives} lives.`
    }
}

const dog = new Dog('doogini', 5, 'woof woof')
const cat = new Cat('catini', 1, 'mjau', 9)

console.log(dog.makeSound())
console.log(cat)
console.log(cat.makeSound())
console.log(cat.numberOfLives())


// C#
// protected class Animal {
//     public Name { get; set; }    

//     public string MakeSound()
//     {
//         return $"{Name} makes a generic sound!"
//     }
// }

// public class Dog : Animal {
//     public Age { get; set; }

//     public Dog(string name, int age)
//     {
//         Name = name;
//         Age = age;
//     }
// }