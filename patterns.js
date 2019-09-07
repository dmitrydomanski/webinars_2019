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
    // run
}

function Animal (name, energy) {
    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy
    // const { sleep, eat, play } = animalMethods
    // animal.sleep = animalMethods.sleep
    // animal.eat = animalMethods.eat
    // animal.play = animalMethods.play
    // animal.run = animalMethods.run

    // animal.sleep = function(dur){
    //     console.log(`${this.name} is sleeping...`)
    //     this.energy += dur
    // }
    
    // animal.play = function(hours){
    //     console.log(`${name} is playing...`)
    //     this.energy -= hours
    // }
    
    // animal.eat = function(amount){
    //     console.log(`${this.name} is eating...`)
    //     this.energy += amount
    // }
    return animal
}

let duck = Animal('McDuck', 5)
let jumbo = Animal('Jumbo', 50)

duck.sleep()
jumbo.eat()

