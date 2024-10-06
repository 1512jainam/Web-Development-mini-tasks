const r1=document.getElementById("r1");
let R1=r1.textContent;

r1.addEventListener('click',function(){
    p1.innerHTML=0;
    s1.innerHTML=0;
    r1.innerHTML=1;
    checkresult();
})

const r2=document.getElementById("r2");
let R2=r1.textContent
r2.addEventListener('click',function(){
    r2.innerHTML=1;
    p2.innerHTML=0;
    s2.innerHTML=0;
    checkresult();
})

const p1=document.getElementById("p1");
let P1=p1.textContent;
p1.addEventListener('click',function(){
    p1.innerHTML=1;
    s1.innerHTML=0;
    r1.innerHTML=0;
    checkresult();
})

const p2=document.getElementById("p2");
let P2=p2.textContent;
p2.addEventListener('click',function(){
    r2.innerHTML=0;
    p2.innerHTML=1;
    s2.innerHTML=0;
    checkresult();
})

const s1=document.getElementById("s1");
let S1=s1.textContent;
s1.addEventListener('click',function(){
    p1.innerHTML=0;
    s1.innerHTML=1;
    r1.innerHTML=0;
    checkresult();
})

const s2=document.getElementById("s2");
let S2=s2.textContent;
s2.addEventListener('click',function(){
    r2.innerHTML=0;
    p2.innerHTML=0;
    s2.innerHTML=1;
    checkresult();
})

const a=document.getElementById("a");
const A=a.textContent;
const b=document.getElementById("b");
const B=b.textContent;

const li=document.getElementById('list');

function checkresult(){
if((r1.innerHTML==='1' && r2.innerHTML==='1') ||(p1.innerHTML==='1' && p2.innerHTML==='1') || (s1.innerHTML==='1' && s2.innerHTML==='1') ){
    a.innerText="DRAW";
    b.innerText="DRAW";
    li.textContent="RESULT : " + a.innerHTML+" "+b.innerHTML;
    reload();
}
else if((r1.innerHTML==='1' && s2.innerHTML==='0') ||(p1.innerHTML==='1' && r2.innerHTML==='0') || (s1.innerHTML==='1' && p2.innerHTML==='0') ){
    a.innerText="LOSE";
    b.innerText="WIN";
    li.textContent="RESULT : " + a.innerHTML+" "+b.innerHTML;
    reload();
   
}

else if((r2.innerHTML==='1' && s1.innerHTML==='0') ||(p2.innerHTML==='1' && r1.innerHTML==='0') || (s2.innerHTML==='1' && p1.innerHTML==='0') ){
   
    a.innerText="WIN";
    b.innerText="LOSE";
    li.textContent="RESULT : " + a.innerHTML+" "+b.innerHTML;
    reload();
}

}
function reload(){
    r1.textContent=R1;
    r2.textContent=R2;
    p1.textContent=P1;
    p2.textContent=P2;
    s1.textContent=S1;
    s2.textContent=S2;
    a.textContent=A;
    b.textContent=B;
}

