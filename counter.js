const x=document.querySelector(".btn1");
const inc1=document.querySelector(".in1");
inc1.addEventListener('click',()=>{
    let curr=parseInt(x.textContent);

    let newv=curr+1;

    x.textContent=newv;
})

const y=document.querySelector(".btn2");
const inc2=document.querySelector(".in2");
inc2.addEventListener('click',()=>{
    let curr=parseInt(y.textContent);

    let newv=curr+1;

    y.textContent=newv;

})

const dec1=document.querySelector(".d1");
dec1.addEventListener('click',()=>{
    let curr=parseInt(x.textContent);

    let newv=curr-1;

    x.textContent=newv;
})

const dec2=document.querySelector(".d2");
dec2.addEventListener('click',()=>{
    let curr=parseInt(y.textContent);

    let newv=curr-1;

    y.textContent=newv;

})

const z=document.querySelector(".btn3");
const b=document.querySelector("body");
b.addEventListener('click',()=>{
    let curr1=parseInt(x.textContent);
    let curr2=parseInt(y.textContent);

    let newv=curr1+curr2;

    z.textContent=newv;
})
