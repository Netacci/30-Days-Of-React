// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getAnimalInfo() {
        const animalInfo = `The Animal's name is ${this.name}, it is ${this.age} years old, ${this.color} in Color and has ${this.legs} legs.`
        return animalInfo
        
    }
}

const animal1 = new animal ("Wimpy", 5, "Brown", 2)
console.log(animal1)
console.log(animal1.getAnimalInfo())
// Create a Dog and Cat child class from the Animal Class.
class dog extends animal {

}
const dog1 = new dog("doggie", 4, "White", 2)
console.log(dog1)
console.log(dog1.getAnimalInfo())
// Override the method you create in Animal class

class cat extends animal {
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs)
        this.breed = breed
    }
    getAnimalInfo(){
        const animalInfo = `The Animal's name is ${this.name}, it is ${this.age} years old, ${this.color} in Color and has ${this.legs} legs. It is a ${this.breed} Breed`
        return animalInfo
    }

}
const cat1 = new cat("Nany", 6, "Milk", 2, "dalmatian")
console.log(cat1)
console.log(cat1.getAnimalInfo())