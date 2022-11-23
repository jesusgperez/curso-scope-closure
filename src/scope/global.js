//variables
var a = 'a' //declaración

a='aa' //reasignación

var a = 'aa' //redeclaración

//global scope
var fruit = 'apple' //global scope

function bestFruit(){
    console.log(fruit)
}

bestFruit()

function countries(){
    country = 'Colombia' //global
    console.log(country)
}

countries()
console.log(country)