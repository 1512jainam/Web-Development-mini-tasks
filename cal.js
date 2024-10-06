let string="";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==="="){
            string=eval(string);
        }
        else if(e.target.innerHTML=="C"){
            string=""
        }
        else{
        console.log(e.target)
        string=string+ e.target.innerHTML;
        }
        document.querySelector('input').value=string;
    })
})

function changecolor(){
const i=document.getElementById("m");
if(i.innerHTML==="mode"){
    i.innerHTML='hello';
    document.body.style.background='rgb(150, 112, 56)';
}
else{
    i.innerHTML='mode';
    document.body.style.background='gray';
}
}