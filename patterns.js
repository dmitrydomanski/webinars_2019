let animal = {}
animal.name = 'Lion';
animal.energy = 10;

animal.sleep = function(dur){
    console.log(`${this.name} is sleeping...`)
    this.energy += dur
}

animal.play = function(hours){
    console.log(`${name} is playing...`)
    this.energy -= hours
}

animal.eat = function(amount){
    console.log(`${this.name} is eating...`)
    this.energy += amount
}

// animal.play()
const animalMethods = {
    sleep (dur){
        console.log(`${this.name} is sleeping...`)
        this.energy += dur
    },
    play (hours){
        console.log(`${name} is playing...`)
        this.energy -= hours
    },
    eat (amount){
        console.log(`${this.name} is eating...`)
        this.energy += amount
    },
    run (distance) {
        console.log(`${this.name} is running...`)
        this.energy -= distance * 0.1
    }
}

// function Animal (name, energy) {
//     // let animal = Object.create(Animal.prototype)
//     this.name = name
//     this.energy = energy
//     // return animal
// }

class Animal {
    constructor (name, energy) {
        this.energy = energy
        this.name = name
    }
}

Animal.prototype.sleep = function (dur){
    console.log(`${this.name} is sleeping...`)
    this.energy += dur
}

Animal.prototype.play = function (hours){
    console.log(`${name} is playing...`)
    this.energy -= hours
}

Animal.prototype.eat = function (amount){
    console.log(`${this.name} is eating...`)
    this.energy += amount
}

Animal.prototype.run = function (distance) {
    console.log(`${this.name} is running...`)
    this.energy -= distance * 0.1
}

const horse = new Animal('Orlik', 15)
const dog = new Animal ('Chuck', 5)

horse.run()
dog.eat()

// let duck = Animal('McDuck', 5)
// let jumbo = Animal('Jumbo', 50)

// duck.sleep()
// jumbo.eat()
// jumbo.run()
