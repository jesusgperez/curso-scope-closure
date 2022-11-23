function fruits() {
    if (true) {
        var fruit = 'apple' //function scope
        let fruit2 = 'kiwi' //block scope
        const fruit3 = 'banana' //block scope
        console.log(fruit2)
        console.log(fruit3)
    }

    console.log(fruit)
}

fruits()