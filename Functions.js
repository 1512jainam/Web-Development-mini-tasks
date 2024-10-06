function func(){
    console.log("Hi");
}

func();

//Annonymous function
let fun=function(){
    console.log("Hiiii");
}

fun();

// other example 

let invitation = function(name){
    console.log(`welcome ${name}`);
}
invitation("jainam");

// return 

let age=function(year){
    let age1=2023- year;
    return age1;
}

console.log(age(2004));

//Arrow function
let arrow = Name =>`welcome ${Name} !`;// return ,paranthesis and curely is not use only in the case of the single line of the code
//Name is parameter and arrow is the function name
console.log(arrow("jainam"));

//Passing function as an Argument(Higher order function example)
let uppercase =function(str){
    return str.toUpperCase();
}

let lowercase = function(str){
    return str.toLowerCase();
}

let transformer = function(str,fun){
    return fun(str);
}

console.log(transformer("HEllo",lowercase));


// Another example
let compliment = function(msg){
    return function(name1){
        console.log(`${msg} ${name1}`);
    }
}

//1st method
compliment("hello codder -")("jainam bhatt");

//2nd method 
let comp= compliment("hello codder - ");
comp("jainam bhatt");
console.log(comp);
//here compliment is the higher function

//IIFE(immediately invoked function expression)
(function(name){
    console.log("Hello",name);
})("jainam"); 

// setTimeOut and serInterval 

function greeting(name){
    console.log(`hello ${name}`);
} 
setTimeout(greeting,5000,"jainam");

//  setInterval(greeting,3000,"jainam");

//hosting
test =10;
console.log(test)
var test;// it can be possible only in var 

test1();
function test1(){
    console.log("hello programmer");
}

// test2();
// let test2 = ()=>{      OR
    // let test2 = function(){
    // console.log("HI");
// } //---->IT will throw the error 

//wrapper function:
function wrapper(orgfun){
    return function (...args){
        try {
            return orgfun(...args);
        } catch (error) {
            return "Error";
        }
    }
}

function add(a,b){
    return a+b;
}
const wrapperAdd= wrapper(add);
let result =wrapperAdd(2,3);
console.log(result);