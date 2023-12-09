// for of loop
const arr = [1,2,3,4,5]

for(const val of arr){
    console.log(val)
}

// Maps same order unique, object which hold key value pairs

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('Fr', "France")

for(const [key, value] of map){
    console.log(key, value);
}


// to iterate i objects use for in loop
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for each loop
const coding = ["js", "ruby","java"]

// coding.forEach(function (item) {
//     console.log(item);
// });

// coding.forEach((item) => {
//     console.log(item);
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },    
    {
        languageName : "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
});

// for each loop donot return any values
// filters are used to return values
const myNums = [1,2,3,4,5,6,7,8,9]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

// map automatically returns
const ans = myNums.map((num) => num+10)
console.log(ans);

// chaining
const ans1 = myNums
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num >= 40)
console.log(ans1);

// reduce
const Nums = [1,2,3]
// const myTotal = Nums.reduce(function (acc, curval) {
//     console.log(`acc : ${acc} and curval : ${curval}`)
//     return acc + curval
// }, 0)

const myTotal = Nums.reduce( (acc , curval) => acc +curval , 0)
console.log(myTotal);