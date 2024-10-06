const h=document.querySelector("#h");
const w=document.querySelector("#w");
const out=document.querySelector("h2")

const cal=()=>{

    const hval=parseFloat(h.value);
    const wval=parseFloat(w.value);
    
    if(!isNaN(hval) && !isNaN(wval)){
        const o=(wval)/((hval*hval)/10000);
        out.innerHTML=`BMI IS ${o}`;
    }
    else{
        "please enter valid text";
    }

    out.innerHTML=o;
}