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

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
