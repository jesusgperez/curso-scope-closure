var firstName //undefined
firstName = 'Jesus'
console.log(firstName)

var lastName = "Perez" //declarar - asignar
lastName = "Siculaba"
console.log(lastName)

var secondName = 'Jesus'
var secondName = 'Gabriel'
console.log(secondName)

let fruit = 'apple'
fruit = 'kiwi'
console.log(fruit)

//let fruit = 'banana' cannot redeclare a variable with let
console.log(fruit)

const animal = 'dog'
//animal = 'cat' cannot reassing
//const animal = 'cat' cannot redeclare
console.log(animal)

const vehicles = [] //Not infalible, you can add or remove elements from arrays
vehicles.push('carro')
console.log(vehicles)
vehicles.pop()
console.log(vehicles)