// singleton (object created by constructor)
// Object.create

const mySym = Symbol("key1")
// object literals
const JsUser = {
    name:"Raman",
    "full name":"RamanpreetKaur",
    [mySym]:"mykey1",
    age:25,
    location:"PKL",
    email:"Raman@google.com",
    isLoggedIn: false,
    localLoginDays: ["Monday", "Saturday"]   
}

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// Object.freeze(JsUser)
JsUser.email="asddsaasd"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object() // this ia singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// nested object
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "Ramanpreet",
            lastname : "Kaur"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 12,
        email : "h12@gmail.com"
    }
]
users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
