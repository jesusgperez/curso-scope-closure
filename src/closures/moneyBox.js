function moneyBox(coins){
    let saveCoins = 0
    saveCoins += coins
    console.log(`Money Box: $${saveCoins}`)
}

moneyBox(5)
moneyBox(5)

function moneyBoxClosure(){
    let saveCoins = 0
    function countCoins(coins) {
        saveCoins += coins
        console.log(`Money Box: $${saveCoins}`)
    }
    return countCoins
}

const g = moneyBoxClosure()
g(5)
g(5)
g(15)

const ana = moneyBoxClosure()
ana(10)
ana(20)
ana(5)