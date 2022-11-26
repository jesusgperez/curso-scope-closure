const globalVar = 0

function theFunction(){
    const number = 1
    console.log(globalVar)

    function parent(){
        const inner = 2
        console.log(number, globalVar)

        function child(){
            console.log(inner, number, globalVar)
        }

        return child()
    }
    return parent()
}

theFunction()