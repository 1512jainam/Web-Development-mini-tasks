
let f1=(f2)=>{
    this.greet="welcome";
    f2();
    console.log(this.greet);
}

let f2=()=>{
    this.greet="hello";
    console.log(this.greet);
}

f1(f2);