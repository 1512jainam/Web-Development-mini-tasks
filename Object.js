let car={
    color:"black",
    model:"2023",
    company:"Ferrari"
}
console.log(car);

console.log(car["company"])
console.log(car.company);

let propertyname= "color";
console.log(car[propertyname]);// it can pass as variable
console.log(car.propertyname);//It will not work

//modify 
car.color="brown";
console.log(car.color);

//delete

let obj={
    prop1:"v1",
    prop2:"v2"
}
delete obj["prop2"];

console.log(obj.prop2);

//methods:

let person = {
    agecalculate : function(birthyear){
        let age=2023-birthyear;
        return age;
    }
}

console.log(`age is : ${person.agecalculate(2004)} years `);

//this keyword

let person1={
    firstName:"jainam",
    lastName:" bhatt",
    city:"pune",
    
    summary : function(){
        return `${this.firstName} ${this.lastName} is living in ${this,this.city}`;
        //return this
    }
}

console.log(person1.summary());

//for each loop
let arr=["1","2","3"];

arr.forEach(function(it){
    console.log(it);
})

//Math object is also there

// call and apply mehod:
// call method takes arguments and apply takes it in the form of the array

let human={
    fullname : function(city,country){
        return this.firstname +" " +this.lastname+" is living in " + city + " ," +country;
    }
}

let human1={
    firstname : "jainam",
    lastname : "Bhatt"
}

let one=human.fullname.call(human1,"mumbai","India");
console.log(one);
let two =human.fullname.apply(human1,["mumbai","India"]);
console.log(two);
// bind method

function greet(){
    console.log(`${this.first} ${this.last}`);
}

let user={
    first:"Jainam",
    last: "bhatt"
}

let Greet=greet.bind(user);
Greet();

//Object/Array passed:
let arr1=["1","2","3","4"];
let ref=arr1;
console.log(arr1);
ref[3]="7";
console.log(arr1);

// pass by value by this only ref1 will be changed and no change in the original arr1
let ref1=[...arr1];
ref1[0]="6";
console.log(arr1);
console.log(ref1);

//for in loop ---> each operation will return the key of the object

let car1={
    color:"black",
    model:"2023",
    company:"Ferrari"
}

for(let k in car1){
    console.log(k +" -> " +car1[k]);
} 