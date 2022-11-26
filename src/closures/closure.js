function greeting(){
    let username = 'Jesus'
    function displayUsername(){
        return `Hello ${username}`
    }
    return displayUsername
}

g = greeting()
console.log(g)
console.log(g())