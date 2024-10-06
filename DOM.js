// DOM(document object model)
//created by browser as the html load into the browser

// console.log(document);

// GEtting html element/s using queryselector/ALL
//querySelector returns "first element" that match Css selector
//To get all matches elements we use queryselectorAll

let resultedElement= document.querySelector('p');
console.log(resultedElement);

let resultedElement1= document.querySelectorAll('p');
console.log(resultedElement1);

let resultedElement2= document.querySelector('.jainam');
console.log(resultedElement2);

// resultedElement2.forEach(element => {
//     console.log(element);
// }); ---> WHY ERROR???????

let resultedElement3= document.querySelector('#j');
console.log(resultedElement3);

//other method:(outdated)

let tagelements=document.getElementsByTagName('p');
console.log(tagelements);

let classNameElements= document.getElementsByClassName('jainam');
console.log(classNameElements);

let elementbyID=document.getElementById('j');
console.log(elementbyID);

// Updating and Changing content

//innerText:
//Ignore Spaces
let heading=document.querySelector('p');
console.log(heading.innerText);// WHY ERROR?

//It does not ignore the spaces
console.log(heading.innerHTML);// WHY ERROR?

// heading.innerText="hello0000000"
// heading.innerText+="hello0000000"
heading.innerHTML+="<p>hello0000000</p>"

//Getting and Setting attribute of element

let Link=document.querySelector('a');
console.log()

// let d=new Date();
// console.log(d.getTime());

// localStorage.setItem("1","one");
// console.log(localStorage.getItem("1"));