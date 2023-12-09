const addTwo = (num1, num2) => {
    return num1+num2
}

console.log(addTwo(5,6));
// implicit return
const addTwo2 = (num1, num2) => num1+num2
const addTwo3 = (num1, num2) => (num1+num2)

const addTwo4 = (num1, num2) => ({username : "Raman"})
console.log(addTwo4(5,6));
