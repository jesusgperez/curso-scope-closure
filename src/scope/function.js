function greeting(){
    let userName = 'Ana'
    console.log(userName)

    if (userName === 'Ana') {
        console.log(`Hello ${userName}`)
    }
}

greeting()
console.log(userName) //Cannot be accessed since it's local to the function