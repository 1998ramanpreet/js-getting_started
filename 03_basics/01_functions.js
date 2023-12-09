// (...)Rest operator used to take multiple parameters in a function call

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "raman",
    prices : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username : "aman",
    price : 99
})

const myNewArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(addOne(5));
function addOne(num){
    return num+1
}


const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));