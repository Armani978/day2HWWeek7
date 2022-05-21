//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function parseThru(){

    for (let key in person3){
        console.log(key)
        console.log(person3[key])}
        
    }
console.log(parseThru())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// function Person(name, age){
//     this.name = name;
//     this.age = age;
    
//     this.printInfo = function(name, age){
//         console.log(`This person name is ${this.name} and they are ${this.age} years old. `)
//     }
    
//     this.addAge = function(name, age){
//         console.log(`I dont know what to write so ${this.name}'s age ${this.age++} is going to increase by 1 everytime this method is called.`)
//     }
    
// }
// let person1 = new Person('Armani', 24)

// console.log(person1.name)
// console.log(person1.age)

// person1.printInfo()
// person1.addAge()
// person1.addAge()
// person1.addAge()
// person1.addAge()


// let person2 = new Person('Ronald', 40)
// console.log(person2.name)
// console.log(person2.age)

// person2.printInfo()





// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


function aPromise(string){
    return new Promise((resolve,reject)=>{
        if (string.length > 10){
        resolve("Big Word")
        } else {
        reject("Small Number")
        }
    
    }
    )}

console.log(aPromise('bookjhgfhjk'))