// console.log("this is my first java script programm")

// var score= 2; Now it is not used.

let points = 2;
const c=45;

console.log(points);
console.log(c);

let score=null;
console.log(score);

let first1="Hi";
let first2="hello";

console.log(first1,first2);
console.log(first1+" "+first2);

// method using template literals:

let fullname=`I am batman ${first1} ${first2}`;
console.log(fullname);

console.log(fullname[2]);

console.log(first1.toUpperCase());
console.log(first2.indexOf('l'));
console.log(first2.includes("llo"));

//split:

let colors="one two three four";
let arr=colors.split(' ');
console.log(arr);

// string is not muttable 
let str="HEllo";
str[0]='w';
console.log(str);

//typeof:
let s=50;
console.log(s,typeof s);
console.log(s/2);
console.log(s%3);

// Loose Equality operator == :
let a=22;
console.log(a=="22");
console.log(a>"20");
console.log(a!="22");

//Strict Equality operator === :
console.log(a==="22");
console.log(a!=="22");

// Type Coversion :

// let s1="jainam"; IN this case output will be NaN cause this string cant convert into the number 
let s1="57";
console.log(s1,typeof s1);

let num=Number(s1);
console.log(num,typeof num);

//Boolean method:
let age=23;
let age1="";
let Booleanvalue=Boolean(age);
let Booleanvalue1=Boolean(age1);
console.log(Booleanvalue,Booleanvalue1);

//Array
let ar=["f1","f2","f3"];
console.log(ar);

let ar1=["f4","f5"];

console.log(ar.concat(ar1));
console.log(ar.length);

console.log(ar.push("f6"));// it returns the length of the array
console.log(ar);